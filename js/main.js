

// setTimeout(function(){
//     $.scrollTo("#section-10",2000)


// },500)



const menu = `
<div class="button-campaign" data-section="#section-01"></div>
<div class="button-campaign" data-section="#section-02"></div>
<div class="button-campaign" data-section="#section-03"></div>
<div class="button-campaign" data-section="#section-04"></div>
<div class="button-campaign" data-section="#section-05"></div>
<div class="button-campaign" data-section="#section-06"></div>
<div class="button-campaign" data-section="#section-07"></div>
<div class="button-campaign" data-section="#section-08"></div>
<div class="button-campaign" data-section="#section-09"></div>
<div class="button-campaign" data-section="#section-10"></div>
<div class="button-campaign" data-section="#section-11"></div>
`


$(document).on('click','.button-campaign', function(){
    var t = $(this).data("section");
    $.scrollTo(t,1000)
    setTimeout(function(){
      $(t+' h2').click();
    },1200);
})

$("header, footer").hover(function(){
  $("#big-title").fadeIn(300)
}, function(){
  $("#big-title").fadeOut(300)
})


// $("#test-1").click(function(){
//   $("#big-title").toggleClass("active")
//   $("#test-layers, #test-statement, #test-purchase, #test-grid").removeClass("active");
// })

// $("#test-2").click(function(){
//   $("#test-layers, #test-statement, #test-purchase").toggleClass("active")
//   $("#big-title, #test-grid").removeClass("active");
// })

// $("#test-3").click(function(){
//   $("#test-grid").toggleClass("active")
//   $("#test-layers, #test-statement, #test-purchase, #big-title").removeClass("active");
// })


// $("#test-4").click(function(){
  
//   $("#test-grid, #test-layers, #test-statement, #test-purchase, #big-title").removeClass("active");
// })



$("#take-action").click(function(){
  $("#action, #take-action").addClass("active")

  $("#breadcrumb").html("TAKE ACTION >  Resources and Map")
})

$("#campaign-button").click(function(){
  $("#action, #take-action").removeClass("active")
  $("#breadcrumb").html(menu)
})




$(".campaign .close").click(function(){  
  $(".campaign").removeClass("active");  
  $("#campaigns").removeClass("active");
  $("#breadcrumb").html(menu);
})

$(".campaign h2, .campaign h3, .campaign p, .campaign img").click(function(e){
  
  if (!$(this).closest('.campaign').hasClass("active")) {
      $(".campaign.active").removeClass("active");
      $(this).closest('.campaign').addClass("active");

      $("#campaigns").addClass("active");

      $("#breadcrumb").html(" "+$(this).closest('.campaign').find(".top-zone h3").text()+" > "+$(this).closest('.campaign').find(".top-zone h2").text())

  }
  
})



//MAP STUFF



var southEast = L.latLng(36.950024,-58.2220568),
    northWest = L.latLng(78.8151074,-140.90927),
    bounds = L.latLngBounds(southEast, northWest);



var bigmap = L.map('action__map').fitBounds(bounds);



L.tileLayer(
  'https://api.mapbox.com/styles/v1/iamasq/cl02nf3ov001415p76k2hrty5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWFtYXNxIiwiYSI6ImNrc296bmRvaDAxMGkydnBsNGcwMzQwdGcifQ.PkRl94Sjs9H2IM0auw-zdg', {
      tileSize: 512,
      zoom:25,
      zoomOffset: -1,
      attribution: '© mapbpx'
  }).addTo(bigmap);

  


  $(".cover").click(function(){
    $(this).fadeOut(200);
  })

  setTimeout(function(){
    $(".cover").fadeOut(200);

  },5000)



  var rchitecture = document.getElementById('rchitecture');
var gainst = document.getElementById('gainst');
var ousing = document.getElementById('ousing');
var lienation = document.getElementById('lienation');

letterSpeed = 50;
initialPause = 1000;
completedPause = 3000;
var typewriterRchiects = new Typewriter(rchitecture, {
  cursor:'',
  loop: false,
  delay: letterSpeed,
});

typewriterGainst  = new Typewriter(gainst, {
  cursor:'',
  loop: false,
  delay: letterSpeed,
});
typewriterOusing  = new Typewriter(ousing, {
  cursor:'',
  loop: false,
  delay: letterSpeed,
});
typewriterLienation  = new Typewriter(lienation, {
  cursor:'',
  loop: false,
  delay: letterSpeed,
});



$("footer").hover(function(){
  typewriterRchiects
  .pauseFor(initialPause)
  .typeString('rchitecture')
  .pauseFor(completedPause)
  .deleteChars(11)
  
  .start()


  typewriterGainst
  .pauseFor(initialPause)
  .typeString('gainst')
  .pauseFor(completedPause+(letterSpeed*5*2))
  .start()
  .deleteChars(6)
  
  

  typewriterOusing
  .pauseFor(initialPause)
  .typeString('ousing')
  .pauseFor(completedPause+(letterSpeed*5*2))
  .start()
  .deleteChars(6)
  
  

  typewriterLienation
  .pauseFor(initialPause)
  .typeString('lienation')
  .pauseFor(completedPause+(letterSpeed*2*2))
  .start()
  .deleteChars(9)
  
  

})

