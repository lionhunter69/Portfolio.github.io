function sendMessage(e) {
  e.preventDefault();
  alert("Thanks for your message! I’ll get back to you soon 😎");
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.letterSpacing = "1px";
  });
  link.addEventListener("mouseleave", () => {
    link.style.letterSpacing = "0px";
  });
});
