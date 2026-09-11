document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const createButton = document.querySelector(".create-button");

  const composer = document.querySelector(".composer");
  const composerInput = document.querySelector(".composer-input");
  const audienceButton = document.querySelector(".audience-button");
  const postButton = document.querySelector(".post-button");

  const homePage = document.getElementById("home-page");
  const explorePage = document.getElementById("explore-page");
  const homeNav = document.querySelector('[data-page="home"]');
  const exploreNav = document.querySelector('[data-page="explore"]');

  const exploreTabs = document.querySelectorAll("[data-explore-tab]");
  const explorePanels = document.querySelectorAll("[data-explore-panel]");

  let composerOpen = false;
  let audienceMenuOpen = false;

  function showPage(pageName) {
    if (pageName === "explore") {
      homePage.classList.remove("active-page");
      explorePage.classList.add("active-page");

      navItems.forEach((nav) => nav.classList.remove("active"));
      exploreNav.classList.add("active");

      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    explorePage.classList.remove("active-page");
    homePage.classList.add("active-page");

    navItems.forEach((nav) => nav.classList.remove("active"));
    homeNav.classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  homeNav.addEventListener("click", () => showPage("home"));
  exploreNav.addEventListener("click", () => showPage("explore"));

  navItems.forEach((item) => {
    if (
      item === homeNav ||
      item === exploreNav ||
      item.classList.contains("create-button")
    ) {
      return;
    }

    item.addEventListener("click", () => {
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");
    });
  });

  function showExplorePanel(panelName) {
    exploreTabs.forEach((tab) => {
      const isActive = tab.dataset.exploreTab === panelName;

      tab.classList.toggle("active", isActive);
      tab.setAttribute(
        "aria-selected",
        isActive ? "true" : "false"
      );
    });

    explorePanels.forEach((panel) => {
      panel.classList.toggle(
        "active-explore-panel",
        panel.dataset.explorePanel === panelName
      );
    });
  }

  exploreTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      showExplorePanel(tab.dataset.exploreTab);
    });
  });

  function openComposer() {
    if (composerOpen) return;

    composerOpen = true;

    const textarea = document.createElement("textarea");
    textarea.className = "composer-textarea";
    textarea.placeholder = "Speak your mind...";
    textarea.rows = 4;

    composerInput.replaceWith(textarea);

    textarea.focus();

    composer.classList.add("composer-open");
  }

  composerInput.addEventListener("click", openComposer);

  createButton.addEventListener("click", () => {
    showPage("home");
    openComposer();
  });

  const audienceMenu = document.createElement("div");
  audienceMenu.className = "audience-menu";

  audienceMenu.innerHTML = `
    <button data-audience="Public">
      <strong>Public</strong>
      <span>Anyone can see this post</span>
    </button>

    <button data-audience="Friends">
      <strong>Friends</strong>
      <span>Your friends can see this post</span>
    </button>

    <button data-audience="Specific Friends">
      <strong>Specific Friends</strong>
      <span>Choose who can see this post</span>
    </button>

    <button data-audience="Only Me">
      <strong>Only Me</strong>
      <span>Only you can see this post</span>
    </button>
  `;

  composer.appendChild(audienceMenu);

  audienceButton.addEventListener("click", (event) => {
    event.stopPropagation();

    audienceMenuOpen = !audienceMenuOpen;

    audienceMenu.classList.toggle(
      "audience-menu-open",
      audienceMenuOpen
    );
  });

  audienceMenu
    .querySelectorAll("button")
    .forEach((option) => {
      option.addEventListener("click", () => {
        audienceButton.textContent =
          option.dataset.audience;

        audienceMenuOpen = false;

        audienceMenu.classList.remove(
          "audience-menu-open"
        );
      });
    });

  document.addEventListener("click", (event) => {
    if (
      audienceMenuOpen &&
      !audienceMenu.contains(event.target) &&
      !audienceButton.contains(event.target)
    ) {
      audienceMenuOpen = false;

      audienceMenu.classList.remove(
        "audience-menu-open"
      );
    }
  });

  postButton.addEventListener("click", () => {
    const textarea = document.querySelector(
      ".composer-textarea"
    );

    if (!textarea) {
      openComposer();
      return;
    }

    const text = textarea.value.trim();

    if (!text) {
      textarea.focus();
      return;
    }

    alert(
      `Post preview:\n\n${text}\n\nAudience: ${audienceButton.textContent}`
    );
  });
});
