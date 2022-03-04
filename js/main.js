

// setTimeout(function(){
//     $.scrollTo("#section-10",2000)


// },500)


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
  $("#action, #take-action").toggleClass("active")
})

$(".campaign .close").click(function(){  
  $(".campaign").removeClass("active");  
  $("#campaigns").removeClass("active");
  $("#breadcrumb").html("");
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

  