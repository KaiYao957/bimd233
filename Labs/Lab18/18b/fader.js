$(document).ready(function () {
  $('li').css('margin', '10px');
  $('li').attr('id', 'uw');

  $('#p1 li').click(function () {
    console.log("$(this):" + $(this));
    $(this).fadeOut(3000, function () {
      console.log("fadeout complete!")
    });
  });

  $('#p2').click(function () {
    console.log("$(this):" + $(this));
    $('#p2 li').fadeIn("slow", function () {
      console.log("fadein complete!")
    });
  });

  $('#p3 li').click(function () {
    console.log("$(this):" + $(this));
    $(this).fadeTo("slow", 0.5);
  });

  $('#p4').click(function () {
    console.log("$(this):" + $(this));
    $('#p4 li').fadeToggle(2500, function () {
      console.log("fadetoggle complete!")
    });
  });

});