var secs = 0;
document.getElementById("counter").innerHTML = secs;

function activateTimer()
{
  setInterval(countTime, 3000);
}

function countTime()
{
  secs += 3;
  document.getElementById("counter").innerHTML = secs;
}