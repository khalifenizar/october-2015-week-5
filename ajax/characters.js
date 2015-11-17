// characters.js

$(document).on("ready", function () {

  $(".js-show-characters").on("click", function () {

    $.ajax({
      url: "https://ironhack-characters.herokuapp.com/characters",

      success: function (characters_info) {
        $(".js-characters-wrapper ul").empty();

        characters_info.forEach(function (character) {
          var liHtml = "\
            <li>\
              " + character.name + "\
              <em>" + character.occupation + "</em>\
              <span>" + character.weapon + "</span>\
            </li>";

          $(".js-characters-wrapper ul").append(liHtml);
        });
      },

      error: function () {
        alert("ZOMG ERROR");
      },
      dataType: "json"
    });

  });

});
