$(document).ready(function (){

    //Food Menu
    var imgBase = "../image/";
    var imgEnd = ".jpg";

    var dishChosen = false;
    var drinkChosen = false;
    var dessertChosen = false;
    var dishSelected = false;
    var drinkSelected = false;
    var dessertSelected = false;

    $("#main-dish ul").on("click", "li", function() {
        console.log("Image: "+this.id);
        if(!dishSelected)
        {
            $("#main-dish").css({"background-image": "url("+imgBase+this.id+imgEnd+")"});
            $("#main-dish li").css({"background-color": "rgba(224, 64, 32, 0.92)", "color": "khaki"});
            $(this).css({"background-color": "rgba(64, 224, 32, 0.92)", "color": "sienna"});
            dishChosen = true;
        }
    });
    $("#dish-select").click(function(){
        //console.log("Clicked");
        if(dishChosen)
        {
            $("#dish-select").text("Selected!");
            $("#dish-select").css({"background-color": "cyan", "color": "gray"});
            dishSelected = true;
        }
    });

    $("#drink ul").on("click", "li", function() {
        console.log("Image: "+this.id);
        if(!drinkSelected)
        {
            $("#drink").css({"background-image": "url("+imgBase+this.id+imgEnd+")"});
            $("#drink li").css({"background-color": "rgba(48, 224, 224, 0.92)", "color": "white"});
            $(this).css({"background-color": "rgba(224, 132, 12, 0.92)", "color": "lightgray"});
            drinkChosen = true;
        }
    });
    $("#drink-select").click(function(){
        if(drinkChosen)
        {
            $("#drink-select").text("Selected!");
            $("#drink-select").css({"background-color": "springgreen", "color": "gray"});
            drinkSelected = true;
        }
    });

    $("#dessert ul").on("click", "li", function() {
        console.log("Image: "+this.id);
        if(!dessertSelected)
        {
            $("#dessert").css({"background-image": "url("+imgBase+this.id+imgEnd+")"});
            $("#dessert li").css({"background-color": "rgba(212, 212, 54, 0.92)", "color": "chocolate"});
            $(this).css({"background-color": "rgba(212, 54, 212, 0.92)", "color": "beige"});
            dessertChosen = true;
        }
    });
    $("#dessert-select").click(function(){
        //console.log("Clicked");
        if(dessertChosen)
        {
            $("#dessert-select").text("Selected!");
            $("#dessert-select").css({"background-color": "lavender", "color": "black"});
            dessertSelected = true;
        }
    });

    //For selecting extra items
    $("#extras").on("click", ".col-2", function() {
        console.log("Class: "+this.className);
        $(this).toggleClass("item-selected");
    });

    //Adding items to list
    $("#ingredients input").on("keypress", function(e) {
        var ingredient = "";
        if(e.keyCode == '13')
        {
            ingredient = $("#ingredients input").val();
            $("#ingredients ul").append("<li>"+ingredient+"</li>");
        }
    });
    $("#drink-flavors input").on("keypress", function(e) {
        var drinkFlavor = "";
        if(e.keyCode == '13')
        {
            drinkFlavor = $("#drink-flavors input").val();
            $("#drink-flavors ul").append("<li>"+drinkFlavor+"</li>");
        }
    });
    $("#dessert-flavors input").on("keypress", function(e) {
        var dessertFlavor = "";
        if(e.keyCode == '13')
        {
            dessertFlavor = $("#dessert-flavors input").val();
            $("#dessert-flavors ul").append("<li>"+dessertFlavor+"</li>");
        }
    });
    //Removing items from list
    $("#variety ul").on("click", "li", function() {
        $(this).fadeOut("fast");
    });

    // Video Game Table
    function Game(t, rd, g, r, p, l)
    {
        this.title = t;
        this.releaseDate = rd;
        this.genre = g;
        this.rating = r;
        this.publisher = p;
        this.link = l;
    }

    // Game Data
    var game1 = new Game("Final Fantasy XII", "10/31/2006", "JRPG", 9.5, "Square Enix", "https://store.steampowered.com/app/595520/FINAL_FANTASY_XII_THE_ZODIAC_AGE/");
    var game2 = new Game("Tales of Vesperia", "8/26/2008", "JRPG", 8.2, "Bandai Namco", "https://store.steampowered.com/app/738540/Tales_of_Vesperia_Definitive_Edition/");
    var game3 = new Game("The Elder Scrolls V: Skyrim", "11/11/2011", "Open World RPG", 9.5, "Bethesda", "https://store.steampowered.com/app/72850/The_Elder_Scrolls_V_Skyrim/");
    var game4 = new Game("The Witcher 3: Wild Hunt", "5/19/2015", "Open World RPG", 9.3, "CD Projekt Red", "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/");
    var game5 = new Game("The Legend of Heroes: Trails of Cold Steel", "12/22/2015", "JRPG", 9, "Nihon Falcom", "https://store.steampowered.com/app/538680/The_Legend_of_Heroes_Trails_of_Cold_Steel/");
    var game6 = new Game("Fallout 4", "11/10/2015", "Open World RPG", 9.5, "Bethesda", "https://store.steampowered.com/app/377160/Fallout_4/");
    var game7 = new Game("Dragon Quest XI", "9/4/2018", "JRPG", 8.8, "Square Enix", "https://store.steampowered.com/app/742120/DRAGON_QUEST_XI_Echoes_of_an_Elusive_Age__Digital_Edition_of_Light/");
    var game8 = new Game("Stardew Valley", "2/26/2016", "Sim/RPG", 9.5, "ConcernedApe", "https://store.steampowered.com/app/413150/Stardew_Valley/");
    var game9 = new Game("Terraria", "5/16/2011", "Action-Adventure", 9, "Re-Logic", "https://store.steampowered.com/app/105600/Terraria/");
    var game10 = new Game("Don't Starve", "4/23/2013", "Roguelike/Survival", 7, "Klei Entertainment", "https://store.steampowered.com/app/219740/Dont_Starve/");
    var game11 = new Game("Dark Souls III", "4/11/2016", "Action RPG", 9.5, "FromSoftware", "https://store.steampowered.com/app/374320/DARK_SOULS_III/");
    var game12 = new Game("Scribblenauts Unlimited", "11/19/2012", "Puzzle/Problem Solving", 8.8, "5th Cell/Warner Bros.", "https://store.steampowered.com/app/218680/Scribblenauts_Unlimited/");

    var allGames = [game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game12];

    //Table Data
    var tableData = document.getElementById("gametable");
    tableData.innerHTML = "<tr><th>Game Title</th> <th>Release Date</th> <th>Genre</th> <th>IGN Rating</th> <th>Publisher</th> <th>Link</th></tr>";
    for(i=0; i<allGames.length; i++)
    {
        tableData.innerHTML += "<tr><td>"+allGames[i].title+"</td><td>"+allGames[i].releaseDate+"</td><td>"+allGames[i].genre+"</td><td>"
        +allGames[i].rating+"</td><td>"+allGames[i].publisher+"</td><td><a class='btn btn-info' href="+allGames[i].link+">Info Page</a></td></tr>";
    }
    $("#tabletoggle").click(function() {
        $("#gametable tr").each(function(i) {
            $(this).delay(480*i).fadeToggle("slow");
        });
    });
    //Prizes
    $("#gifttoggle").click(function() {
        $("#prize .card").each(function(i) {
            $(this).delay(360*i).fadeIn("slow");
        });
    });
    //User may select up to 3 prizes
    var numSelected = 0;
    $("#prize").on("click", ".card", function() {
        console.log("Class: "+this.className+"Amount selected: "+numSelected);
        if($(this).hasClass("prize-selected"))
        {
            $(this).removeClass("prize-selected");
            numSelected--;
        }
        else if(numSelected < 3)
        {
            $(this).addClass("prize-selected");
            numSelected++;
        }
    });
});