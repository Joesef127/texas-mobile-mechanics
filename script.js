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

  // Contact form mailto handler
  var form = document.getElementById("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(e.target);
      var body =
        "Name: " +
        d.get("name") +
        "\nEmail: " +
        d.get("email") +
        "\nPhone: " +
        (d.get("phone") || "") +
        "\n\n" +
        (d.get("message") || "");
      var sub = d.get("subject") || "Free diagnosis request";
      var note = document.getElementById("note");
      if (note) {
        note.textContent = "Opening your email app.";
      }
      location.href =
        "mailto:TexasMobileMechanics@Gmail.com?subject=" +
        encodeURIComponent(sub) +
        "&body=" +
        encodeURIComponent(body);
    });
  }
})();

