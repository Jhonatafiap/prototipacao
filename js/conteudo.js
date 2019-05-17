function dropdown() {
  var btn = document.querySelectorAll("#lista > ul > li > a");
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function(ev) {
      ev.preventDefault();
      var that = event.currentTarget;
      that.parentNode.classList.toggle("active");
      that.parentNode.querySelector(".dropdown").classList.toggle("active");
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  dropdown();
});
