
$(".campaign .close").click(function(){  
  $(".campaign").removeClass("active");  
  $("#campaigns").removeClass("active");
  $("#breadcrumb").html("");
})

$(".campaign h2, .campaign h3, .campaign p, .campaign img").click(function(e){
  
  if (!$(this).parent().parent().hasClass("active")) {
      $(".campaign.active").removeClass("active");
      $(this).parent().parent().addClass("active");

      $("#campaigns").addClass("active");

      $("#breadcrumb").html(" "+$(this).parent().parent().find(".top-zone h3").text()+" > "+$(this).parent().parent().find(".top-zone h2").text())

  }
  
})

