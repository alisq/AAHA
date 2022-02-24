
$(".campaign .close").click(function(){  
  $(".campaign").removeClass("active");  
  $("#campaigns").removeClass("active");
})

$(".campaign h2, .campaign h3").click(function(e){
  
  if (!$(this).parent().parent().hasClass("active")) {
      $(".campaign.active").removeClass("active");
      $(this).parent().parent().addClass("active");

      $("#campaigns").addClass("active");

  }
  
})

