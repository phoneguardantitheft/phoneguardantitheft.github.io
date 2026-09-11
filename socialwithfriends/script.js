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
  const messagesPage = document.getElementById("messages-page");
  const notificationsPage = document.getElementById("notifications-page");

  const homeNav = document.querySelector('[data-page="home"]');
  const exploreNav = document.querySelector('[data-page="explore"]');
  const messagesNav = document.querySelector('[data-page="messages"]');
  const notificationsNav = document.querySelector('[data-page="notifications"]');

  const exploreTabs = document.querySelectorAll("[data-explore-tab]");
  const explorePanels = document.querySelectorAll("[data-explore-panel]");

  const profileTabs = document.querySelectorAll("[data-profile-tab]");
  const profilePanels = document.querySelectorAll("[data-profile-panel]");

  const friendsTabs = document.querySelectorAll("[data-friends-tab]");
  const friendsPanels = document.querySelectorAll("[data-friends-panel]");
  const openFriendsButtons = document.querySelectorAll("[data-open-friends]");

  const conversationItems = document.querySelectorAll("[data-conversation]");
  const conversationName = document.getElementById("conversation-name");
  const conversationHandle = document.getElementById("conversation-handle");
  const conversationPhoto = document.getElementById("conversation-photo");
  const conversationBody = document.getElementById("conversation-body");
  const messageInput = document.querySelector(".message-input");
  const messageSendButton = document.querySelector(".message-send-button");

  const notificationsTabs = document.querySelectorAll("[data-notifications-tab]");
  const notificationsPanels = document.querySelectorAll("[data-notifications-panel]");
  const markAllReadButton = document.querySelector(".mark-all-read-button");

  let composerOpen = false;
  let audienceMenuOpen = false;

  function clearMainNavigationState() {
    navItems.forEach((nav) => nav.classList.remove("active"));
    profileButton.classList.remove("active-profile");
  }

  function showPage(pageName) {
    homePage.classList.remove("active-page");
    explorePage.classList.remove("active-page");
    profilePage.classList.remove("active-page");
    friendsPage.classList.remove("active-page");
    messagesPage.classList.remove("active-page");
    notificationsPage.classList.remove("active-page");

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
    } else if (pageName === "messages") {
      messagesPage.classList.add("active-page");
      messagesNav.classList.add("active");
    } else if (pageName === "notifications") {
      notificationsPage.classList.add("active-page");
      notificationsNav.classList.add("active");
    } else {
      homePage.classList.add("active-page");
      homeNav.classList.add("active");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  homeNav.addEventListener("click", () => showPage("home"));
  exploreNav.addEventListener("click", () => showPage("explore"));
  profileButton.addEventListener("click", () => showPage("profile"));
  messagesNav.addEventListener("click", () => showPage("messages"));
  notificationsNav.addEventListener("click", () => showPage("notifications"));

  navItems.forEach((item) => {
    if (
      item === homeNav ||
      item === exploreNav ||
      item === messagesNav ||
      item === notificationsNav ||
      item.classList.contains("create-button")
    ) {
      return;
    }

    item.addEventListener("click", () => {
      clearMainNavigationState();
      item.classList.add("active");
    });
  });

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

  function showNotificationsPanel(panelName) {
    notificationsTabs.forEach((tab) => {
      const isActive = tab.dataset.notificationsTab === panelName;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    notificationsPanels.forEach((panel) => {
      panel.classList.toggle(
        "active-notifications-panel",
        panel.dataset.notificationsPanel === panelName
      );
    });
  }

  notificationsTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      showNotificationsPanel(tab.dataset.notificationsTab);
    });
  });

  markAllReadButton.addEventListener("click", () => {
    document.querySelectorAll(".notification-item.unread").forEach((item) => {
      item.classList.remove("unread");
    });

    document.querySelectorAll(".notification-unread-dot").forEach((dot) => {
      dot.remove();
    });

    document.querySelectorAll(".notifications-tab-count").forEach((count) => {
      count.textContent = "0";
    });

    markAllReadButton.textContent = "All caught up";
  });

  const conversationData = {
    jasmine: {
      name: "Jasmine Carter",
      handle: "@jasminec",
      image: "https://i.pravatar.cc/160?img=47",
      messages: [
        { type: "incoming", text: "You still going Saturday?", time: "9:36 AM" },
        { type: "outgoing", text: "Yeah, that's still the plan. What time y'all getting there?", time: "9:38 AM" },
        { type: "incoming", text: "Probably around 7. I'll let you know if anything changes.", time: "9:41 AM" }
      ]
    },
    marcus: {
      name: "Marcus Johnson",
      handle: "@marcusj",
      image: "https://i.pravatar.cc/160?img=12",
      messages: [
        { type: "incoming", text: "I looked at what you sent me.", time: "Yesterday" },
        { type: "outgoing", text: "What you think?", time: "Yesterday" },
        { type: "incoming", text: "That actually makes sense.", time: "Yesterday" }
      ]
    },
    tiffany: {
      name: "Tiffany Brooks",
      handle: "@tiffanyb",
      image: "https://i.pravatar.cc/160?img=32",
      messages: [
        { type: "outgoing", text: "I got a better one from earlier.", time: "Tue" },
        { type: "incoming", text: "Send me the picture when you get a chance.", time: "Tue" }
      ]
    },
    chris: {
      name: "Chris Walker",
      handle: "@chrisw",
      image: "https://i.pravatar.cc/160?img=11",
      messages: [
        { type: "outgoing", text: "Can you remind me later?", time: "Mon" },
        { type: "incoming", text: "Bet. I got you.", time: "Mon" }
      ]
    },
    avery: {
      name: "Avery Lewis",
      handle: "@averyl",
      image: "https://i.pravatar.cc/160?img=45",
      messages: [
        { type: "outgoing", text: "I knew you were going to laugh at that.", time: "Sep 7" },
        { type: "incoming", text: "That GIF had me crying.", time: "Sep 7" }
      ]
    }
  };

  function renderConversation(key) {
    const conversation = conversationData[key];
    if (!conversation) return;

    conversationName.textContent = conversation.name;
    conversationHandle.textContent = conversation.handle;
    conversationPhoto.src = conversation.image;
    conversationPhoto.alt = conversation.name;

    conversationBody.innerHTML = '<div class="conversation-date">Recent</div>';

    conversation.messages.forEach((message) => {
      const row = document.createElement("div");
      row.className = `message-row ${message.type}`;

      if (message.type === "incoming") {
        const avatar = document.createElement("img");
        avatar.src = conversation.image;
        avatar.alt = "";
        row.appendChild(avatar);
      }

      const stack = document.createElement("div");
      stack.className = "message-stack";

      const bubble = document.createElement("div");
      bubble.className = "message-bubble";
      bubble.textContent = message.text;

      const time = document.createElement("time");
      time.textContent = message.time;

      stack.appendChild(bubble);
      stack.appendChild(time);
      row.appendChild(stack);
      conversationBody.appendChild(row);
    });

    conversationBody.scrollTop = conversationBody.scrollHeight;
  }

  conversationItems.forEach((item) => {
    item.addEventListener("click", () => {
      conversationItems.forEach((conversation) => {
        conversation.classList.remove("active");
      });

      item.classList.add("active");
      renderConversation(item.dataset.conversation);
    });
  });

  function sendPrototypeMessage() {
    const text = messageInput.value.trim();

    if (!text) {
      messageInput.focus();
      return;
    }

    const activeConversation = document.querySelector(
      ".conversation-item.active"
    );

    const key = activeConversation?.dataset.conversation;

    if (!key || !conversationData[key]) return;

    conversationData[key].messages.push({
      type: "outgoing",
      text,
      time: "Now"
    });

    messageInput.value = "";
    renderConversation(key);
    messageInput.focus();
  }

  messageSendButton.addEventListener("click", sendPrototypeMessage);

  messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendPrototypeMessage();
    }
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
