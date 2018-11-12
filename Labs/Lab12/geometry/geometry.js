// Adds 3 randomly generated circles
function generateCircles()
{
  var radiuses = generateRadiuses();
  for(i=0; i<radiuses.length; i++)
    {
      var circleInfo = calcCircleGeometries(radiuses[i]);
      document.getElementById("geometry").innerHTML +=
      "Information About Circle "+(i+1)+":"+"<br>"
      +"Radius: "+radiuses[i]+"<br>"
      +"Diameter: "+circleInfo[0]+"<br>"
      +"Circumference: "+circleInfo[1]+"<br>"
      +"Area: "+circleInfo[2]+"<br>"+"<br>";
    }
}

// Generates 3 circle radiuses of random sizes, between 1 to 100.
function generateRadiuses()
{
  var AllRadiuses = [];
  AllRadiuses.push(Math.floor(Math.random()*100));
  AllRadiuses.push(Math.floor(Math.random()*100));
  AllRadiuses.push(Math.floor(Math.random()*100));
  return AllRadiuses;
}

// Calculates the geometric properties of each circle using its radius.
function calcCircleGeometries(radius)
{
  const pi = Math.PI;
  var area = pi*radius*radius;
  var diameter = 2*radius;
  var circumference = diameter*pi;
  var geometries = [diameter, circumference, area];
  return geometries;
}