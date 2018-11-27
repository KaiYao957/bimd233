//Generates school team data
function Team(n, c, o, lg, img, nid, num)
{
  this.name = n;
  this.conference = c;
  this.overall = o;
  this.lastgame = lg;
  this.logo = img;
  this.nid = nid;
  this.number = num;
}

var imgURL1 = "https://x.pac-12.com/sites/default/files/styles/thumbnail/public/washington-state-logo__1438812470.png";
var imgURL2 = "https://x.pac-12.com/sites/default/files/styles/thumbnail/public/washington-logo_0__1438812441.png";
var imgURL3 = "https://x.pac-12.com/sites/default/files/styles/thumbnail/public/stanford-logo-color_0.png";
var imgURL4 = "https://x.pac-12.com/sites/default/files/styles/thumbnail/public/oregon-g-logo__1438812094.png";
var imgURL5 = "https://x.pac-12.com/sites/default/files/styles/thumbnail/public/cal_yellow_lg_2017.png";
var imgURL6 = "https://x.pac-12.com/sites/default/files/styles/thumbnail/public/oregon-state-logo_0__1438812147.png";

var team1 = new Team("Washington State", "7-1", "10-1", "W 69-28 ARIZ", imgURL1, "wsu", "one");
var team2 = new Team("Washington", "6-2", "8-3", "W 42-23 ORST", imgURL2, "uw", "two");
var team3 = new Team("Stanford", "4-3", "6-4", "W 48-17 ORST", imgURL3, "su", "three");
var team4 = new Team("Oregon", "4-4", "7-4", "W 31-29 ASU", imgURL4, "ou", "four");
var team5 = new Team("California", "3-4", "6-4", "W 15-14 USC", imgURL5, "cal", "five");
var team6 = new Team("Oregon State", "1-7", "2-9", "L 23-42 WASH", imgURL6, "osu", "six");
var teams = [team1,team2,team3,team4,team5,team6];

function displayTeamData()
{
  var listData = document.querySelectorAll("li");
  if(listData.length>0)
    {
      for(var i=0; i<listData.length; i++)
        {
          listData[i].innerHTML = buildRow(teams[i]);
        }
    }
}

//Displays team data for each individual team
function buildRow(team)
{
  document.querySelector("li#"+team.number).id = team.nid;
  var row = "";
  row += "<div class='row'>";
  row += "<div class='col-sm-2 logo'>"+"<img src="+team.logo+">"+"</div>";
  row += "<div class='col-sm-3 college'>"+team.name+"</div>";
  row += "<div class='col-sm-2 conference'>"+team.conference+"</div>";
  row += "<div class='col-sm-2 overall'>"+team.overall+"</div>";
  row += "<div class='col-sm-3 lastgame'>"+team.lastgame+"</div>";
  row += "</div>";
  return row;
}
