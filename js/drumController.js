(function(){
  angular
    .module('drumApp')
    .controller('drumController', drumController);

  drumController.$inject = ['$scope','$swipe'];
  
    function drumController($scope,$swipe){
      var self= this;     
      var sounds = ["./audio/ttc_01.mp3","./audio/ttc_02.mp3","./audio/ttc_03.mp3",
        "./audio/ttc_04.mp3","./audio/hitom.mp3","./audio/flrtom.mp3",
        "./audio/ttc_07.mp3","./audio/ttc_08.mp3","./audio/ttc_09.mp3",
        "./audio/ttc_10.mp3","./audio/hihatopen.mp3","./audio/hihatclose.mp3",
        "./audio/ttc_13.mp3","./audio/Kick2.mp3","./audio/Clap.mp3",
        "./audio/ttc_16.mp3"];
      
       self.pads= [
          {pad: "sample1"},{pad: "sample2"},{pad: "sample3"}, {pad: "sample4"},
          {pad: "Hi Tom"},{pad: "Low Tom"},{pad: "Ride"}, {pad: "Crash"},
          {pad: "Snare 1"},{pad: "Clap"},{pad: "HiHatOpen"}, {pad: "HiHatClose"},
          {pad: "kick 1"},{pad: "kick 2"},{pad: "Snare 2"}, {pad: "Snare 3"}
          ];

       self.drumSound = drumSound;   

      function drumSound(index){
        // var allSounds = sounds.length;
        for (i=0 ; i < sounds.length; i++){ 
          var newSounds = new Audio(sounds[index]);
        
        }
        newSounds.play();
        console.log(newSounds);
       
      }


      }  

})();