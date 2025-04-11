let pages = document.getElementsByClassName("content");
let paths = ["guide", "privacy-policy", "terms-of-service"];
pages[paths.indexOf(location.search.slice(1)) + 1].removeAttribute("hidden", "");

function loadPage(page) {
  pages[paths.indexOf(location.search.slice(1)) + 1].setAttribute("hidden", "");
  pages[paths.indexOf(page) + 1].removeAttribute("hidden", "");
  history.pushState({}, "", page ? "/?" + page : "/");
  scroll(0, 0);
}