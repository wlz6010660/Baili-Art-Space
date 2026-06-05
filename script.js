const enterButton = document.querySelector("[data-enter-site]");
const splashLinks = document.querySelectorAll("[data-show-splash]");
const typewriter = document.querySelector("[data-typewriter]");
const wishlistButtons = document.querySelectorAll("[data-wishlist]");

const enterHomePage = () => {
  document.body.classList.add("has-entered");
  window.scrollTo({ top: 0, behavior: "auto" });
  if (window.location.hash !== "#world") {
    history.replaceState(null, "", "#world");
  }
};

const showSplash = () => {
  document.body.classList.remove("has-entered");
  window.scrollTo({ top: 0, behavior: "auto" });
  history.replaceState(null, "", "#top");
};

if (document.body.classList.contains("home-page") && window.location.hash === "#world") {
  document.body.classList.add("has-entered");
}

if (typewriter) {
  const text = typewriter.textContent.trim();
  typewriter.textContent = "";

  let index = 0;

  const type = () => {
    if (index < text.length) {
      typewriter.textContent += text[index];
      index += 1;
      window.setTimeout(type, 115 + Math.random() * 80);
      return;
    }

    typewriter.classList.add("is-done");
  };

  window.setTimeout(type, 650);
}

if (enterButton) {
  enterButton.addEventListener("click", () => {
    enterHomePage();
  });
}

splashLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showSplash();
  });
});

wishlistButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const active = button.dataset.active === "true";
    button.dataset.active = String(!active);
    button.textContent = active ? "加入心愿单" : "已加入心愿单";
  });
});
