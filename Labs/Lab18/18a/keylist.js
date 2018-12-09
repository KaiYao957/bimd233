$(document).ready(function() {
  $("li").css("id", "uw");
  const states = ["idle", "gather", "process"];
  var state = states[0];
  var words = new Array();
  var ndx = 0;
  
  $("ul").on("mouseover", "li", function() {
    console.log("x:" + $(this).text());
    $(this).attr("id", "uw");
  });

  $("ul").on("mouseleave", "li", function() {
    $(this).attr("id", "uw-gold");
  });

  // reset button click
  $("button").on("click", function(e) {
    $("ul").empty();
  });

  // keypress
  $("input").on("keypress", function(e) {
    var code = e.which;
    var char = String.fromCharCode(code);
    console.log('key:' + code + '\tstate:' + state);
    var str = "";
    switch (state) {
      // idle
      case "idle":
      words.push(char);
      if(code == '13')
      {
        for(i=0; i<words.length; i++)
        {
          str += words[i];
        }
        $('ul').append('<li>'+str+'</li>');
      }
        break;

      // gather
      case "gather":
      
        break;

      // process
      case "process":
        break;

      default:
        break;
    }
  });
});
