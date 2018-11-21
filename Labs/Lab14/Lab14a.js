var temperatures = [];

//Days forecasted
temperatures.push({ day: "Friday", high: 82, low: 55 });
temperatures.push({ day: "Saturday", high: 75, low: 52 });
temperatures.push({ day: "Sunday", high: 69, low: 52 });
temperatures.push({ day: "Monday", high: 69, low: 48 });
temperatures.push({ day: "Tuesday", high: 68, low: 51 });

//Gets the average temperatures of the week
function getAvg(a, b, i, arr) {
  a.avg = (a.high + a.low) / 2;
  console.log(a, b, i, arr.length);
  document.getElementById("tempReport").innerHTML += "<li> Average temperature for Day "+(i+1)+" ("+a.day+"): "+a.avg+"</li>";
  if (i == arr.length - 1)
  {
    b.avg = (b.high + b.low) / 2;
    var weekAvg = 0;
    for(i=0; i<arr.length; i++)
    {
      weekAvg += arr[i].avg;
    }
    weekAvg = weekAvg/arr.length;
    console.log(weekAvg);
    document.getElementById("tempReport").innerHTML += "<li> Average temperature for Day "+(i+1)+" ("+b.day+"): "+b.avg+"</li>";
    document.getElementById("tempReport").innerHTML += "<li> Average temperature recorderd for the week: "+weekAvg+"</li>";
  }
  else
  {
    return b;
  }
}

function reportTemperatures()
{
  temperatures.reduce(getAvg);
}
