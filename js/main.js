var rchitects = document.getElementById('rchitects');
var gainst = document.getElementById('gainst');
var ousing = document.getElementById('ousing');
var lienation = document.getElementById('lienation');

var typewriterRchiects = new Typewriter(rchitects, {
  cursor:'',
  loop: true,
  delay: 75,
});

typewriterGainst  = new Typewriter(gainst, {
  cursor:'',
  loop: true,
  delay: 75,
});
typewriterOusing  = new Typewriter(ousing, {
  cursor:'',
  loop: true,
  delay: 75,
});
typewriterLienation  = new Typewriter(lienation, {
  cursor:'',
  loop: true,
  delay: 75,
});

typewriterRchiects
  .pauseFor(250)
  .typeString('rchitects')
  .pauseFor(3000)
  .start();


  typewriterGainst
  .pauseFor(250)
  .typeString('gainst')
  .pauseFor(3225)
  .start();

  typewriterOusing
  .pauseFor(250)
  .typeString('ousing')
  .pauseFor(3225)
  .start();

  typewriterLienation
  .pauseFor(250)
  .typeString('lienation')
  .pauseFor(3000)
  .start();

