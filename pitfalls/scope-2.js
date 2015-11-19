$(document).on("ready", function () {
  var $elements = $("button");

  var n = $elements.length;    // assume we have 10 elements

  for (var i = 0; i < n; i++) {
      $elements.eq(i).on("click", buildIFunction(i + 1));
  }

  console.log("LOOP OVER: "  + i);
});



function buildIFunction (saved_i) {
  return function () {
    alert("This is element #" + saved_i);
  };
}
