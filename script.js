const links = document.querySelectorAll("a");

links.forEach((a) => {
  a.onclick = function () {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    a.onclick.add("active");
  };
});
