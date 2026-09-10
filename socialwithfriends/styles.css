:root {
  --background: #070811;
  --background-soft: #0d1020;
  --surface: #111526;
  --surface-light: #161b30;

  --border: rgba(255, 255, 255, 0.08);
  --text: #ffffff;
  --text-muted: #9499ad;

  --purple: #9a42ff;
  --purple-light: #bb72ff;
  --purple-dark: #6520d3;

  --nav-height: 82px;
}


/* RESET */

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  background:
    radial-gradient(
      circle at 50% -10%,
      rgba(124, 46, 255, 0.15),
      transparent 35%
    ),
    var(--background);

  color: var(--text);
  min-height: 100vh;
}


/* GENERAL */

button,
input {
  font: inherit;
}

button {
  color: inherit;
}

svg {
  width: 22px;
  height: 22px;

  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.card {
  background:
    linear-gradient(
      145deg,
      rgba(22, 27, 48, 0.96),
      rgba(13, 16, 31, 0.98)
    );

  border: 1px solid var(--border);
  border-radius: 22px;
}


/* TOP BAR */

.topbar {
  height: var(--nav-height);

  position: sticky;
  top: 0;
  z-index: 100;

  display: grid;

  grid-template-columns:
    240px
    1fr
    380px;

  align-items: center;

  padding: 0 30px;

  background: rgba(7, 8, 17, 0.88);

  backdrop-filter: blur(18px);

  border-bottom: 1px solid var(--border);
}


/* BRAND */

.brand {
  width: fit-content;
  line-height: 1;
}

.brand-main {
  font-size: 29px;
  font-weight: 800;
  letter-spacing: 1.2px;
}

.brand-main::after {
  content: ".";
  color: var(--purple);
}

.brand-sub {
  font-size: 12px;
  color: var(--purple-light);
  letter-spacing: 3px;
  margin-top: 5px;
}


/* NAVIGATION */

.main-nav {
  justify-self: center;

  display: flex;
  align-items: center;

  gap: 9px;

  padding: 7px;

  border: 1px solid var(--border);
  border-radius: 28px;

  background: rgba(16, 19, 35, 0.72);
}

.nav-item {
  position: relative;

  width: 56px;
  height: 48px;

  border: 0;
  border-radius: 18px;

  background: transparent;

  color: var(--text-muted);

  display: grid;
  place-items: center;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.nav-item:hover {
  color: white;
  background: rgba(255, 255, 255, 0.06);

  transform: translateY(-1px);
}

.nav-item.active {
  color: white;

  background:
    linear-gradient(
      135deg,
      rgba(154, 66, 255, 0.28),
      rgba(101, 32, 211, 0.15)
    );
}

.nav-item.active::after {
  content: "";

  position: absolute;

  bottom: 3px;

  width: 21px;
  height: 3px;

  border-radius: 10px;

  background: var(--purple);
}

.create-button {
  width: 52px;
  height: 52px;

  margin: 0 6px;

  color: white;

  background:
    linear-gradient(
      135deg,
      var(--purple-light),
      var(--purple-dark)
    );

  box-shadow:
    0 0 25px rgba(154, 66, 255, 0.36);
}

.create-button:hover {
  background:
    linear-gradient(
      135deg,
      #c685ff,
      #7729ee
    );
}

.nav-tooltip {
  position: absolute;

  top: 59px;

  padding: 6px 9px;

  border-radius: 8px;

  background: #191d2d;

  color: white;

  font-size: 12px;

  opacity: 0;
  pointer-events: none;

  transform: translateY(-4px);

  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.nav-item:hover .nav-tooltip {
  opacity: 1;
  transform: translateY(0);
}


/* SEARCH / PROFILE */

.header-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 14px;
}

.search-box {
  width: 270px;
  height: 44px;

  display: flex;
  align-items: center;

  gap: 10px;

  padding: 0 16px;

  border: 1px solid var(--border);
  border-radius: 22px;

  background: var(--background-soft);

  color: var(--text-muted);
}

.search-box input {
  width: 100%;

  border: 0;
  outline: none;

  color: white;
  background: transparent;
}

.search-box input::placeholder {
  color: #6f7488;
}

.profile-button {
  width: 44px;
  height: 44px;

  border-radius: 50%;

  border: 2px solid rgba(154, 66, 255, 0.4);

  background:
    linear-gradient(
      135deg,
      #292f4b,
      #171a2b
    );

  color: white;

  font-weight: 700;

  cursor: pointer;
}


/* PAGE LAYOUT */

.page-layout {
  width: min(1180px, calc(100% - 40px));

  margin: 30px auto;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    330px;

  gap: 28px;

  align-items: start;
}


/* FEED */

.feed-column {
  min-width: 0;
}


/* COMPOSER */

.composer {
  padding: 18px;
}

.composer-top {
  display: flex;
  align-items: center;

  gap: 14px;
}

.avatar {
  width: 46px;
  height: 46px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      #482078,
      #191729
    );

  color: white;

  font-size: 13px;
  font-weight: 800;

  border: 1px solid rgba(255, 255, 255, 0.1);
}

.composer-input {
  flex: 1;

  height: 52px;

  text-align: left;

  padding: 0 20px;

  border-radius: 18px;

  border: 1px solid var(--border);

  color: #aeb3c5;

  background: rgba(255, 255, 255, 0.035);

  cursor: text;
}

.composer-input:hover {
  background: rgba(255, 255, 255, 0.055);
}

.composer-actions {
  display: flex;
  align-items: center;

  gap: 10px;

  margin-top: 16px;
}

.composer-actions button {
  height: 40px;

  display: flex;
  align-items: center;

  gap: 8px;

  padding: 0 14px;

  border-radius: 14px;

  border: 1px solid var(--border);

  background: transparent;

  color: #c5c8d7;

  cursor: pointer;
}

.composer-actions button:hover {
  background: rgba(255, 255, 255, 0.04);
}

.gif-icon {
  display: grid;
  place-items: center;

  width: 25px;
  height: 20px;

  border: 1px solid var(--purple);
  border-radius: 5px;

  color: var(--purple-light);

  font-size: 9px;
  font-weight: 800;
}

.composer-spacer {
  flex: 1;
}

.audience-button {
  color: white !important;
}

.post-button {
  min-width: 85px;

  justify-content: center;

  border: 0 !important;

  color: white !important;

  font-weight: 700;

  background:
    linear-gradient(
      135deg,
      var(--purple),
      var(--purple-dark)
    ) !important;
}


/* FEED TITLE */

.feed-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;

  margin: 28px 4px 14px;
}

.feed-heading h1 {
  margin: 0;

  font-size: 24px;
  font-weight: 720;
}

.feed-heading p {
  margin: 5px 0 0;

  color: var(--text-muted);

  font-size: 14px;
}

.feed-options {
  border: 0;
  background: transparent;

  color: var(--text-muted);

  cursor: pointer;
}


/* POST */

.post {
  margin-bottom: 20px;

  padding: 20px;
}

.post-header {
  display: flex;
  align-items: center;

  gap: 12px;
}

.post-user {
  display: flex;
  flex-direction: column;

  gap: 4px;
}

.post-user strong {
  font-size: 15px;
}

.post-user span {
  color: var(--text-muted);

  font-size: 13px;
}

.post-menu {
  margin-left: auto;

  border: 0;
  background: transparent;

  color: var(--text-muted);

  cursor: pointer;
}

.post-text {
  margin: 18px 0;

  font-size: 16px;
  line-height: 1.55;
}

.purple-avatar {
  background:
    linear-gradient(
      135deg,
      #7c35d6,
      #341558
    );
}

.blue-avatar {
  background:
    linear-gradient(
      135deg,
      #3d4d99,
      #1a1f48
    );
}


/* PHOTO PLACEHOLDER */

.photo-placeholder {
  min-height: 370px;

  border-radius: 18px;

  display: grid;
  place-items: center;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 75% 20%,
      rgba(200, 94, 255, 0.5),
      transparent 30%
    ),
    radial-gradient(
      circle at 20% 80%,
      rgba(73, 98, 255, 0.48),
      transparent 35%
    ),
    linear-gradient(
      135deg,
      #151a34,
      #39155f
    );
}

.photo-message {
  padding: 14px 18px;

  border-radius: 12px;

  background: rgba(0, 0, 0, 0.35);

  color: rgba(255, 255, 255, 0.82);

  backdrop-filter: blur(8px);

  font-size: 14px;
}


/* TEXT POST */

.text-post {
  min-height: 230px;

  display: grid;
  place-items: center;

  text-align: center;

  padding: 35px;

  border-radius: 18px;

  background:
    linear-gradient(
      135deg,
      #4b1a80,
      #1c214d
    );

  font-size: 30px;
  font-weight: 700;
}


/* POST INFO */

.post-stats {
  display: flex;
  justify-content: space-between;

  padding: 13px 2px;

  color: var(--text-muted);

  font-size: 13px;

  border-bottom: 1px solid var(--border);
}

.post-actions {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  padding-top: 7px;
}

.post-actions button {
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  border: 0;
  border-radius: 12px;

  background: transparent;

  color: #adb2c5;

  cursor: pointer;
}

.post-actions button:hover {
  color: white;

  background: rgba(255, 255, 255, 0.04);
}


/* RIGHT PANEL */

.social-panel {
  position: sticky;
  top: calc(var(--nav-height) + 26px);

  display: flex;
  flex-direction: column;

  gap: 18px;
}


/* PANEL HEADER */

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 18px;
}

.panel-header h2 {
  margin: 3px 0 0;

  font-size: 23px;
}

.panel-header button {
  border: 0;
  background: transparent;

  color: var(--purple-light);

  cursor: pointer;
}

.panel-label {
  color: var(--purple-light);

  font-size: 11px;
  font-weight: 800;

  letter-spacing: 2px;
}


/* TOP 10 */

.top10 {
  padding: 20px;
}

.top10-grid {
  display: grid;

  grid-template-columns:
    repeat(5, 1fr);

  gap: 18px 8px;
}

.friend {
  min-width: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 7px;

  text-align: center;
}

.friend-avatar {
  width: 44px;
  height: 44px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      rgba(171, 78, 255, 0.98),
      rgba(85, 27, 197, 0.98)
    );

  box-shadow:
    0 0 0 3px rgba(154, 66, 255, 0.12);

  color: white;

  font-size: 12px;
  font-weight: 800;
}

.friend span {
  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: #c9ccda;

  font-size: 11px;
}


/* SOCIAL MESSAGE */

.social-message {
  padding: 25px;
}

.social-message h2 {
  margin: 10px 0 14px;

  font-size: 30px;
  line-height: 1.08;
}

.social-message p {
  margin: 0;

  color: var(--text-muted);

  line-height: 1.6;

  font-size: 14px;
}


/* RESPONSIVE */

@media (max-width: 1050px) {

  .topbar {
    grid-template-columns:
      180px
      1fr
      150px;
  }

  .search-box {
    display: none;
  }

  .page-layout {
    grid-template-columns:
      minmax(0, 1fr)
      285px;
  }

}


@media (max-width: 820px) {

  .topbar {
    grid-template-columns:
      130px
      1fr
      50px;

    padding: 0 14px;
  }

  .brand-main {
    font-size: 21px;
  }

  .brand-sub {
    display: none;
  }

  .main-nav {
    gap: 2px;
    padding: 5px;
  }

  .nav-item {
    width: 44px;
  }

  .create-button {
    width: 46px;
    height: 46px;
  }

  .page-layout {
    width: min(680px, calc(100% - 24px));

    grid-template-columns: 1fr;
  }

  .social-panel {
    position: static;
  }

}


@media (max-width: 600px) {

  .topbar {
    grid-template-columns:
      1fr
      auto;

    height: 64px;
  }

  .brand {
    display: none;
  }

  .main-nav {
    justify-self: start;
  }

  .header-actions {
    justify-self: end;
  }

  .composer-actions {
    flex-wrap: wrap;
  }

  .composer-spacer {
    display: none;
  }

  .audience-button {
    margin-left: auto;
  }

  .photo-placeholder {
    min-height: 280px;
  }

}
