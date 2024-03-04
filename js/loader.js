// // Loader Javascript
// let preloader = document.getElementById("loading");
// window.addEventListener(
//   "load",
//   function () {
//     preloader.style.display = "none";
//   },
//   8000
// );

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("loading").style.display = "none";
  }, 4000); // 5000 milliseconds = 5 seconds
});
