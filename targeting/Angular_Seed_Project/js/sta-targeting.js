
$(document).keydown(function(e) {
     var key = e.which;
      //console.log(key);
      //if(key==35 || key == 36 || key == 37 || key == 39)

      return true;
});

function expandMenu() {
    var navBar = document.getElementById("sta-targeting-nav-bar");

    if (navBar.classList.contains('expanded')) {
        navBar.classList.add('shrink');
        navBar.classList.remove('expanded');
    } else {
        navBar.classList.remove('shrink');
        navBar.classList.add('expanded');
    }
}
