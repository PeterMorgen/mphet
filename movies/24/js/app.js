// Template Name: Vivid
// Template URL: https://techpedia.co.uk/template/vivid
// Description:  Vivid - Anime Html Template
// Version: 1.0.0

(function (window, document, $, undefined) {
  "use strict";
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.BackToTop();
      Init.preloader();
      Init.hamburgerMenu();
      Init.countdownInit(".countdown", "2025/11/17");
      Init.countdownType2(".countdown-2", "2025/11/17");
      Init.initializeSlick();
      Init.videoPlay();
      Init.VideoPlayer();
      Init.continueEmail();
      Init.backToLogin();
    },

    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },

    BackToTop: function () {
      var btn = $("#backto-top");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });
      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          "300"
        );
      });
    },

    preloader: function () {
      setTimeout(function () {
        $("#preloader").hide("slow");
      }, 2000);
    },
      // Ham Burger Menu
    hamburgerMenu: function () {
      if ($(".hamburger-menu").length) {
        $('.hamburger-menu').on('click', function() {
          $('.bar').toggleClass('animate');
          $('.mobile-navar').toggleClass('active');
          return false;
        })
        $('.has-children').on ('click', function() {
          $(this).children('ul').slideToggle('slow', 'swing');
          $('.icon-arrow').toggleClass('open');
        });
      }
    },
    countdownInit: function (countdownSelector, countdownTime) {
      var eventCounter = $(countdownSelector);
      if($('.data-timer1').length){
        if (eventCounter.length) {
          eventCounter.countdown(countdownTime, function (e) {
            $(this).html(
              e.strftime(
                 '<li>%D<small>Days</small></li>\
                  <li>%H<small>Hrs</small></li>\
                  <li>%M<small>Min</small></li>\
                  <li>%S<small>Sec</small></li>'
              )
            );
          });
        }
      }
    },
    countdownType2: function (countdownSelector, countdownTime, countdown) {
      var eventCounter = $(countdownSelector);
      if($('.data-timer2').length){
        if (eventCounter.length) {
          eventCounter.countdown(countdownTime, function (e) {
            $(this).html(
              e.strftime(
                '<li>%d<span>Days</span></li>\
                <li>%H<span>Hrs</span></li>\
                <li>%M<span>Min</span></li>\
                <li class="m-0">%S<span>Sec</span></li>'
              )
            );
          });
        }
      }
    },
    initializeSlick: function (e) {

      if ($(".card-slider").length) {
        $(".card-slider").slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          autoplay: false,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1399,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }

    },

    formValidation: function () {
      if ($(".form-validator").length) {
        $(".form-validator").validate();
      }
    },

    contactForm: function () {
      $(".contact-form").on("submit", function (e) {
        e.preventDefault();
        if ($(".contact-form").valid()) {
          var _self = $(this);
          _self
            .closest("div")
            .find('button[type="submit"]')
            .attr("disabled", "disabled");
          var data = $(this).serialize();
          $.ajax({
            url: "./assets/mail/contact.php",
            type: "post",
            dataType: "json",
            data: data,
            success: function (data) {
              $(".contact-form").trigger("reset");
              _self.find('button[type="submit"]').removeAttr("disabled");
              if (data.success) {
                document.getElementById("message").innerHTML =
                  "<h5 class='text-success mt-3 mb-2'>Email Sent Successfully</h5>";
              } else {
                document.getElementById("message").innerHTML =
                  "<h5 class='text-danger mt-3 mb-2'>There is an error</h5>";
              }
              $("#message").show("slow");
              $("#message").slideDown("slow");
              setTimeout(function () {
                $("#message").slideUp("hide");
                $("#message").hide("slow");
              }, 3000);
            },
          });
        } else {
          return false;
        }
      });
    },
    VideoPlayer: function () {
      if ($("#video").length) {
        var path = $('#video').data('img')
        $("#video").aksVideoPlayer({
          file: [
              {
              file: "assets/media/video/movie-video.mp4",
              label: "1080p"
              },
              {
              file: "assets/media/video/movie-video.mp4",
              label: "720p"
              },
              {
              file: "assets/media/video/movie-video.mp4",
              label: "540p"
              },
              {
              file: "assets/media/video/movie-video.mp4",
              label: "360p"
              },
              {
              file: "assets/media/video/movie-video.mp4",
              label: "240p"
              }
          ],
          poster: path,
          forward: true,
        });
      }
    },
    videoPlay:function(){
      $('#videoModal').on('hidden.bs.modal', function () {
        $('#videoModal video').get(0).pause();
      });
      $("#closeVideoModalButton").click(function() {
        $("#videoModal").modal("hide");
      });
    },
    continueEmail: function () {
      $('#continue-email').on('click',function(){
        $('.hide-link').hide()
        $('.login-sec').show()
      })
    },
    backToLogin: function () {
      $('#backtologin').on('click',function(){
        $('.hide-form').hide()
        $('.hide-link').show()
      })
    },
  };
  Init.i();
})(window, document, jQuery);
