$(document).ready(function(){
    
  $("#btn").click(function() {
    window.scrollTo({ top: 550, behavior: 'smooth'});
  });

  if(pageYOffset <= 665){
    $(".navbar").removeClass("second_navbar");
    $(".navbar").addClass("first_nav");
  }
  else{
    $(".navbar").addClass("second_navbar");
    $(".navbar").removeClass("first_nav");
  }
      
      
  $(window).on("scroll", function () {

    if(pageYOffset >= 665){
      $(".navbar").addClass("second_navbar");
      $(".navbar").removeClass("first_nav");
    }
    else{
      $(".navbar").removeClass("second_navbar");
      $(".navbar").addClass("first_nav");
    }
  });

  $('.ui.dropdown')
  .dropdown()
;

// ################# filter section #####################

$("#scientific_link").click(function(){
  $("#scientific_team").show(1000);
  $("#fr_team").hide(1000);
  $("#media_team").hide(1000);
  $("#hr_team").hide(1000);
  $("#logistic_team").hide(1000);
  $("#pr_team").hide(1000);
});

$("#fr_link").click(function(){
  $("#fr_team").show(1000);
  $("#fr_track").show(1000);
  $("#scientific_team").hide(1000);
  $("#media_team").hide(1000);
  $("#hr_team").hide(1000);
  $("#logistic_team").hide(1000);
  $("#pr_team").hide(1000);
});

$("#logistic_link").click(function(){
  $("#logistic_team").show(1000);
  $("#logistic_track").show(1000);
  $("#fr_team").hide(1000);
  $("#fr_track").hide(1000);
  $("#scientific_team").hide(1000);
  $("#media_team").hide(1000);
  $("#hr_team").hide(1000);
  $("#pr_team").hide(1000);
});

$("#hr_link").click(function(){
  $("#hr_team").show(1000);
  $("#hr_track").show(1000);
  $(".hr_filter").show(1000);
  $("#follow_up_track").show(1000);
  
  $("#logistic_team").hide(1000);
  $("#logistic_track").hide(1000);
  $("#fr_team").hide(1000);
  $("#fr_track").hide(1000);
  $("#scientific_team").hide(1000);
  $("#media_team").hide(1000);
  $("#pr_team").hide(1000);
});

// ################# filter section #####################


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
  $("#show_first_web").hide(1000);
  $("#show_second_web").hide(1000);
  $("#show_less_web_btn").hide(1000);
  $("#show_first_web_btn").show();
});
$("#show_first_web_btn").click(function() {
    $("#show_first_web").show(1000);
    $("#show_first_web_btn").hide();
    $("#show_second_web_btn").show();
});

$("#show_second_web_btn").click(function() {
    $("#show_second_web").show(1000);
    $("#show_second_web_btn").hide();
    $("#show_less_web_btn").show();
});

$("#show_less_web_btn").click(function() {
  $("#show_first_web").hide(1000);
    $("#show_second_web").hide(1000);
    $("#show_less_web_btn").hide(1000);
    $("#show_first_web_btn").show();
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
  $("#show_first_flutter").hide(1000);
  $("#show_second_flutter").hide(1000);
  $("#show_less_flutter_btn").hide(1000);
  $("#show_first_flutter_btn").show();
});
$("#show_first_flutter_btn").click(function() {
  $("#show_first_flutter").show(1000);
  $("#show_first_flutter_btn").hide();
  $("#show_second_flutter_btn").show();
});

$("#show_second_flutter_btn").click(function() {
  $("#show_second_flutter").show(1000);
  $("#show_second_flutter_btn").hide();
  $("#show_less_flutter_btn").show();
});

$("#show_less_flutter_btn").click(function() {
  $("#show_first_flutter").hide(1000);
  $("#show_second_flutter").hide(1000);
  $("#show_less_flutter_btn").hide(1000);
  $("#show_first_flutter_btn").show();
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
  $("#show_first_arduino").hide(1000);
  $("#show_second_arduino").hide(1000);
  $("#show_less_arduino_btn").hide(1000);
  $("#show_first_arduino_btn").show();
});
$("#show_first_arduino_btn").click(function() {
  $("#show_first_arduino").show(1000);
  $("#show_first_arduino_btn").hide();
  $("#show_second_arduino_btn").show();
});

$("#show_second_arduino_btn").click(function() {
  $("#show_second_arduino").show(1000);
  $("#show_second_arduino_btn").hide();
  $("#show_less_arduino_btn").show();
});

$("#show_less_arduino_btn").click(function() {
  $("#show_first_arduino").hide(1000);
  $("#show_second_arduino").hide(1000);
  $("#show_less_arduino_btn").hide(1000);
  $("#show_first_arduino_btn").show();
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
  $("#show_first_embedded").hide(1000);
  $("#show_second_embedded").hide(1000);
  $("#show_less_embedded_btn").hide(1000);
  $("#show_first_embedded_btn").show();
});
$("#show_first_embedded_btn").click(function() {
  $("#show_first_embedded").show(1000);
  $("#show_first_embedded_btn").hide();
  $("#show_second_embedded_btn").show();
});

$("#show_second_embedded_btn").click(function() {
  $("#show_second_embedded").show(1000);
  $("#show_second_embedded_btn").hide();
  $("#show_less_embedded_btn").show();
});

$("#show_less_embedded_btn").click(function() {
  $("#show_first_embedded").hide(1000);
  $("#show_second_embedded").hide(1000);
  $("#show_less_embedded_btn").hide(1000);
  $("#show_first_embedded_btn").show();
});

// ################## embedded section ########################


// ################## fr section ########################

$("#show_first_fr_btn").click(function() {
  $("#show_first_fr").show(1000);
  $("#show_first_fr_btn").hide();
  $("#show_second_fr_btn").show();
});

$("#show_second_fr_btn").click(function() {
  $("#show_second_fr").show(1000);
  $("#show_second_fr_btn").hide();
  $("#show_less_fr_btn").show();
});

$("#show_less_fr_btn").click(function() {
  $("#show_first_fr").hide(1000);
  $("#show_second_fr").hide(1000);
  $("#show_less_fr_btn").hide(1000);
  $("#show_first_fr_btn").show();
});

// ################## fr section ########################

// ################## logistic section ########################
$("#show_first_logistic_btn").click(function() {
  $("#show_first_logistic").show(1000);
  $("#show_first_logistic_btn").hide();
  $("#show_second_logistic_btn").show();
});

$("#show_second_logistic_btn").click(function() {
  $("#show_second_logistic").show(1000);
  $("#show_second_logistic_btn").hide();
  $("#show_less_logistic_btn").show();
});

$("#show_less_logistic_btn").click(function() {
  $("#show_first_logistic").hide(1000);
  $("#show_second_logistic").hide(1000);
  $("#show_less_logistic_btn").hide(1000);
  $("#show_first_logistic_btn").show();
});
// ################## logistic section ########################


// ################## HR section ########################

$("#follow_up_link").click(function() {
  $("#follow_up_link").addClass("active");
  $("#training_link").removeClass("active");
  $("#follow_up_track").show(1000);
  $("#training_track").hide(1000);
  $("#show_first_follow_up").hide(1000);
  $("#show_second_follow_up").hide(1000);
  $("#show_less_follow_up_btn").hide(1000);
  $("#show_first_follow_up_btn").show();
});
$("#show_first_follow_up_btn").click(function() {
    $("#show_first_follow_up").show(1000);
    $("#show_first_follow_up_btn").hide();
    $("#show_second_follow_up_btn").show();
});

$("#show_second_follow_up_btn").click(function() {
    $("#show_second_follow_up").show(1000);
    $("#show_second_follow_up_btn").hide();
    $("#show_less_follow_up_btn").show();
});

$("#show_less_follow_up_btn").click(function() {
  $("#show_first_follow_up").hide(1000);
    $("#show_second_follow_up").hide(1000);
    $("#show_less_follow_up_btn").hide(1000);
    $("#show_first_follow_up_btn").show();
});


$("#training_link").click(function() {
  $("#training_link").addClass("active");
  $("#follow_up_link").removeClass("active");
  $("#training_track").show(1000);
  $("#follow_up_track").hide(1000);
  $("#show_first_training").hide(1000);
  $("#show_second_training").hide(1000);
  $("#show_less_training_btn").hide(1000);
  $("#show_first_training_btn").show();
});
$("#show_first_training_btn").click(function() {
  $("#show_first_training").show(1000);
  $("#show_first_training_btn").hide();
  $("#show_second_training_btn").show();
});

$("#show_second_training_btn").click(function() {
  $("#show_second_training").show(1000);
  $("#show_second_training_btn").hide();
  $("#show_less_training_btn").show();
});

$("#show_less_training_btn").click(function() {
  $("#show_first_training").hide(1000);
  $("#show_second_training").hide(1000);
  $("#show_less_training_btn").hide(1000);
  $("#show_first_training_btn").show();
});

// ################## HR section ########################
});

