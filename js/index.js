$(document).ready(function(){
    
  $("#btn").click(function() {
    window.scrollTo({ top: 550, behavior: 'smooth'});
  });

  if(pageYOffset <= 461.25){
    $(".navbar").removeClass("second_navbar");
    $(".navbar").addClass("first_nav");
  }
  else{
    $(".navbar").addClass("second_navbar");
    $(".navbar").removeClass("first_nav");
  }
      
      
  $(window).on("scroll", function () {

    if(pageYOffset >= 461.25){
      $(".navbar").addClass("second_navbar");
      $(".navbar").removeClass("first_nav");
    }
    else{
      $(".navbar").removeClass("second_navbar");
      $(".navbar").addClass("first_nav");
    }
  });

  $('.ui.dropdown').dropdown();

  $("#scientific_link").click(function(){
    $("#scientific_team").show(1000);
    $("#web_track").show(1000);
    $("#arduino_track").hide(1000);
    $("#embedded_track").hide(1000);
    $("#flutter_track").hide(1000);
    $("#web_link").addClass("active");
    $("#flutter_link").removeClass("active");
    $("#embedded_link").removeClass("active");
    $("#arduino_link").removeClass("active");
    $("#fr_team").hide(1000);
    $("#media_team").hide(1000);
    $("#hr_team").hide(1000);
    $("#logistic_team").hide(1000);
    $("#pr_team").hide(1000);
  });

  // ################## web section ##########################

  $("#web_link").click(function() {
    $("#web_link").addClass("active");
    $("#flutter_link").removeClass("active");
    $("#embedded_link").removeClass("active");
    $("#arduino_link").removeClass("active");
    $("#web_track").show(1000);
    $("#arduino_track").hide(1000);
    $("#embedded_track").hide(1000);
    $("#flutter_track").hide(1000);
  });
  // ################## web section ##########################

  // ################## flutter section ##########################
  $("#flutter_link").click(function() {
    $("#flutter_link").addClass("active");
    $("#web_link").removeClass("active");
    $("#embedded_link").removeClass("active");
    $("#arduino_link").removeClass("active");
    $("#flutter_track").show(1000);
    $("#web_track").hide(1000);
    $("#embedded_track").hide(1000);
    $("#arduino_track").hide(1000);
  });
  // ################## flutter section #########################

  // ################## arduino section ########################

  $("#arduino_link").click(function() {
    $("#arduino_link").addClass("active");
    $("#web_link").removeClass("active");
    $("#embedded_link").removeClass("active");
    $("#flutter_link").removeClass("active");
    $("#arduino_track").show(1000);
    $("#web_track").hide(1000);
    $("#embedded_track").hide(1000);
    $("#flutter_track").hide(1000);
  });
  // ################## arduino section ########################

  // ################## embedded section ########################

  $("#embedded_link").click(function() {
    $("#embedded_link").addClass("active");
    $("#web_link").removeClass("active");
    $("#arduino_link").removeClass("active");
    $("#flutter_link").removeClass("active");
    $("#embedded_track").show(1000);
    $("#web_track").hide(1000);
    $("#arduino_track").hide(1000);
    $("#flutter_track").hide(1000);
  });
  // ################## embedded section ########################

  // ################## Sientific section ########################


  // ################## Media section ##########################

  $("#media_link").click(function(){
    $("#media_team").show(1000);
    $("#graphic_track").show(1000);
    $("#photographing_track").hide(1000);
    $("#social_track").hide(1000);
    $("#videography_track").hide(1000);
    $("#graphic_link").addClass("active");
    $("#videography_link").removeClass("active");
    $("#photographing_link").removeClass("active");
    $("#social_link").removeClass("active");
    $("#fr_team").hide(1000);
    $("#scientific_team").hide(1000);
    $("#hr_team").hide(1000);
    $("#logistic_team").hide(1000);
    $("#pr_team").hide(1000);

    // ################## graphic section ##########################
    $("#graphic_link").click(function() {
      $("#graphic_link").addClass("active");
      $("#videography_link").removeClass("active");
      $("#social_link").removeClass("active");
      $("#photographing_link").removeClass("active");
      $("#graphic_track").show(1000);
      $("#photographing_track").hide(1000);
      $("#social_track").hide(1000);
      $("#videography_track").hide(1000);
    });
    // ################## graphic section ##########################
    
    
    
    // ################## videography section ##########################
    
    $("#videography_link").click(function() {
      $("#videography_link").addClass("active");
      $("#graphic_link").removeClass("active");
      $("#social_link").removeClass("active");
      $("#photographing_link").removeClass("active");
      $("#videography_track").show(1000);
      $("#graphic_track").hide(1000);
      $("#social_track").hide(1000);
      $("#photographing_track").hide(1000);
    });
    // ################## videography section #########################
    
    // ################## photographing section ########################
    
    $("#photographing_link").click(function() {
      $("#photographing_link").addClass("active");
      $("#graphic_link").removeClass("active");
      $("#social_link").removeClass("active");
      $("#videography_link").removeClass("active");
      $("#photographing_track").show(1000);
      $("#graphic_track").hide(1000);
      $("#social_track").hide(1000);
      $("#videography_track").hide(1000);
    });
    // ################## photographing section ########################
    
    // ################## social section ########################
    
    $("#social_link").click(function() {
      $("#social_link").addClass("active");
      $("#graphic_link").removeClass("active");
      $("#photographing_link").removeClass("active");
      $("#videography_link").removeClass("active");
      $("#social_track").show(1000);
      $("#graphic_track").hide(1000);
      $("#photographing_track").hide(1000);
      $("#videography_track").hide(1000);
    });
    // ################## social section ########################

  });
  // ################## Media section ##########################


  // ################## fr section ########################

  $("#fr_link").click(function(){
    $("#fr_team").show(1000);
    $("#fr_track").show(1000);
    $("#scientific_team").hide(1000);
    $("#media_team").hide(1000);
    $("#hr_team").hide(1000);
    $("#logistic_team").hide(1000);
    $("#pr_team").hide(1000);
  });

  // ################## fr section ########################


  // ################## logistic section ########################

  $("#logistic_link").click(function(){
    $("#logistic_team").show(1000);
    $("#logistic_track").show(1000);
    $("#fr_team").hide(1000);
    // $("#fr_track").hide(1000);
    $("#scientific_team").hide(1000);
    $("#media_team").hide(1000);
    $("#hr_team").hide(1000);
    $("#pr_team").hide(1000);
  });

  // ################## logistic section ########################


  // ################## HR section ########################

  $("#hr_link").click(function(){
    $("#hr_team").show(1000);
    // $(".hr_filter").show(1000);
    $("#follow_up_track").show(1000);
    $("#training_track").hide(1000);
    $("#follow_up_link").addClass("active");
    $("#training_link").removeClass("active");
    $("#logistic_team").hide(1000);
    // $("#logistic_track").hide(1000);
    $("#fr_team").hide(1000);
    // $("#fr_track").hide(1000);
    $("#scientific_team").hide(1000);
    $("#media_team").hide(1000);
    $("#pr_team").hide(1000);

    $("#follow_up_link").click(function() {
      $("#follow_up_link").addClass("active");
      $("#training_link").removeClass("active");
      $("#follow_up_track").show(1000);
      $("#training_track").hide(1000);
    });
  
    $("#training_link").click(function() {
      $("#training_link").addClass("active");
      $("#follow_up_link").removeClass("active");
      $("#training_track").show(1000);
      $("#follow_up_track").hide(1000);
    });
  });

  // ################## HR section ########################


  // ################## PR section ########################

  $("#pr_link").click(function(){
    $("#pr_team").show(1000);
    // $(".pr_filter").show(1000);
    $("#presentation_track").show(1000);
    $("#data_collecting_track").hide(1000);
    $("#presentation_link").addClass("active");
    $("#data_collecting_link").removeClass("active");
    
    $("#logistic_team").hide(1000);
    // $("#logistic_track").hide(1000);
    $("#fr_team").hide(1000);
    // $("#fr_track").hide(1000);
    $("#scientific_team").hide(1000);
    $("#media_team").hide(1000);
    $("#hr_team").hide(1000);

    $("#presentation_link").click(function() {
      $("#presentation_link").addClass("active");
      $("#data_collecting_link").removeClass("active");
      $("#presentation_track").show(1000);
      $("#data_collecting_track").hide(1000);
    });
    
    $("#data_collecting_link").click(function() {
      $("#data_collecting_link").addClass("active");
      $("#presentation_link").removeClass("active");
      $("#data_collecting_track").show(1000);
      $("#presentation_track").hide(1000);
    });
  });

  // ################## PR section ########################


});

