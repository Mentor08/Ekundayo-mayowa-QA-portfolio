const lists = document.querySelectorAll(".list a");
const read = document.querySelector(".desc");
const readMore = document.getElementById("read_more");
const menu = document.getElementById("menu");
const ul = document.querySelector(".nav_list");

lists.forEach((list) => {
  list.addEventListener("click", () => {
    lists.forEach((list) => {
      list.classList.remove("active");
    });
    list.classList.add("active");
  });
});

readMore.addEventListener("click", () => {
  read.style.height = "auto";
  readMore.style.display = "none";
});

menu.addEventListener("click", () => {
  ul.classList.toggle("show");
});
