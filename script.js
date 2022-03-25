// console.log("Mahadev")

// To hide cross
document.querySelector('.cross').style.display = 'none';

// Click Listener
document.querySelector('.hamburger').addEventListener("click", () => {
  // will toggle sidebar
  document.querySelector('.sidebar').classList.toggle('sidebarGo');
  if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
    document.querySelector('.ham').style.display = 'inline';
    document.querySelector(".cross").style.display = "none";
  } else {
    document.querySelector(".cross").style.display = "inline";
    document.querySelector(".ham").style.display = "none";
  }
});
