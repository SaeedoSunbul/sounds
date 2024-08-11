var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML; // the butoon w ,a,s,d,j,k,l 
    console.log(buttonInnerHTML)

   if ( buttonInnerHTML === "w"){
      var audio1 = new Audio("Anime wow sound effect [TubeRipper.com].mp3");
      audio1.play() ;
      audio1.volume = 0.5;
    } 
    if ( buttonInnerHTML === "a"){
      var audio2 = new Audio("Cartoon Bonk Sound Effect [TubeRipper.com].mp3");
      audio2.play() ;
      audio2.volume = 0.5;
    }  
    if ( buttonInnerHTML === "s"){
      var audio3 = new Audio("https://www.vibrationdata.com/piano_C_sharp.mp3");
      audio3.play() ;
      audio3.volume = 0.5;
    } 
    if ( buttonInnerHTML === "d"){
      var audio4 = new Audio("Slap oh Sound effect [TubeRipper.com].mp3");
      audio4.play() ;
      audio4.volume = 0.5;
    }  
    if ( buttonInnerHTML === "j"){
      var audio5 = new Audio("رياكشن وفرها في جيبك يالعبد [TubeRipper.com].mp3");
      audio5.play();
      audio5.volume = 0.5;
    }           
    if ( buttonInnerHTML === "k"){
      var audio6 = new Audio("sounds\tom-3.mp3");
      audio6.play(); 
      audio6.volume = 0.5;
    }
    if ( buttonInnerHTML === "l"){
      var audio7 = new Audio("sounds\tom-4.mp3");
      audio7.play(); 
      audio7.volume = 0.5;
    }



  });
}
/*
document.addEventListener("keypress", function() {
  
  var buttonInnerHTML = this.innerHTML
  console.log(buttonInnerHTML)

  if ( buttonInnerHTML === "w"){
    var audio1 = new Audio("https://www.vibrationdata.com/tuningfork440.mp3");
    audio1.play() ;
    audio1.volume = 0.5;
  } 
  if ( buttonInnerHTML === "a"){
    var audio2 = new Audio("https://www.vibrationdata.com/tuningfork440.mp3");
    audio2.play() ;
    audio2.volume = 0.5;
  }  
  if ( buttonInnerHTML === "s"){
    var audio3 = new Audio("https://www.vibrationdata.com/piano_C_sharp.mp3");
    audio3.play() ;
    audio3.volume = 0.5;
  } 
  if ( buttonInnerHTML === "d"){
    var audio4 = new Audio("https://www.vibrationdata.com/piano_C_sharp.mp3");
    audio4.play() ;
    audio4.volume = 0.5;
  }  
  if ( buttonInnerHTML === "j"){
    var audio5 = new Audio("https://www.vibrationdata.com/piano_D_sharp.mp3");
    audio5.play();
    audio5.volume = 0.5;
  }           
  if ( buttonInnerHTML === "k"){
    var audio6 = new Audio("https://www.vibrationdata.com/tuningfork440.mp3");
    audio6.play(); 
    audio6.volume = 0.5;
  }
  if ( buttonInnerHTML === "l"){
    var audio7 = new Audio("https://www.vibrationdata.com/tuningfork440.mp3");
    audio7.play(); 
    audio7.volume = 0.5;
  }


  


})
*/

function myFunction1(event){

  var key = event.key;
  console.log(key)
  

  if ( key === "w"){
    var audio1 = new Audio("Anime wow sound effect [TubeRipper.com].mp3");
    audio1.play() ;
    audio1.volume = 0.25;
  } 
  if ( key === "a"){
    var audio2 = new Audio("Cartoon Bonk Sound Effect [TubeRipper.com].mp3");
    audio2.play() ;
    audio2.volume = 0.25;
  }  
  if ( key === "s"){
    var audio3 = new Audio("https://www.vibrationdata.com/piano_C_sharp.mp3");
    audio3.play() ;
    audio3.volume = 0.25;
  } 
  if (key === "d"){
    var audio4 = new Audio("Slap oh Sound effect [TubeRipper.com].mp3");
    audio4.play() ;
    audio4.volume = 0.25;
  }  
  if ( key === "j"){
    var audio5 = new Audio("رياكشن وفرها في جيبك يالعبد [TubeRipper.com].mp3");
    audio5.play();
    audio5.volume = 0.5;
  }           
  if ( key === "k"){
    var audio6 = new Audio("DiEs fRoM cRiNgE (android notification earrape meme) [TubeRipper.com].mp3");
    audio6.play(); 
    audio6.volume = 0.25;
  }
  if ( key === "l"){
    var audio7 = new Audio("sounds\tom-4.mp3");
    audio7.play(); 
    audio7.volume = 0.5;
  }



}

function myFunction2(){
 
  document.querySelector(".set").style.display="block"


}

function myFunction3(){
 
  document.querySelector(".set").style.display="none"


}
