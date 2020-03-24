function openSearch() {
  document.getElementById("popUp").style.opacity="1";
  document.getElementById("popUp").style.transform="translateY(0)";
  document.getElementById("searchField").focus();
}

function closeSearch() {
  document.getElementById("popUp").style.opacity="0";
  document.getElementById("popUp").style.transform="translateY(-20px)";
}