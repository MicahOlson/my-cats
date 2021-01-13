$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("a").removeClass();
    $("body").addClass("dark-background");
    $("a").addClass("dark-background");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("a").removeClass();
    $("body").addClass("light-background");
  });
});
