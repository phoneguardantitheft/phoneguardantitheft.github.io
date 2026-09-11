document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const createButton = document.querySelector(".create-button");
  const profileButton = document.querySelector(".profile-button");

  const composer = document.querySelector(".composer");
  const composerInput = document.querySelector(".composer-input");
  const audienceButton = document.querySelector(".audience-button");
  const postButton = document.querySelector(".post-button");

  const homePage = document.getElementById("home-page");
  const explorePage = document.getElementById("explore-page");
  const profilePage = document.getElementById("profile-page");
  const friendsPage = document.getElementById("friends-page");

  const homeNav = document.querySelector('[data-page="home"]');
  const exploreNav = document.querySelector('[data-page="explore"]');

  const exploreTabs = document.querySelectorAll("[data-explore-tab]");
  const explorePanels = document.querySelectorAll("[data-explore-panel]");

  const profileTabs = document.querySelectorAll("[data-profile-tab]");
  const profilePanels = document.querySelectorAll("[data-profile-panel]");

  const friendsTabs = document.querySelectorAll("[data-friends-tab]");
  const friendsPanels = document.querySelectorAll("[data-friends-panel]");
  const openFriendsButtons = document.querySelectorAll("[data-open-friends]");

  let composerOpen = false;
  let audienceMenuOpen = false;

  // -------------------------
  // PAGE NAVIGATION
  // -------------------------

  function clearMainNavigationState() {
    navItems.forEach((nav) => nav.classList.remove("active"));
    profileButton.classList.remove("active-profile");
  }

  function showPage(pageName) {
    homePage.classList.remove("active-page");
    explorePage.classList.remove("active-page");
    profilePage.classList.remove("active-page");
    friendsPage.classList.remove("active-page");

    clearMainNavigationState();

    if (pageName === "explore") {
      explorePage.classList.add("active-page");
      exploreNav.classList.add("active");
    } else if (pageName === "profile") {
      profilePage.classList.add("active-page");
      profileButton.classList.add("active-profile");
    } else if (pageName === "friends") {
      friendsPage.classList.add("active-page");
      profileButton.classList.add("active-profile");
    } else {
      homePage.classList.add("active-page");
      homeNav.classList.add("active");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  homeNav.addEventListener("click", () => showPage("home"));
  exploreNav.addEventListener("click", () => showPage("explore"));
  profileButton.addEventListener("click", () => showPage("profile"));

  navItems.forEach((item) => {
    if (
      item === homeNav ||
      item === exploreNav ||
      item.classList.contains("create-button")
    ) {
      return;
    }

    item.addEventListener("click", () => {
      clearMainNavigationState();
      item.classList.add("active");
    });
  });

  // -------------------------
  // EXPLORE TABS
  // -------------------------

  function showExplorePanel(panelName) {
    exploreTabs.forEach((tab) => {
      const isActive = tab.dataset.exploreTab === panelName;

      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
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

  // -------------------------
  // PROFILE TABS
  // -------------------------

  function showProfilePanel(panelName) {
    profileTabs.forEach((tab) => {
      const isActive = tab.dataset.profileTab === panelName;

      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    profilePanels.forEach((panel) => {
      panel.classList.toggle(
        "active-profile-panel",
        panel.dataset.profilePanel === panelName
      );
    });
  }

  profileTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      showProfilePanel(tab.dataset.profileTab);
    });
  });

  // -------------------------
  // FRIENDS PAGE + TABS
  // -------------------------

  function showFriendsPanel(panelName) {
    friendsTabs.forEach((tab) => {
      const isActive = tab.dataset.friendsTab === panelName;

      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    friendsPanels.forEach((panel) => {
      panel.classList.toggle(
        "active-friends-panel",
        panel.dataset.friendsPanel === panelName
      );
    });
  }

  friendsTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      showFriendsPanel(tab.dataset.friendsTab);
    });
  });

  openFriendsButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      showPage("friends");
      showFriendsPanel("all");
    });
  });

  // -------------------------
  // COMPOSER
  // -------------------------

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

  // -------------------------
  // AUDIENCE MENU
  // -------------------------

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

  audienceMenu.querySelectorAll("button").forEach((option) => {
    option.addEventListener("click", () => {
      audienceButton.textContent = option.dataset.audience;

      audienceMenuOpen = false;
      audienceMenu.classList.remove("audience-menu-open");
    });
  });

  document.addEventListener("click", (event) => {
    if (
      audienceMenuOpen &&
      !audienceMenu.contains(event.target) &&
      !audienceButton.contains(event.target)
    ) {
      audienceMenuOpen = false;
      audienceMenu.classList.remove("audience-menu-open");
    }
  });

  // -------------------------
  // POST BUTTON
  // -------------------------

  postButton.addEventListener("click", () => {
    const textarea = document.querySelector(".composer-textarea");

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
