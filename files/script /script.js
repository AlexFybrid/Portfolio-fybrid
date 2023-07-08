const swup = new Swup({
  plugins: [new SwupPreloadPlugin()]
});

var homeanim = null;
var mobile = null;
var mobileSC = null;
var mobileRotate = false;


function mobileCheck() {
  var userAgent = navigator.userAgent;
  var isMobile = /Mobi/i.test(userAgent);
  if (isMobile) {
    mobile = true;
    if (mobile === true) {
      $('body').addClass("body_mob")
    }
    swup.on('contentReplaced', function () {
      window.scrollTo(0, 0);
      if ($('#page').hasClass('page1')) {
        setTimeout(() => {
          mobileAnim();
        }, 200)
      }
    });
  } else {
    mobile = false;
    mobileSC = true;
    if (window.innerWidth <= 1024) {
      mobile = true;
      swup.on('contentReplaced', function () {
        window.scrollTo(0, 0);
        if ($('#page').hasClass('page1')) {
          setTimeout(() => {
            mobileAnim();
          }, 200)
        }

      });
      $('body').addClass("body_mob")
      $('.ny_1').addClass("notify_on")
      setTimeout(() => {
        $('.ny_2').addClass("notify_on")
  
    }, 6000);
    } 
  }
}

mobileCheck();

let scroll = null; 

function initScroll(direction) {
  let multiplier = 2;
  if (direction === 'horizontal') {
    multiplier = 3.5; 
  }
  if (direction === 'vertical') {
    multiplier = 1.8;
  }
  if (scroll) {
    scroll.destroy(); 
  }
  scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    direction: direction,
    smooth: true,
    multiplier: multiplier,
    damping: 1,
    
  });
}
function changeToVerticalScroll() {
  initScroll('vertical');
}
function changeToHorizontalScroll() {
  initScroll('horizontal');
}


function PageCheck() {
  $(document).ready(function () {
    RotateDevise()
    if ($('#page').hasClass('page1')) {
      if ($('.select_nav').hasClass('select_about')){
        $('.select_nav').removeClass('select_about')
      }
      if (homeanim === true) {
        $('.scroll_box').addClass("scroll_box_anim")
      }
      PageHomeScript();
    }
    if ($('#page').hasClass('pagework')) {
      Page2workScript();
    }
    if ($('#page').hasClass('pageabout')) {
      $('.select_nav').addClass('select_about')
      AboutScript();
    }
  })
}

function swupActiveLinks() {

}
function preload() {
  document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('preloader');
    const progressBar = document.querySelector('.progresss');
    const queue = new createjs.LoadQueue();
    preloader.style.backgroundColor = '#1c1c1c';
    queue.addEventListener('progress', function (event) {
      const progressPercentage = Math.floor(event.progress * 100);
      progressBar.style.width = progressPercentage + '%';
    });
    queue.loadManifest([
      { id: 'img_main_1', src: 'img/red_friesa.jpg' },
      { id: 'img_main_2', src: 'img/aston_martin_main.jpg' },
      { id: 'img_main_3', src: 'img/Landing_Memoj.jpg' },
      { id: 'img_main_4', src: 'img/Landing_org.jpg' },
      { id: 'img_main_5', src: 'img/Model_main.jpg' },
      { id: 'img_main_6', src: 'img/senator_main.jpg' },
      { id: 'img_main_7', src: 'img/Fs_home.jpg' },
      { id: 'img_main_8', src: 'img/rialust_main.jpg' },
      { id: 'img_main_9', src: 'img/ekfood_main.jpg' },
      { id: 'img_main_10', src: 'img/dr.doogy.jpg' },
      { id: 'big_as_1', src: 'img/as_img_2.jpg' },
      { id: 'big_as_2', src: 'img/as_img_3.jpg' },
      { id: 'big_as_3', src: 'img/as_img_4.jpg' },
      { id: 'big_memo', src: 'img/memo_img.jpg' },
      { id: 'big_org', src: 'img/org_img_full.jpg' },
      { id: 'img_back_main', src: 'img/model.kiev_1.jpg' },
      { id: 'cursera1', src: 'img/cursera_1.jpg' },
      { id: 'cursera2', src: 'img/cursera_2.jpg' },
      { id: 'memo_me', src: 'img/memoji_me.png' },

    ]);
    queue.addEventListener('complete', function () {

      setTimeout(() => {
        preloader.style.display = 'none';
      }, 1000)
      preloader.style.opacity = '0';
      if ($('#page').hasClass('page1')) {
          setTimeout(() => {
          if (mobile === true) {
            mobileAnim();
           } else {
             animStart();
          }
        }, 1000);
      }
    });
  });

}

function mobileAnim() {
    if (homeanim === null) {

      $('.anim-pic').each(function (index) {
        var $strip = $(this);
        setTimeout(function () {
          $strip.addClass('anim-pic-anim');
        }, index * 100);
      });

      homeanim = true;
    } else {

      $('.anim-pic').addClass('anim-pic_on');
    }
}
function animStart() {
  $('.scroll_imgbox_one').addClass('scroll_imgbox_full');



  setTimeout(() => {
    setTimeout(() => {
      $('.g_home').css("transform", "scale(1)")
    }, 2200)

    $('.grid_main_2_1').css("transform", "translate3d(0,-5%, 0)")
    $('.grid-item_2').css("transform", "translate3d(0, 0%, 0)")
    $('.grid_main_2_3').css("transform", "translate3d(0, 5%, 0)")

    setTimeout(() => {
      scroll_home();
    }, 4150)

  }, 900)

  setTimeout(() => {
    $('.gb_img').each(function (index) {
      var $strip = $(this);
      setTimeout(function () {
        $strip.addClass('animate_2');
      }, index * 70);
    });
    if ($('.scroll_imgbox').hasClass('scroll_imgbox_full')) {
      $('.strip1').addClass("strip_active")
    }
  }, 5750)
  homeanim = true;

  function scroll_home() {
    $('.grid_img_main').addClass("grid-item_img_main")
    $('.info_gradient').css("opacity", "1")
    $('.scroll_box').css("opacity", "1")
    setTimeout(() => {
      $('.g_back').remove()
      // $('.strip_1').remove()
    }, 750)
  }
}
function RotateDevise() {
  if (mobile === true) {
    if (mobileRotate === false) {      
      $(window).on('load resize', function () {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        
        if (windowWidth <= 736 && windowHeight <= 414) {
          $('body').addClass('body_off');
          $('.rotate_box').on('mouseup', function () {
            $('.rotate_box').css("display", "none")
            $('body').removeClass('body_off');
            mobileRotate = true;
          })
        }
      });
    }
   }
}

function reloadResize() {
  if (mobileSC === true) {
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (window.innerWidth <= 1024) {
          location.reload();
        }
      }, 100);
    });
  }
}

PageCheck();
swupActiveLinks();
preload()
reloadResize()

swup.on('contentReplaced', () => { 
  swupActiveLinks();
  PageCheck();
  reloadResize()
  if (mobile === true) {
    
  }
});


function PageHomeScript() {
  mobileCk();
  function mobileCk() {    
    if (mobile === true) { 
      $('.g_black').remove();
      $('body').addClass("body_mob")
      $('.g_mobile').addClass("g_mob_on")
      $('nav').css("transform","translateX(20vw)")
      
      swup.on('contentReplaced', function () {
      
        $('w-1').css("transform", "scale(100%)")
        if ($('#page').hasClass('page1')) {
            mobileAnim();
        }

      });



        var shouldMoveNav = true; // Флаг для проверки состояния
      function movenav() {
          window.addEventListener('scroll', function () {
            if (!shouldMoveNav) return; // Проверка флага перед выполнением кода

            var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;

            if (scrollPercentage >= 3) {
              $('nav').css("transform", "translateX(20vw)");
            }
            if (scrollPercentage >= 10) {
              $('nav').css("transform", "translateX(0vw)");
            }
          });
        }
      setTimeout(() => {
        movenav();
      },700)



      swup.on('willReplaceContent', function () {
        shouldMoveNav = false; // Установка флага в false при событии
        $('nav').css("transform", "translateX(0vw)");
        // window.scroll({ top: 0, });


      });



    } else {
      $('.g_mobile').remove();
      HomeScript(); 
    }
  }
  function HomeScript() {
    changeToHorizontalScroll()
  

    function animationPage1() {
      if (homeanim === true) {
        $('.scroll_box').removeClass("scroll_box_anim")

        $('.g_back').remove()
        $('.strip_1').remove()

        $('.grid_img_main').addClass("grid-item_img_main")
        $('.info_gradient').css("opacity", "1")
        $('.scroll_box').css("opacity", "1")

        if (!$('.gb_img').hasClass('animate_2')) {
          $('.gb_img').each(function (index) {
            var $strip = $(this);
            setTimeout(function () {
              $strip.addClass('animate_2');
            }, index * 70);
          });
        }

        // activebar()
      } else {
        animStart();
      }


    }
    animationPage1();

    $(document).ready(function () {





      $('.scroll_imgbox').on('mouseup', function () {
        const target2 = $(this).data('id');
        if (!$('.scroll_imgbox').hasClass('scroll_imgbox_full')) {

          $(this).addClass('scroll_imgbo_click');
          
          var timeoutIds;
          var timeoutIds2;
          clearTimeout(timeoutIds);
          clearTimeout(timeoutIds2);

          
          timeoutIds2 = setTimeout(() => {
            $(".scroll_imgbox").removeClass('scroll_imgbox_full');
            $('.strip').removeClass('strip_active');
            $(this).addClass('scroll_imgbox_full');
          }, 500)


          timeoutIds = setTimeout(() => {
            if ($('.scroll_imgbox').hasClass('scroll_imgbox_full')) {
              $(`.${target2}`).addClass("strip_active");
            }
          }, 650);




        }
        scroll.scrollTo(this, {
          duration: 350,

        });
      });

      function GridClick(){
        $('.grid_bar').on('mouseup', '.gb_img_1, .gb_img_2, .gb_img_3, .gb_img_4, .gb_img_5, .gb_img_6, .gb_img_7, .gb_img_8, .gb_img_9, .gb_img_10', function () {
         
          $(this).addClass('scroll_imgbo_click');

          if ($(this).hasClass('scroll_imgbo_click')) {
              setTimeout(() => {
              $(this).removeClass('scroll_imgbo_click');
              }, 350);
          }
          if ($('.scroll_imgbox').hasClass('scroll_imgbox_full')) {
            $(".scroll_imgbox").removeClass('scroll_imgbox_full');
            $('.strip').removeClass("strip_active")
          }

          const target2 = $(this).data('id');
          
          const targetId = $(this).data('target');          
          scroll.scrollTo(`#${targetId}`, {
            duration: 350,
            easing: [.65, .02, 0.23, 1]
          });

          var timeoutIds;
          var timeoutIds2;
          clearTimeout(timeoutIds);
          clearTimeout(timeoutIds2);

          timeoutIds = setTimeout(() => {
            $(".scroll_imgbox").removeClass('scroll_imgbox_full');
            $('.strip').removeClass('strip_active');
           $(`#${targetId}`).addClass('scroll_imgbox_full');
          }, 990)
         timeoutIds2 =  setTimeout(() => {
            if ($('.scroll_imgbox').hasClass('scroll_imgbox_full')) {
              $(`.${target2}`).addClass("strip_active");

            }
          }, 1090);
        });
      }
      GridClick();


      setTimeout(() => {

        function FullimgOff() {
          if ($('.scroll_imgbox').hasClass('scroll_imgbox_full')) {
            $(".scroll_imgbox").removeClass('scroll_imgbo_click');
            $(".scroll_imgbox").removeClass('scroll_imgbox_full');
            $('.strip').removeClass("strip_active")
          }
        }
        window.addEventListener('resize', function () { FullimgOff() })
        $(window).on('wheel', FullimgOff);

        document.addEventListener("keydown", function (event) {
          if (event.keyCode === 32) {
            FullimgOff();
          }
        });



      }, 6000);

    })




 



    
  }
};
Page2workScript = function () {
    
  $(document).ready(function () {


    if (mobile === true) {

      $('.main_next_mob').css('display', 'block')
      $('.main_next').css('display', 'none')

      Video = function () {
        $(document).ready(function () {
          var video = $('#my-video')[0];
          var progressPath = $('.progress-wrap svg path');
          const progressPath2 = document.querySelector('.progress-wrap');
          const pwrap = document.querySelector('.progress-wrap ');

          var pathLength = progressPath[0].getTotalLength();
          progressPath.css('stroke-dasharray', pathLength + ' ' + pathLength);
          progressPath.css('stroke-dashoffset', pathLength);
          progressPath.css('transition', '0.5s');
          video.addEventListener('timeupdate', function () {
            var progress = video.currentTime / video.duration;
            progressPath.css('stroke-dashoffset', pathLength * (1 - progress));
          });
          pwrap.addEventListener("click", function () {
            $(".progress-wrap").addClass("pause");
            $(".progress-wrap").addClass("clck_anim");

            if (progressPath2.classList.contains("clck_anim")) {
              setTimeout(() => {
                $(".progress-wrap").removeClass("clck_anim");
              }, 450);
            };

            if (video.paused) {
              video.play();
              $(".playButton__icon").addClass("icon_target");
              $(".progress-wrap").removeClass("pause");

              progressPath.parent().addClass('active');
            } else {
              video.pause();
              progressPath.parent().removeClass('active');
              $(".playButton__icon").removeClass("icon_target")



            }
          })
        });
      }
      $('.last_img').each(function () {
        const imgbox = document.querySelector('.imgbox');
        const video = document.getElementById("my-video");
        function LoadVideo() {
          setTimeout(() => {
            imgbox.style.opacity = '0';
            video.play();
            $(".progress-wrap").addClass("playbt_on");
            $("#img_back_main").remove();
            $('.descrip').css('opacity', '1');
          }, 2500)

          Video();
        }

        if (video) {
          video.addEventListener("loadeddata", LoadVideo);

        }
      });


      // swup.on('contentReplaced', function () {
      //   alert('hey')
      //   window.scrollTo(0, 0);

      // });

    } else {


      changeToVerticalScroll()



      $('.main_next_mob').css('display', 'none')
      $('.main_next').css('display', 'block')
      nextAnim();
      


      var lastImage = document.querySelector('.last_img');
      lastImage.addEventListener('load', function () {
        scroll.update();
      });



      
      function nextAnim() {
        scroll.on('scroll', (obj) => {
          const video = document.getElementById("my-video");

          const progressPath = document.querySelector('.progress-wrap');
          const scrollPercentage = obj.scroll.y / obj.limit.y;
          if (video) {

            if (scrollPercentage >= 0 && scrollPercentage < 0.000000001) {
              if (!progressPath.classList.contains("pause")) {
                setTimeout(() => {
                  video.play();
                  $(".playButton__icon").addClass("icon_target");
                }, 200)
              }
            } else {
              video.pause();
              $(".playButton__icon").removeClass("icon_target")
            }

          }

          const image = document.querySelector('.scroll-image');
          const imagenext = document.querySelector('.last_img');
          const imageback = document.querySelector('.last_box_info');
          const percentage = document.querySelector('.percentage');
          const nextText = document.querySelector('.next_text');
          const progresslines = document.querySelector('.progress_line');
          const progresslinesbox = document.querySelector('.progress_line_box');
          if (scrollPercentage >= 0.84) {
            $('.last_img').css('transform', 'scale(105%)')
          }
          if (scrollPercentage >= 0.85) {
            image.style.transform = 'scale(90%)';


            if (scrollPercentage >= 0.70) {
              const progress = (scrollPercentage - 0.85) * 665;
              $('.last_img').css('transform', 'scale(100%)')
              imageback.style.opacity = '1';
              imagenext.style.opacity = '0.9';
              progresslines.style.width = `${progress * 2}px`;
              percentage.textContent = `${Math.round(progress)}%`;
              percentage.style.opacity = `1`;
              progresslinesbox.style.opacity = '1';
              nextText.style.opacity = '1';
              nextText.style.top = '48%';
              percentage.style.top = '52%';



            }
            if (scrollPercentage >= 0.9995) {
              scroll.stop();
            }
            if (scrollPercentage >= 1) {
              image.style.transform = 'scale(120%)';
              $('.last_img').css('transform', 'scale(105%)')

              if ($('#page').hasClass('page3')) {
                swup.loadPage({
                  url: 'index4.html'
                })
              }
              if ($('#page').hasClass('page4')) {
                swup.loadPage({
                  url: 'index5.html'
                })
              }
              if ($('#page').hasClass('page5')) {
                swup.loadPage({
                  url: 'index6.html'
                })
              }
              if ($('#page').hasClass('page6')) {
                swup.loadPage({
                  url: 'index7.html'
                })
              }
              if ($('#page').hasClass('page7')) {
                swup.loadPage({
                  url: 'index8.html'
                })
              }
              if ($('#page').hasClass('page8')) {
                swup.loadPage({
                  url: 'index9.html'
                })
              }
              if ($('#page').hasClass('page9')) {
                swup.loadPage({
                  url: 'index10.html'
                })
              }
              if ($('#page').hasClass('page10')) {
                swup.loadPage({
                  url: 'index11.html'
                })
              }
              if ($('#page').hasClass('page11')) {
                swup.loadPage({
                  url: 'index12.html'
                })
              }
              if ($('#page').hasClass('page12')) {
                swup.loadPage({
                  url: 'index2.html'
                })
              }
            }
          } else {
            nextText.style.opacity = '0';
            image.style.borderWidth = '0';
            percentage.textContent = '0%';
            percentage.style.opacity = `0`;
            nextText.style.top = '50%';
            percentage.style.top = '50%';
            progresslines.style.width = '0px';
            progresslinesbox.style.opacity = '0';
            imagenext.style.opacity = '1';
            image.style.transform = 'scale(100%)';
            imageback.style.opacity = '0';


          }

        });
      }
      Video = function () {
        $(document).ready(function () {
          var video = $('#my-video')[0];
          var progressPath = $('.progress-wrap svg path');
          const progressPath2 = document.querySelector('.progress-wrap');
          const pwrap = document.querySelector('.progress-wrap ');

          var pathLength = progressPath[0].getTotalLength();
          progressPath.css('stroke-dasharray', pathLength + ' ' + pathLength);
          progressPath.css('stroke-dashoffset', pathLength);
          progressPath.css('transition', '0.5s');
          video.addEventListener('timeupdate', function () {
            var progress = video.currentTime / video.duration;
            progressPath.css('stroke-dashoffset', pathLength * (1 - progress));
          });
          pwrap.addEventListener("click", function () {
            $(".progress-wrap").addClass("pause");
            $(".progress-wrap").addClass("clck_anim");

            if (progressPath2.classList.contains("clck_anim")) {
              setTimeout(() => {
                $(".progress-wrap").removeClass("clck_anim");
              }, 450);
            };

            if (video.paused) {
              video.play();
              $(".playButton__icon").addClass("icon_target");
              $(".progress-wrap").removeClass("pause");

              progressPath.parent().addClass('active');
            } else {
              video.pause();
              progressPath.parent().removeClass('active');
              $(".playButton__icon").removeClass("icon_target")



            }
          })
        });


      }
      $('.last_img').each(function () {
        const imgbox = document.querySelector('.imgbox');
        const video = document.getElementById("my-video");


        function LoadVideo() {
          setTimeout(() => {
            imgbox.style.opacity = '0';
            video.play();
            $(".progress-wrap").addClass("playbt_on");
            $("#img_back_main").remove();
            $('.descrip').css('opacity', '1');
          }, 2500)
          scroll.update();

          Video();
        }

        if (video) {
          video.addEventListener("loadeddata", LoadVideo);

        }
        else {
          $('.last_img').each(function () {
            $(this).on('load', function () {
              scroll.update();
            })
          })

        }



      });
    }

    });
  



}
function AboutScript() {

  if (mobile === true) {
    $('.left_box_bar').css('display','none')
  } else {

    changeToVerticalScroll();

    var lastImage = document.getElementById('memo_me');
    lastImage.addEventListener('load', function () {
      scroll.update();
    });

    function tiltInt() {
      VanillaTilt.init(document.querySelectorAll(".tildcard"));
    }
     
    function miniPrew() {    
      scroll.on('scroll', (instance) => {
        const scrollPosition = instance.scroll.y;
        const windowHeight = $(window).height();
        const contentHeight = $('.content').height();
        const textMinBarHeightPx = $('.text_min_bar').height();
    
    
        const maxScrollPosition = contentHeight - windowHeight;
    
        const cubePosition = (scrollPosition / maxScrollPosition) * (windowHeight - (0.72 * windowHeight));
    
        const cubePosition2 = (scrollPosition / maxScrollPosition) * (windowHeight - (0.40 * windowHeight));
    
        $('.box_back').css('transform', `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${cubePosition}, 0, 1)`);
        $('.text_min_bar').css('transform', `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -${cubePosition2}, 0, 1)`);
      });
    }
    miniPrew();  
    tiltInt();
  
  }



}






