function toggle(el) {
  const body = el.nextElementSibling;
  body.style.display =
    body.style.display === "block" ? "none" : "block";
}
