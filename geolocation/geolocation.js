// geolocation.js

//=========================================================
//----------------- Definitions ----------------------

function gotPosition (currentPos) {
  var latText = "Latitude: " + currentPos.coords.latitude;
  $(".js-latitude").text(latText);

  var longText = "Longitude: " + currentPos.coords.longitude;
  $(".js-longitude").text(longText);

  $(".js-coordinates").fadeIn();
  $(".js-loading-text").fadeOut();
}

function positionError () {
  $(".js-loading-text").fadeOut();
  $(".js-pos-error").fadeIn();
}


//=========================================================
//----------------- APPLICATION CODE ----------------------

$(document).on("ready", function () {

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(gotPosition, positionError);
  }

  else {
    alert("This browser sucks. Geolocation is not available");
  }

});
