(function () {
  // Sticky header shadow on scroll
  var h = document.querySelector("header");
  function s() {
    h.classList.toggle("scrolled", window.scrollY > 8);
  }
  s();
  addEventListener("scroll", s, { passive: true });

  // Dynamic copyright year
  var yr = document.getElementById("yr");
  if (yr) {
    yr.textContent = new Date().getFullYear();
  }

  // Dark / light mode toggle
  var root = document.documentElement;
  var tb = document.getElementById("theme");
  var saved = null;
  try {
    saved = localStorage.getItem("tmm-theme");
  } catch (e) {}

  function setTheme(v) {
    root.setAttribute("data-theme", v);
    if (tb) {
      tb.setAttribute(
        "aria-label",
        v === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  setTheme(saved || "light");

  if (tb) {
    tb.addEventListener("click", function () {
      var v = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(v);
      try {
        localStorage.setItem("tmm-theme", v);
      } catch (e) {}
    });
  }

  // Mobile hamburger menu toggle
  var menuBtn = document.getElementById("menu-btn");
  var nav = document.getElementById("nav");

  function closeMenu() {
    if (!h || !menuBtn) return;
    h.classList.remove("menu-open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
  }

  if (menuBtn && h) {
    menuBtn.addEventListener("click", function () {
      var isOpen = h.classList.toggle("menu-open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    if (nav) {
      nav.addEventListener("click", function (e) {
        if (e.target.closest("a")) {
          closeMenu();
        }
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeMenu();
      }
    });

    document.addEventListener("click", function (e) {
      if (h.classList.contains("menu-open") && !h.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // Contact form handler (FormSubmit AJAX with mailto fallback)
  var form = document.getElementById("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      if (d.get("_honey")) return;

      var sub = d.get("subject") || "Free diagnosis request";
      var note = document.getElementById("note");
      var btn = form.querySelector('button[type="submit"]');

      if (btn) btn.disabled = true;
      if (note) note.textContent = "Sending message...";

      fetch("https://formsubmit.co/ajax/TexasMobileMechanics@Gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: d.get("name"),
          email: d.get("email"),
          phone: d.get("phone") || "Not provided",
          subject: sub,
          message: d.get("message") || "",
          _subject: "New Lead: " + sub,
          _template: "table",
          _captcha: "false",
        }),
      })
        .then(function (res) {
          return res.json().then(function (data) {
            if (!res.ok || data.success === "false" || data.success === false) {
              throw new Error(data.message || "Submission failed");
            }
            return data;
          });
        })
        .then(function () {
          if (note) {
            note.textContent = "Message sent! We'll get back to you shortly.";
          }
          form.reset();
        })
        .catch(function () {
          // Fallback to mailto so no customer lead is ever lost
          var body =
            "Name: " +
            d.get("name") +
            "\nEmail: " +
            d.get("email") +
            "\nPhone: " +
            (d.get("phone") || "") +
            "\n\n" +
            (d.get("message") || "");
          if (note) {
            note.textContent = "Opening your email app...";
          }
          location.href =
            "mailto:TexasMobileMechanics@Gmail.com?subject=" +
            encodeURIComponent(sub) +
            "&body=" +
            encodeURIComponent(body);
        })
        .finally(function () {
          if (btn) btn.disabled = false;
        });
    });
  }
})();

