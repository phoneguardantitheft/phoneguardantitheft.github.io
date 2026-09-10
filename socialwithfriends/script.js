document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const createButton = document.querySelector(".create-button");

  const composer = document.querySelector(".composer");
  const composerInput = document.querySelector(".composer-input");
  const composerTop = document.querySelector(".composer-top");
  const audienceButton = document.querySelector(".audience-button");
  const postButton = document.querySelector(".post-button");

  let composerOpen = false;
  let audienceMenuOpen = false;

  // -------------------------
  // TOP NAV ACTIVE STATE
  // -------------------------

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((nav) => nav.classList.remove("active"));

      if (!item.classList.contains("create-button")) {
        item.classList.add("active");
      }
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
  createButton.addEventListener("click", openComposer);

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
      const selectedAudience = option.dataset.audience;

      audienceButton.textContent = selectedAudience;

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
