$(document).ready(function(){
    var audio2, playbtn
  function initAudioPlayer(){
    var playlist = [
  {"title":"open","url":"https://cdn.jsdelivr.net/gh/leejeeun/lalaland/audio/open.mp3"},
  {"title":"1","url":"https://cdn.jsdelivr.net/gh/leejeeun/lalaland/audio/1.mp3"},
  {"title":"2","url":"https://cdn.jsdelivr.net/gh/leejeeun/lalaland/audio/2.mp3"},
  {"title":"3","url":"https://cdn.jsdelivr.net/gh/leejeeun/lalaland/audio/3.mp3"},
  {"title":"4","url":"https://cdn.jsdelivr.net/gh/leejeeun/lalaland/audio/4.mp3"},
  {"title":"5","url":"https://cdn.jsdelivr.net/gh/leejeeun/lalaland/audio/5.mp3"},
  {"title":"6","url":"https://cdn.jsdelivr.net/gh/leejeeun/lalaland/audio/6.mp3"},
  {"title":"7","url":"https://cdn.jsdelivr.net/gh/leejeeun/lalaland/audio/7.mp3"},
  {"title":"8","url":"https://cdn.jsdelivr.net/gh/leejeeun/lalaland/audio/8.mp3"},
  ];
  audio2 = new Audio(playlist[0].url);
  audio2.loop =true;
  var playing = 0;
  playbtn = document.getElementById("autoplay");
  // Add Event Handling
  playbtn.addEventListener("click",playPause);
  // Functions
  function playPause(){
  if(audio2.volume===0){
  audio2.volume=1;
  audio2.play();
  
  } 
  else {
  audio2.volume=0;}
  }
  document.querySelector('#previous').addEventListener("click", function(){
    if(playing > 0){
      playing--;
      audio2.src = playlist[ playing ].url;
      audio2.play();
    } 
  });
  
  document.querySelector('#next').addEventListener("click", function(){
    if(playing < playlist.length-1){
        playing++;
        audio2.src = playlist[ playing ].url;
        audio2.play();
    }    
  });
  };
  $(function(){
      $('#full').on('click',function(){
      audio2.play();
      });
      $('#box').on('click',function(){
      audio2.pause();
      });
  });
  window.addEventListener("load",initAudioPlayer);
  
  
  });