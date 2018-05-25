/*

 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒         _                 _                    _                       _                 _      ▒▒▒▒
▒▒▒▒        / /\              /\ \     _           / /\                    /\_\              /\ \    ▒▒▒▒
▒▒▒▒       / /  \            /  \ \   /\_\        / /  \                  / / /  _          /  \ \   ▒▒▒▒
▒▒▒▒      / / /\ \__        / /\ \ \_/ / /       / / /\ \                / / /  /\_\       / /\ \ \  ▒▒▒▒
▒▒▒▒     / / /\ \___\      / / /\ \___/ /       / / /\ \ \              / / /__/ / /      / / /\ \_\ ▒▒▒▒
▒▒▒▒     \ \ \ \/___/     / / /  \/____/       / / /  \ \ \            / /\_____/ /      / /_/_ \/_/ ▒▒▒▒
▒▒▒▒      \ \ \          / / /    / / /       / / /___/ /\ \          / /\_______/      / /____/\    ▒▒▒▒
▒▒▒▒  _    \ \ \        / / /    / / /       / / /_____/ /\ \        / / /\ \ \        / /\____\/    ▒▒▒▒
▒▒▒▒ /_/\__/ / /       / / /    / / /       / /_________/\ \ \      / / /  \ \ \      / / /______    ▒▒▒▒
▒▒▒▒ \ \/___/ /       / / /    / / /       / / /_       __\ \_\    / / /    \ \ \    / / /_______\   ▒▒▒▒
▒▒▒▒  \_____\/        \/_/     \/_/        \_\___\     /____/_/    \/_/      \_\_\   \/__________/   ▒▒▒▒
▒▒▒▒                                                                                                 ▒▒▒▒
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒

╔═══════════════════════════════════════════════╗            
║                                               ║
║          Created by: Adam Dolinsky            ║
║                                               ║
║          Inspiration: www.codepen.io          ║
║        Cursors by: www.deviantart.com         ║     
║      Nokia Phone Image by: Google Images      ║
║        Sound Effects: www.freeSFX.co.uk       ║  
║              Music: Kevin MacLeod             ║  
║                                               ║
║    2018, on behalf of BBZ Biel - CFP Bienne.  ║
║                                               ║ 
╚═══════════════════════════════════════════════╝  

   ___                  _____           _       _     _____          _           
  |_  |                /  ___|         (_)     | |   |_   _|        | |          
    | | __ ___   ____ _\ `--.  ___ _ __ _ _ __ | |_    | | _ __   __| | _____  __
    | |/ _` \ \ / / _` |`--. \/ __| '__| | '_ \| __|   | || '_ \ / _` |/ _ \ \/ /
/\__/ / (_| |\ V / (_| /\__/ / (__| |  | | |_) | |_   _| || | | | (_| |  __/>  < 
\____/ \__,_| \_/ \__,_\____/ \___|_|  |_| .__/ \__|  \___/_| |_|\__,_|\___/_/\_\
                                         | |                                     
                                         |_|                                     






/**********************************************************************/

//// BUTTONS ////

//// Button 1 ////

$('#button-1').on("mouseover", onHover_button1)
function onHover_button1()
{
    $("#button-1").attr('src', 'img/button-1-active.png');
}

$('#button-1').on("mouseout", offHover_button1)
function offHover_button1()
{
    $("#button-1").attr('src', 'img/button-1.png');
}


//// Button 2 ////

$('#button-2').on("mouseover", onHover_button2)
function onHover_button2()
{
    $("#button-2").attr('src', 'img/button-2-active.png');
}

$('#button-2').on("mouseout", offHover_button2)
function offHover_button2()
{
    $("#button-2").attr('src', 'img/button-2.png');
}


//// Button 3 ////

$('#button-3').on("mouseover", onHover_button3)
function onHover_button3()
{
    $("#button-3").attr('src', 'img/button-3-active.png');
}

$('#button-3').on("mouseout", offHover_button3)
function offHover_button3()
{
    $("#button-3").attr('src', 'img/button-3.png');
}


//// Button 4 ////

$('#button-4').on("mouseover", onHover_button4)
function onHover_button4()
{
    $("#button-4").attr('src', 'img/button-4-active.png');
}

$('#button-4').on("mouseout", offHover_button4)
function offHover_button4()
{
    $("#button-4").attr('src', 'img/button-4.png');
}


//// Button 5 ////

$('#button-5').on("mouseover", onHover_button5)
function onHover_button5()
{
    $("#button-5").attr('src', 'img/button-5-active.png');
}

$('#button-5').on("mouseout", offHover_button5)
function offHover_button5()
{
    $("#button-5").attr('src', 'img/button-5.png');
}


//// Button 6 ////

$('#button-6').on("mouseover", onHover_button6)
function onHover_button6()
{
    $("#button-6").attr('src', 'img/button-6-active.png');
}

$('#button-6').on("mouseout", offHover_button6)
function offHover_button6()
{
    $("#button-6").attr('src', 'img/button-6.png');
}


//// Button 7 ////

$('#button-7').on("mouseover", onHover_button7)
function onHover_button7()
{
    $("#button-7").attr('src', 'img/button-7-active.png');
}

$('#button-7').on("mouseout", offHover_button7)
function offHover_button7()
{
    $("#button-7").attr('src', 'img/button-7.png');
}


//// Button 8 ////

$('#button-8').on("mouseover", onHover_button8)
function onHover_button8()
{
    $("#button-8").attr('src', 'img/button-8-active.png');
}

$('#button-8').on("mouseout", offHover_button8)
function offHover_button8()
{
    $("#button-8").attr('src', 'img/button-8.png');
}


//// Button 9 ////

$('#button-9').on("mouseover", onHover_button9)
function onHover_button9()
{
    $("#button-9").attr('src', 'img/button-9-active.png');
}

$('#button-9').on("mouseout", offHover_button9)
function offHover_button9()
{
    $("#button-9").attr('src', 'img/button-9.png');
}


//// Button Star ////

$('#button-_').on("mouseover", onHover_buttonStar)
function onHover_buttonStar()
{
    $("#button-_").attr('src', 'img/button-_-active.png');
}

$('#button-_').on("mouseout", offHover_buttonStar)
function offHover_buttonStar()
{
    $("#button-_").attr('src', 'img/button-_.png');
}


//// Button 0 ////

$('#button-0').on("mouseover", onHover_button0)
function onHover_button0()
{
    $("#button-0").attr('src', 'img/button-0-active.png');
}

$('#button-0').on("mouseout", offHover_button0)
function offHover_button0()
{
    $("#button-0").attr('src', 'img/button-0.png');
}


//// Button Hashtag //// 

$('#button-hashtag').on("mouseover", onHover_buttonHashtag)
function onHover_buttonHashtag()
{
    $("#button-hashtag").attr('src', 'img/button-hashtag-active.png');
}

$('#button-hashtag').on("mouseout", offHover_buttonHashtag)
function offHover_buttonHashtag()
{
    $("#button-hashtag").attr('src', 'img/button-hashtag.png');
}


//// Button Call ////

$('#button-call').on("mouseover", onHover_buttonCall)
function onHover_buttonCall()
{
    $("#button-call").attr('src', 'img/button-call-active.png');
}

$('#button-call').on("mouseout", offHover_buttonCall)
function offHover_buttonCall()
{
    $("#button-call").attr('src', 'img/button-call.png');
}


//// Button Arrows ////

$('#button-arrows').on("mouseover", onHover_buttonArrows)
function onHover_buttonArrows()
{
    $("#button-arrows").attr('src', 'img/button-arrows-active.png');
}

$('#button-arrows').on("mouseout", offHover_buttonArrows)
function offHover_buttonArrows()
{
    $("#button-arrows").attr('src', 'img/button-arrows.png');
}

//// Button Home ////

$('#button-home').on("mouseover", onHover_buttonHome)
function onHover_buttonHome()
{
    $("#button-home").attr('src', 'img/button-home-active.png');
}

$('#button-home').on("mouseout", offHover_buttonHome)
function offHover_buttonHome()
{
    $("#button-home").attr('src', 'img/button-home.png');
}

/**********************************************************************/






/**********************************************************************/

// SOUND FX FÜR BUTTONS

$('#button-1').on("click", audioDial1)
$('#button-2').on("click", audioDial2)
$('#button-3').on("click", audioDial3)
$('#button-4').on("click", audioDial1)
$('#button-5').on("click", audioDial2)
$('#button-6').on("click", audioDial3)
$('#button-7').on("click", audioDial1)
$('#button-8').on("click", audioDial2)
$('#button-9').on("click", audioDial3)
$('#button-_').on("click", audioDial1)
$('#button-0').on("click", audioDial2)
$('#button-hashtag').on("click", audioDial3)
$('#button-call').on("click", audioDial1)
$('#button-arrows').on("click", audioDial2)
$('#button-home').on("click", audioDial3)

function audioDial1()
{
	audioDial1.play();
}

function audioDial2()
{
	audioDial2.play();
}

function audioDial3()
{
	audioDial3.play();
}

/**********************************************************************/





/**********************************************************************/

//// KONFIGURATION VOR DEM SPIEL ////

var audioEat = new Audio("sfx/eat.mp3");
var audioMusic = new Audio("sfx/music.mp3");
var audioDial1 = new Audio("sfx/dial.mp3");
var audioDial2 = new Audio("sfx/dial_2.mp3");
var audioDial3 = new Audio("sfx/dial_3.mp3");



//// Start-Bildschirm ////

$('#starterInformation').on("click", start)
$('#button-home').on("click", start)

function start() 
{
	audioMusic.play();

	$("#starter").fadeOut("fast");
	$("#starterTitle").fadeOut("fast");
	$("#starterInformation").fadeOut("fast");
	var nx = snake_array[0].x;
	var ny = snake_array[0].y;
}

/**********************************************************************/





/**********************************************************************/

//// MECHANIK WÄHREND DEM SPIEL ////

$(document).ready(function()
	{

	//// Konfigurationen der <canvas> ////

	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	ctx.font = "0.5em pixelmixregular";
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	

	//// Breite der Zelle (Grösse der einzelnen Pixel) ////

	var cw = 10;
	var d;
	var food;
	var score;
   	var level;
	
	//// SNAKE ////
	var snake_array; // ein Array für die Snake
	
	function init()
	{
		d = "right"; // Standard-Richtung
		create_snake();
		create_food(); // Punkte auf der Karte erstellen
		//// Score und Level unten links anzeigen ////
		score = 0;
		level_value = 1;
    	level = level_value + "x";
		
		//// Die Snake wird alle 60ms bewegt (wenn setInterval = 100) und löst somit die Paint-Funktion aus ////
		if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 100); // Geschwindigkeit der Snake (Default: 100)
	}
	init();
	
	function create_snake()
	{
		var length = 1; // anfängliche Länge der Snake
		snake_array = []; // leeres Array für den Snake-Body
		for(var i = length-1; i>=0; i--)
		{
			//// eine horizontal ausgerichtete Snake wird oben links erstellt ////

			snake_array.push({x: i, y:0});
		}
	}
	
	//// PUNKTE ////
	function create_food()
	{
		food = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};

		// eine Position wird zufällig auf den <canvas> definiert
		// anschliessend wird dann dort ein Punkt (food) generiert
	}
	
	//// SNAKE OPTISCH BEARBEITEN ////
	function paint()
	{
		//// Style der <canvas> ////

		ctx.fillStyle = "#1ba66a"; // Farbe der Fläche
		ctx.fillRect(0, 0, w, h);
		ctx.strokeStyle = "#1ba66a"; // Farbe der Kontur
		ctx.strokeRect(0, 0, w, h);
		
		//// BEWEGUNGEN DER SNAKE ////
		// die letzte Zelle (Rücken) wird an die Stelle der ersten Zelle (Kopf) verschoben
		// Positionen der ersten Zelle (Kopf):

		var nx = snake_array[0].x;
		var ny = snake_array[0].y;

		// neue Position der ersten Zelle (Kopf) durch Vergrösserung:

		if(d == "right") nx++;
		else if(d == "left") nx--;
		else if(d == "up") ny--;
		else if(d == "down") ny++;
		
		//// Registrierung von Kollisionen zusammen mit Snake & Snake / Snake & Border ////

		if(nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || check_collision(nx, ny, snake_array))
		{
			$("#starter").remove();
			$("#starterTitle").remove();
			$("#starterInformation").remove();

			$("ul").append('<li><p id="starterTitle">Snake</p></li>');
			$("ul").append('<li><a id="starterInformation" href="#">Click to play!</a></li>');
			$("figure").append('<img id="starter" src="img/starter.png" alt="Nokia Snake Game">');
			
			$('#starterInformation').on("click", start)

			// das Spiel wird neugestartet -> mit Start-Bildschirm, welches das Spielgeschehen verdeckt (kann durch Klicken versteckt werden)
			init();
 			audioMusic.pause();
			return;
		}
		
		//// SNAKE KONSUMIERT PUNKTE ////
		// wenn Position des Kopfes = Position des Punktes
		// dann wird ein neuer Kopf erstellt und nicht der Rücken auf die Position des Kopfes verschoben
		if(nx == food.x && ny == food.y)
		{
			var tail = {x: nx, y: ny};

			// ein zufälliger Wert wird für den Score generiert

			var s = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
					 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
					 3, 5, 20
					 ];

			var score_amount = s[Math.floor(Math.random()*s.length)];
			for(var score_add = 0; score_add < score_amount; score_add++)
			{
				score++;
			}
       
			create_food();

			// kurzes Flackern der Fläche
			ctx.fillStyle = "#85c79b";
			ctx.fillRect(0, 0, w, h);
			ctx.strokeStyle = "#85c79b";
			ctx.strokeRect(0, 0, w, h);

			audioEat.play();
		}
		else
		{
			var tail = snake_array.pop(); // die letzte Zelle wird gelöscht
			tail.x = nx; tail.y = ny;
		}
		

		snake_array.unshift(tail); // der Rücken wird auf die Position des Kopfes verschoben
		
		for(var i = 0; i < snake_array.length; i++)
		{
			var c = snake_array[i];
			paint_cell(c.x, c.y, "#366b52"); // Farbe der Snake
		}
		
		paint_cell(food.x, food.y, "#172e23"); // Farbe von Punkten und Text
		var score_text = "Score: " + score;
    	var level_text = "Speed: " + level;
		ctx.fillText(score_text, 15, h-0);
     	ctx.fillText(level_text, 80, h-0);
	}
	
	function paint_cell(x, y, color)
	{
		ctx.fillStyle = color;
		ctx.fillRect(x*cw, y*cw, cw, cw);
		ctx.strokeStyle = "#366b52"; // Farbe der Kontur von Punkten und Snake
		ctx.strokeRect(x*cw, y*cw, cw, cw);
	}

	function check_collision(x, y, array)
	{
		// Abfrage, ob x/y in einem Array von Zellen existiert oder nicht
		for(var i = 0; i < array.length; i++)
		{
			if(array[i].x == x && array[i].y == y)
			return true;
		}
		return false;
	}
	
	//// TASTENSTEUERUNG ////
	$(document).keydown(function(e)
	{
		var key = e.which;

		// WASD Steuerung & Mechanismus, der das Umkehren in die entgegengesetzte Richtung unmöglich macht

		if(key == "65" && d != "right") d = "left";
		else if(key == "87" && d != "down") d = "up";
		else if(key == "68" && d != "left") d = "right";
		else if(key == "83" && d != "up") d = "down";
	});	
});

/**********************************************************************/