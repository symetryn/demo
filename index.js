window.addEventListener("load", (_) => {
  handleCollapsible();
});

function handleCollapsible() {
  let headers = document.querySelectorAll(".collapsible__header");
  for (item of headers) {
    item.addEventListener("click", function (e) {
      for (el of headers) {
        if (el.isSameNode(e.target)) continue;
        el.nextElementSibling.classList.remove("collapsible__content--visible");
      }
      e.target.nextElementSibling.classList.toggle(
        "collapsible__content--visible"
      );
    });
  }
}
