var rchitects = document.getElementById('rchitects');
var gainst = document.getElementById('gainst');
var ousing = document.getElementById('ousing');
var lienation = document.getElementById('lienation');

letterSpeed = 50;
initialPause = 10000;
completedPause = 3000;
var typewriterRchiects = new Typewriter(rchitects, {
  cursor:'',
  loop: true,
  delay: letterSpeed,
});

typewriterGainst  = new Typewriter(gainst, {
  cursor:'',
  loop: true,
  delay: letterSpeed,
});
typewriterOusing  = new Typewriter(ousing, {
  cursor:'',
  loop: true,
  delay: letterSpeed,
});
typewriterLienation  = new Typewriter(lienation, {
  cursor:'',
  loop: true,
  delay: letterSpeed,
});

typewriterRchiects
  .pauseFor(initialPause)
  .typeString('rchitects')
  .pauseFor(completedPause)
  .start();


  typewriterGainst
  .pauseFor(initialPause)
  .typeString('gainst')
  .pauseFor(completedPause+(letterSpeed*3*2))
  .start();

  typewriterOusing
  .pauseFor(initialPause)
  .typeString('ousing')
  .pauseFor(completedPause+(letterSpeed*3*2))
  .start();

  typewriterLienation
  .pauseFor(initialPause)
  .typeString('lienation')
  .pauseFor(completedPause)
  .start();



  $(".nav__button").click(function(){
    $(document).scrollTo($(this).data("target"),500)
  })