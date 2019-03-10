/*
Script by Broderick Lemke 2018
Sounds by InspectorJ https://freesound.org/people/InspectorJ/packs/22884/
Styling Fix from Shannleigh McManus
*/


var beatCount = 0;
var measureCount = 0;

var dispRowArr1 = [];
var dispRowArr2 = [];
var msrCountDisp = [];

//Prep the sound files
var clap = new Tone.Player({
	"url" : "clap.wav",
	"autostart" : true,
}).toMaster();
var clap2 = new Tone.Player({
	"url" : "clap4.wav",
	"autostart" : true,
}).toMaster();


Tone.Transport.start();

Tone.Transport.bpm.value = 160;
Tone.Transport.timeSignature = 6; //  6/4

//play a note every eighth note starting from the first measure
Tone.Transport.scheduleRepeat(function(time){
	//console.log(beatCount);

	 if(clapRow[beatCount] == 1){
     //Check to see is clap one should play based on the clapRow1
     clap.start(time);
   }

   if(clapRow2[beatCount] == 1){
     //Check to see is clap two should play based on the clapRow2
     clap2.start(time);
   }

 	   //Tone.Draw.schedule(function(){
 	   		//update visuals

 					if(clapRow[beatCount] == 1){
						//if there was a clap1, push a clap emoji into the clap1 display array
						dispRowArr1.push("👏");
 					}
					else{
						//if there was an open space, push an open emoji clap display array
						dispRowArr1.push("👐");
 					}

					if(clapRow2[beatCount] == 1){
						//if there was a clap2, push a clap emoji into the clap2 display array
						dispRowArr2.push("👏");
 					}
					else{
						//if there was an open space, push an open emoji clap2 display array
						dispRowArr2.push("👐");
 					}

					//Display them in the inner html of the display arrays
					document.getElementById("clapRow1Disp").innerHTML = dispRowArr1.join(" ");
					document.getElementById("clapRow2Disp").innerHTML = dispRowArr2.join(" ");



					if(dispRowArr1.length >= clapRow.length){
						//If this is the end of the measure, clear both
						dispRowArr1 = [];
						dispRowArr2 = [];
					}

 	 //  	}, time)

			if( beatCount >= clapRow.length - 1 ){
		 	 //If we've made it through the row, loop back and up the measure count
		 	 beatCount = -1;
		 	 measureCount++;

			 //update measure countter display
			 msrCountDisp.push("🔸");
			 document.getElementById("measureCountDisp").innerHTML = msrCountDisp.join(" ");
		  }

	   if(measureCount == 8){
	     //if it has been 8 measures,move the clapRow2 a beat ahead
	     clapRow2.push(clapRow2.shift());//Shift the first element off the array and push onto the end
	     measureCount = 0;
	     //console.log(clapRow2);

			 //clear measure counter display
			 msrCountDisp = [];
			 document.getElementById("measureCountDisp").innerHTML = msrCountDisp.join(" ");

	   }

		//Up the beat count
	  beatCount++;

}, "8n", "1m");


//console.log(clap);
var clapRow = [1,1,1,0,1,1,0,1,0,1,1,0]; // Missing the last rest for the timing error with the loop I didn't want to figure out
var clapRow2 = [1,1,1,0,1,1,0,1,0,1,1,0];
