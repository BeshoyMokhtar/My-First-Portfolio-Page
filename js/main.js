// active clicked links
let links = document.querySelectorAll(".nav-bar ul li a");
let linksArr = Array.from(links);
linksArr.forEach((el) => {
  el.addEventListener("click", function (ev) {
    linksArr.forEach((ele) => {
      ele.classList.remove("active");
    });
    ev.currentTarget.classList.add("active");
  });
});
// scroll to top
let myScroller = document.querySelector(".to-top");
window.onscroll = function () {
  if (this.scrollY > 1200) {
    myScroller.classList.add("show");
  } else {
    myScroller.classList.remove("show");
  }
};
myScroller.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
