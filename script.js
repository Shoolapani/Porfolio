// console.log("Mahadev")

// To hide cross
document.querySelector(".cross").style.display = "none";

// Click Listener
document.querySelector(".hamburger").addEventListener("click", () => {
  // will toggle sidebar
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
    document.querySelector(".ham").style.display = "inline";
    document.querySelector(".cross").style.display = "none";
  } else {
    document.querySelector(".ham").style.display = "none";
    setTimeout(() => {
      document.querySelector(".cross").style.display = "inline";
    }, 300);
  }
});

function sendEmail(params) {
  var temParams = {
    from_name:document.getElementById("clientName").value,
    to_name:(document.getElementById("clientEmail").value),
    message:document.getElementById("message").value
  }
  emailjs.send('service_uw7463w','template_fpz079d',temParams)
  .then(function(res){
    console.log("Success",res.status);
  })
}
