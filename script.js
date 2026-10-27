(function () {
  // Sticky header shadow on scroll
  var h = document.querySelector("header");
  function s() {
    if (h) h.classList.toggle("scrolled", window.scrollY > 8);
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

  // Warranty Plans: Sliding 3-Tab Controller + URL Sync
  var planTabsContainer = document.querySelector(".plan-tabs");
  if (planTabsContainer) {
    var tabs = Array.prototype.slice.call(
      planTabsContainer.querySelectorAll(".plan-tab")
    );
    var panels = Array.prototype.slice.call(
      document.querySelectorAll(".plan-panel")
    );
    var planOrder = ["standard", "plus", "premium"];
    var planTitles = {
      standard: "Texas Mobile Mechanics | Standard Plan",
      plus: "Texas Mobile Mechanics | Plus Plan",
      premium: "Texas Mobile Mechanics | Premium Plan",
    };

    function detectPlanFromUrl() {
      try {
        var params = new URLSearchParams(window.location.search);
        var q = (params.get("plan") || "").toLowerCase();
        if (planOrder.indexOf(q) !== -1) return q;
      } catch (e) {}

      var hash = (window.location.hash || "").replace(/^#/, "").toLowerCase();
      if (planOrder.indexOf(hash) !== -1) return hash;

      var path = (window.location.pathname || "").toLowerCase();
      if (path.indexOf("plus") !== -1) return "plus";
      if (path.indexOf("premium") !== -1) return "premium";
      if (path.indexOf("standard") !== -1) return "standard";

      var fallback = planTabsContainer.getAttribute("data-default-plan");
      if (fallback && planOrder.indexOf(fallback) !== -1) return fallback;
      return "standard";
    }

    function activatePlan(planKey, updateHistory) {
      var idx = planOrder.indexOf(planKey);
      if (idx === -1) {
        idx = 0;
        planKey = "standard";
      }

      planTabsContainer.setAttribute("data-active-index", String(idx));

      tabs.forEach(function (tab, i) {
        var active = i === idx;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", active ? "true" : "false");
        tab.setAttribute("tabindex", active ? "0" : "-1");
      });

      panels.forEach(function (panel) {
        var active = panel.getAttribute("data-plan-panel") === planKey;
        panel.classList.toggle("is-active", active);
        panel.setAttribute("aria-hidden", active ? "false" : "true");
      });

      // Sync dropdown active state
      var ddLinks = document.querySelectorAll("[data-plan-link]");
      ddLinks.forEach(function (link) {
        if (link.getAttribute("data-plan-link") === planKey) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });

      if (planTitles[planKey]) {
        document.title = planTitles[planKey];
      }

      if (updateHistory && window.history && window.history.pushState) {
        try {
          var url = new URL(window.location.href);
          url.searchParams.set("plan", planKey);
          window.history.pushState({ plan: planKey }, "", url.toString());
        } catch (e) {}
      }
    }

    tabs.forEach(function (tab, idx) {
      tab.addEventListener("click", function () {
        var planKey = tab.getAttribute("data-plan") || planOrder[idx];
        activatePlan(planKey, true);
      });

      tab.addEventListener("keydown", function (e) {
        var nextIdx = null;
        if (e.key === "ArrowRight") nextIdx = (idx + 1) % tabs.length;
        else if (e.key === "ArrowLeft")
          nextIdx = (idx - 1 + tabs.length) % tabs.length;
        else if (e.key === "Home") nextIdx = 0;
        else if (e.key === "End") nextIdx = tabs.length - 1;

        if (nextIdx !== null) {
          e.preventDefault();
          tabs[nextIdx].focus();
          activatePlan(planOrder[nextIdx], true);
        }
      });
    });

    // Intercept header dropdown plan links when already on a warranty page
    var navPlanLinks = document.querySelectorAll("[data-plan-link]");
    navPlanLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        var targetPlan = link.getAttribute("data-plan-link");
        if (targetPlan && planOrder.indexOf(targetPlan) !== -1) {
          e.preventDefault();
          activatePlan(targetPlan, true);
          closeMenu();
          var card = document.getElementById("warranty-plans");
          if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        }
      });
    });

    window.addEventListener("popstate", function () {
      activatePlan(detectPlanFromUrl(), false);
    });

    window.addEventListener("hashchange", function () {
      activatePlan(detectPlanFromUrl(), false);
    });

    activatePlan(detectPlanFromUrl(), false);
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

  // YouTube IFrame Player API loader (initializes #my-youtube-video on any page)
  var ytContainer = document.getElementById("my-youtube-video");
  if (ytContainer) {
    var prevReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () {
      if (typeof prevReady === "function") prevReady();
      new YT.Player("my-youtube-video", {
        width: "100%",
        height: "100%",
        videoId: "op5XMLRusjI",
        playerVars: {
          playsinline: 1,
          rel: 0,
        },
      });
    };

    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      var tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    }
  }
})();
