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

// $("#scientific_link").click(function(){
//   $("#scientific_team").show(1000);
//   $("#web_track").show(1000);
//   $("#web_link").addClass("active");
//   $("#flutter_link").removeClass("active");
//   $("#embedded_link").removeClass("active");
//   $("#arduino_link").removeClass("active");
//   $("#fr_team").hide(1000);
//   $("#media_team").hide(1000);
//   $("#hr_team").hide(1000);
//   $("#logistic_team").hide(1000);
//   $("#pr_team").hide(1000);
// });

// $("#fr_link").click(function(){
//   $("#fr_team").show(1000);
//   $("#fr_track").show(1000);
//   $("#scientific_team").hide(1000);
//   $("#media_team").hide(1000);
//   $("#hr_team").hide(1000);
//   $("#logistic_team").hide(1000);
//   $("#pr_team").hide(1000);
// });

// $("#logistic_link").click(function(){
//   $("#logistic_team").show(1000);
//   $("#logistic_track").show(1000);
//   $("#fr_team").hide(1000);
//   $("#fr_track").hide(1000);
//   $("#scientific_team").hide(1000);
//   $("#media_team").hide(1000);
//   $("#hr_team").hide(1000);
//   $("#pr_team").hide(1000);
// });

// $("#hr_link").click(function(){
//   $("#hr_team").show(1000);
//   $(".hr_filter").show(1000);
//   $("#follow_up_track").show(1000);
//   $("#follow_up_link").addClass("active");
//   $("#training_link").removeClass("active");
  
//   $("#logistic_team").hide(1000);
//   $("#logistic_track").hide(1000);
//   $("#fr_team").hide(1000);
//   $("#fr_track").hide(1000);
//   $("#scientific_team").hide(1000);
//   $("#media_team").hide(1000);
//   $("#pr_team").hide(1000);
// });

// $("#pr_link").click(function(){
//   $("#pr_team").show(1000);
//   $(".pr_filter").show(1000);
//   $("#presentation_track").show(1000);
//   $("#presentation_link").addClass("active");
//   $("#data_collecting_link").removeClass("active");
  
//   $("#logistic_team").hide(1000);
//   $("#logistic_track").hide(1000);
//   $("#fr_team").hide(1000);
//   $("#fr_track").hide(1000);
//   $("#scientific_team").hide(1000);
//   $("#media_team").hide(1000);
//   $("#hr_team").hide(1000);
// });


// $("#media_link").click(function(){
//   $("#media_team").show(1000);
//   $("#graphic_track").show(1000);
  // $("#graphic_link").addClass("active");
  // $("#videography_link").removeClass("active");
  // $("#photographing_link").removeClass("active");
  // $("#social_link").removeClass("active");
  // $("#fr_team").hide(1000);
  // $("#hr_team").hide(1000);
  // $("#logistic_team").hide(1000);
  // $("#pr_team").hide(1000);
  // $("#scientific_team").hide(1000);
// });

// ################# filter section #####################

// ################## Sientific section ########################

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
  $("#show_first_graphic").hide(1000);
  $("#show_second_graphic").hide(1000);
  $("#show_less_graphic_btn").hide(1000);

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
    $("#show_first_graphic").hide(1000);
    $("#show_second_graphic").hide(1000);
    $("#show_less_graphic_btn").hide(1000);
    $("#show_first_graphic_btn").show();
  });
  $("#show_first_graphic_btn").click(function() {
      $("#show_first_graphic").show(1000);
      $("#show_first_graphic_btn").hide();
      $("#show_second_graphic_btn").show();
  });
  
  $("#show_second_graphic_btn").click(function() {
      $("#show_second_graphic").show(1000);
      $("#show_second_graphic_btn").hide();
      $("#show_less_graphic_btn").show();
  });
  
  $("#show_less_graphic_btn").click(function() {
    $("#show_first_graphic").hide(1000);
      $("#show_second_graphic").hide(1000);
      $("#show_less_graphic_btn").hide(1000);
      $("#show_first_graphic_btn").show();
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
    $("#show_first_videography").hide(1000);
    $("#show_second_videography").hide(1000);
    $("#show_less_videography_btn").hide(1000);
    $("#show_first_videography_btn").show();

  });
  $("#show_first_videography_btn").click(function() {
    $("#show_first_videography").show(1000);
    $("#show_first_videography_btn").hide();
    $("#show_second_videography_btn").show();
  });
  
  $("#show_second_videography_btn").click(function() {
    $("#show_second_videography").show(1000);
    $("#show_second_videography_btn").hide();
    $("#show_less_videography_btn").show();
  });
  
  $("#show_less_videography_btn").click(function() {
    $("#show_first_videography").hide(1000);
    $("#show_second_videography").hide(1000);
    $("#show_less_videography_btn").hide(1000);
    $("#show_first_videography_btn").show();
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
    $("#show_first_photographing").hide(1000);
    $("#show_second_photographing").hide(1000);
    $("#show_less_photographing_btn").hide(1000);
    $("#show_first_photographing_btn").show();
  });
  $("#show_first_photographing_btn").click(function() {
    $("#show_first_photographing").show(1000);
    $("#show_first_photographing_btn").hide();
    $("#show_second_photographing_btn").show();
  });
  
  $("#show_second_photographing_btn").click(function() {
    $("#show_second_photographing").show(1000);
    $("#show_second_photographing_btn").hide();
    $("#show_less_photographing_btn").show();
  });
  
  $("#show_less_photographing_btn").click(function() {
    $("#show_first_photographing").hide(1000);
    $("#show_second_photographing").hide(1000);
    $("#show_less_photographing_btn").hide(1000);
    $("#show_first_photographing_btn").show();
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
    $("#show_first_social").hide(1000);
    $("#show_second_social").hide(1000);
    $("#show_less_social_btn").hide(1000);
    $("#show_first_social_btn").show();
  });
  $("#show_first_social_btn").click(function() {
    $("#show_first_social").show(1000);
    $("#show_first_social_btn").hide();
    $("#show_second_social_btn").show();
  });
  
  $("#show_second_social_btn").click(function() {
    $("#show_second_social").show(1000);
    $("#show_second_social_btn").hide();
    $("#show_less_social_btn").show();
  });
  
  $("#show_less_social_btn").click(function() {
    $("#show_first_social").hide(1000);
    $("#show_second_social").hide(1000);
    $("#show_less_social_btn").hide(1000);
    $("#show_first_social_btn").show();
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
    $("#show_first_presentation").hide(1000);
    $("#show_second_presentation").hide(1000);
    $("#show_less_presentation_btn").hide(1000);
    $("#show_first_presentation_btn").show();
  });
  $("#show_first_presentation_btn").click(function() {
      $("#show_first_presentation").show(1000);
      $("#show_first_presentation_btn").hide();
      $("#show_second_presentation_btn").show();
  });
  
  $("#show_second_presentation_btn").click(function() {
      $("#show_second_presentation").show(1000);
      $("#show_second_presentation_btn").hide();
      $("#show_less_presentation_btn").show();
  });
  
  $("#show_less_presentation_btn").click(function() {
    $("#show_first_presentation").hide(1000);
      $("#show_second_presentation").hide(1000);
      $("#show_less_presentation_btn").hide(1000);
      $("#show_first_presentation_btn").show();
  });
  
  
  $("#data_collecting_link").click(function() {
    $("#data_collecting_link").addClass("active");
    $("#presentation_link").removeClass("active");
    $("#data_collecting_track").show(1000);
    $("#presentation_track").hide(1000);
    $("#show_first_data_collecting").hide(1000);
    $("#show_second_data_collecting").hide(1000);
    $("#show_less_data_collecting_btn").hide(1000);
    $("#show_first_data_collecting_btn").show();
  });
  $("#show_first_data_collecting_btn").click(function() {
    $("#show_first_data_collecting").show(1000);
    $("#show_first_data_collecting_btn").hide();
    $("#show_second_data_collecting_btn").show();
  });
  
  $("#show_second_data_collecting_btn").click(function() {
    $("#show_second_data_collecting").show(1000);
    $("#show_second_data_collecting_btn").hide();
    $("#show_less_data_collecting_btn").show();
  });
  
  $("#show_less_data_collecting_btn").click(function() {
    $("#show_first_data_collecting").hide(1000);
    $("#show_second_data_collecting").hide(1000);
    $("#show_less_data_collecting_btn").hide(1000);
    $("#show_first_data_collecting_btn").show();
  });
  
});

// ################## PR section ########################


});

