var playBtn = anime({ 
    targets: '.path',     
    d: {       
      value: [
      "M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z",
      "M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"
      ]  
    }, 
      duration: 300,
      delay: 100,
      easing: 'easeInOutQuart',
      autoplay: false 
  
  }) 

$('.play').on('click',function() {
  
  playBtn.play();
 playBtn.reverse();
});