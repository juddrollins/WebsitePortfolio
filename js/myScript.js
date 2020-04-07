
//JavaScript File
//Judd Rollins

function getNavbar(){
  $.get("/html/navbar.html", function (data) {
    $("#nav-holder").replaceWith(data);
  });
}



