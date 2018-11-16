$(document).ready(function() {
 // Adds flight data
  function Flight(a, n, ac, o, d, dt, at, ag)
  {
    this.airline = a;
    this.number = n;
    this.aircraft = ac;
    this.origin = o;
    this.destination = d;
    this.depTime = dt;
    this.arrivalTime = at;
    this.arrivalGate = ag;
  }

  var flight1 = new Flight("Alaska", "AK333", "B737", "KSEA", "KGEG", "Nov 11, 2016 18:00:00", "Nov 11, 2016 19:20:00", "C7");
  var flight2 = new Flight("United", "U2001", "A320", "KORD", "NYC", "Nov 11, 2016 01:10:00", "Nov 11, 2016 05:25:00", "N17");
  var flight3 = new Flight("Delta", "DAL42", "MD90", "KPDX", "KLAX", "Nov 11, 2016 09:15:00", "Nov 11, 2016 11:40:00", "S5");
  var flight4 = new Flight("Alaska", "ASA1026", "A320", "KSFO", "KJFK", "Nov 14, 2018 15:10:00", "Nov 14, 2018 20:39:00", "Gate 11");
  var flight5 = new Flight("Alaska", "ASA95", "B739", "KSEA", "PANC", "Nov 14, 2018 18:23:00", "Nov 14, 2018 21:51:00", "Gate C1");

  var allFlights = [flight1, flight2, flight3, flight4, flight5];

  var tb = document.getElementById("flight-table");
  tb.innerHTML = "<th>Airline</th> <th>Number</th> <th>Aircraft</th> <th>Origin</th> <th>Destination</th> <th>Departure Time</th> <th>Arrival Time</th> <th>Arrival Gate</th>";
  for(i=0; i<allFlights.length; i++)
  {
    tb.innerHTML += "<tr><td>"+allFlights[i]["airline"]+"</td><td>"+allFlights[i]["number"]+"</td><td>"+allFlights[i]["aircraft"]+"</td><td>"+allFlights[i]["origin"]+"</td><td>"+allFlights[i]["destination"]+"</td><td>"+allFlights[i]["depTime"]+"</td><td>"+allFlights[i]["arrivalTime"]+"</td><td>"+allFlights[i]["arrivalGate"]+"</td></tr>";
  }
});