$(document).ready(function(){

  // Clear the console
  console.clear();
   
  // Plugin
  (function ($) {
  $.fn.antispam = function () {
  return this.each(function () {
  var $self = $(this);
  // Get the text
  var text = $self.text();
  // Replace "at" and "dot"
  var email = text.replace(" at ", "@").replace(" dot ", ".");
  // Create a link
  var $link = $("<a></a>");
  $link.attr("href", "mailto:" + email);
  $link.text(email);
  // Replace the span with the link
  $self.html( $link );
  });
  };
  })(jQuery);
   
  $(".antispam").antispam();

  $('.link').on('click',function (e) {
      e.preventDefault();
      var target = this.hash,
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 1000, 'swing', function () {
          window.location.hash = target;
      });
      $(this).parent().fadeOut();
  });

  $(window).scroll(function () {
    var height = $('body').height();
    var scrollTop = $(window).scrollTop();

    if (scrollTop>(height-65)){
      $('#second').css({ 'position': 'fixed', 'top': '65px'});
      $('#first h1').fadeOut(500);
      $('#second .down-page').css('bottom', '65px');
    }
    if (scrollTop<(height-65)){
      $('#second').css({ 'position': 'absolute', 'top': '100%'});
      $('#first h1').fadeIn(1000);
    }

    if (scrollTop>(height*2-75)){
      $('#third').css({ 'position': 'fixed', 'top' : '75px' });
      $('.overlay').fadeIn(1000);
      $('#third .down-page').css('bottom', '75px');
    }
    if (scrollTop<(height*2-75)){
      $('#third').css({ 'position': 'absolute', 'top' : '200%' });
      $('.overlay').fadeOut(200);
    }

    if (scrollTop>(height*3-85)){
      $('#fourth').css({ 'position': 'fixed', 'top' : '85px' });
      $('#fourth .down-page').css('bottom', '85px');
    }
    if (scrollTop<(height*3-85)){
      $('#fourth').css({ 'position': 'absolute', 'top' : '300%' });
    }

    if (scrollTop>(height*4-95)){
      $('#fifth').css({ 'position': 'fixed', 'top' : '95px' });
      $('#fifth .down-page').css('bottom', '95px');
    }
    if (scrollTop<(height*4-95)){
      $('#fifth').css({ 'position': 'absolute', 'top' : '400%' });
    }

    if (scrollTop>(height*5-105)){
      $('#sixth').css({ 'position': 'fixed', 'top' : '105px' });
      $('#sixth .down-page').css('bottom', '105px');
    }
    if (scrollTop<(height*5-105)){
      $('#sixth').css({ 'position': 'absolute', 'top' : '500%' });
    }

  });


  $(window).scroll(function () {
    $('[class^="down"]').each(function () { 
      if (($(this).offset().top - $(window).scrollTop()) < 400) { //<---mark the $(this).offset().top of current object
        $(this).stop().fadeTo(100, 0); //<----fadeOut the current obj
        } 
      else {
            // $(this).stop().fadeTo('fast', 1); //<----fadeIn the current obj
        }
     });

  });


  $(window).scroll(function () {
    $('[class^="circle"],.question-mark').each(function () { 
      if (($(this).offset().top - $(window).scrollTop()) < 300) { //<---mark the $(this).offset().top of current object
        $(this).stop().fadeTo(100, 0); //<----fadeOut the current obj
        } 
      else {
            $(this).stop().fadeTo(100, 1); //<----fadeIn the current obj
        }
     });

  });


  $("#first h1").addClass("masterTooltip");


  $(document).ready(function() {
    $('.masterTooltip').hover(function(){
            // Hover over code
            var title = $(this).attr('title');
            $(this).data('tipText', title).removeAttr('title');
            $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('fast');
    }, function() {
            // Hover out code
            $(this).attr('title', $(this).data('tipText'));
            $('.tooltip').remove();
    }).mousemove(function(e) {
            var mousex = e.pageX; //Get X coordinates
            var mousey = e.pageY; //Get Y coordinates
            $('.tooltip')
            .css({ top: mousey, left: mousex })
    });
  });


  $("#composition-link").click(function() {
    $("#composition").fadeIn();
  });
});
