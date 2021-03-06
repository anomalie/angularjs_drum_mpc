(function(){
  angular
    .module('drumApp')
    .controller('drumController', drumController);

  drumController.$inject = ['$scope','$swipe'];
  
    function drumController($scope,$swipe){
      var self= this;

      var sounds = ["./audio/ReverseFX.mp3","./audio/ttc_02.mp3","./audio/ttc_03.mp3",
        "./audio/ttc_04.mp3","./audio/hitom.mp3","./audio/flrtom.mp3",
        "./audio/swell.mp3","./audio/crash.mp3","./audio/snare.mp3",
        "./audio/Clap.mp3","./audio/hihatopen.mp3","./audio/hihatclose.mp3",
        "./audio/Kick1.mp3","./audio/Kick2.mp3","./audio/Clap.mp3",
        "./audio/snare.mp3"];
      
       self.pads= [
          {pad: "sample1"},{pad: "sample2"},{pad: "sample3"}, {pad: "sample4"},
          {pad: "Hi Tom"},{pad: "Low Tom"},{pad: "Ride"}, {pad: "Crash"},
          {pad: "Snare 1"},{pad: "Clap"},{pad: "HiHatOpen"}, {pad: "HiHatClose"},
          {pad: "kick 1"},{pad: "kick 2"},{pad: "Snare 2"}, {pad: "Snare 3"}
          ];

       self.drumSound = drumSound;   

      function drumSound(index){
        for (i=0 ; i < sounds.length; i++){ 
          var newSounds = new Audio(sounds[index]);
        
        }
        newSounds.play();
        console.log(newSounds);
       
      }

      function drumHit(index){
        newSounds.play();
      }


      }  

})();