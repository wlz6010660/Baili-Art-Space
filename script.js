const enterButton = document.querySelector("[data-enter-site]");
const typewriter = document.querySelector("[data-typewriter]");
const wishlistButtons = document.querySelectorAll("[data-wishlist]");

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
    document.querySelector("#world")?.scrollIntoView({ behavior: "smooth" });
  });
}

wishlistButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const active = button.dataset.active === "true";
    button.dataset.active = String(!active);
    button.textContent = active ? "加入心愿单" : "已加入心愿单";
  });
});
