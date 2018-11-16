<<<<<<< HEAD
$(document).ready(function() {  
=======
$(document).ready(function()
{
>>>>>>> c8e39f165bc3633523391709d0d94482c03dc752
  // Arrays containing car information. The last two cars are placeholders with arbitrary info.
  var car1 = ["Toyota", "Corolla", "2018", "$20,652"];
  var car2 = ["Chevrolet", "Bolt", "2018", "43,155"];
  var car3 = ["Toyota", "Prius", "2017", "$21,700"];
  var car4 = ["Plachod", "SBDLX12", "2499", "$79,948"];
  var car5 = ["Plachod", "ABL", "2045", "$35,500"];
  var carData = [car1, car2, car3, car4, car5]; //holds all car data

  // Displays the car data on the table.

  var tb = document.getElementById("car-table");
  tb.innerHTML = "<tr><th>Make</th> <th>Model</th> <th>Year</th> <th>Cost</th></tr>";
  for(i=0; i<carData.length; i++)
  {
    tb.innerHTML += "<tr><td>"+carData[i][0]+"</td><td>"+carData[i][1]+"</td><td>"+carData[i][2]+"</td><td>"+carData[i][3]+"</td></tr>";
  }
});