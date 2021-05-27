

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



  function footerPop1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}

function footerPop2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}

