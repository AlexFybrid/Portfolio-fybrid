const swup = new Swup({
  plugins: [new SwupPreloadPlugin()]
});

var homeanim = null;
var mobile = null;
var mobileSC = null;
var mobileRotate = false;
var loadVideoT;



function mobileCheck() {
  var userAgent = navigator.userAgent;
  var isMobile = /Mobi/i.test(userAgent);
  if (isMobile) {
    mobile = true;
    if (mobile === true) {
      $('body').addClass("body_mob")
    }
  } else {
    changeToOnScroll();
    mobile = false;
    mobileSC = true;
    if (window.innerWidth <= 1024) {
      mobile = true;
      $('body').addClass("body_mob")
      $('.ny_1').addClass("notify_on")
      setTimeout(() => {
        $('.ny_2').addClass("notify_on")
  
    }, 6000);
    } 
  }
}

let scroll = null;

function initScroll(direction) {
  let multiplier = 1.5;
  if (scroll) {
    scroll.destroy();
  }
  if (direction === 'on') {
    scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      direction: 'vertical',
      multiplier: multiplier,
      damping: 0
    });
  }
}

function changeToOnScroll() {
  initScroll('on');
}

function changeToOffScroll() {
  initScroll('off');
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
      { id: 'img_main_5', src: 'img/model_post_5.jpg' },
      { id: 'img_main_6', src: 'img/senator_main.jpg' },
      { id: 'img_main_7', src: 'img/Fs_home.jpg' },
      { id: 'img_main_8', src: 'img/rialust_main.jpg' },
      { id: 'img_main_9', src: 'img/ekfood_main.jpg' },
      { id: 'img_main_10', src: 'img/dr.doogy.jpg' },

      //About >
      { id: 'cursera1', src: 'img/cursera_1.jpg' },
      { id: 'cursera2', src: 'img/cursera_2.jpg' },
      { id: 'memo_me', src: 'img/memoji_me.png' },

      //Friesa >
      { id: 'img_back_main_FR', src: 'img/Back_2.jpg' },
      { id: 'img_back_FR_2', src: 'img/Back_3.jpg' },
      { id: 'img_back_FR_3', src: 'img/Back_5.jpg' },
      { id: 'img_back_FR_4', src: 'img/Back_5.5.jpg' },
      { id: 'img_back_FR_5', src: 'img/Back_5.6.jpg' },
      { id: 'img_back_FR_6', src: 'img/Back_4.jpg' },
      { id: 'img_back_FR_7', src: 'img/Friesa_reg.jpg' },
      { id: 'img_back_FR_8', src: 'img/Friesa_phones.jpg' },
      { id: 'img_back_FR_9', src: 'img/Friesa_Mac`s.jpg' },

      //Aston >
      { id: 'img_back_main_AS', src: 'img/Back_Aston.jpg' },
      { id: 'img_back_AS_2', src: 'img/Aston_main.jpg' },
      { id: 'img_back_AS_3', src: 'img/aston_post_5.jpg' },
      { id: 'img_back_AS_4', src: 'img/aston_macbook.png' },
      { id: 'img_back_AS_5', src: 'img/aston_post_6.jpg' },
      { id: 'img_back_AS_6', src: 'img/Aston_mac.jpg' },

      //Memoji >
      { id: 'img_back_main_MJ', src: 'img/Back_memoji.jpg' },
      { id: 'img_back_MJ_2', src: 'img/memoji_main.jpg' },
      { id: 'img_back_MJ_3', src: 'img/memo_img.jpg' },
      { id: 'img_back_MJ_4', src: 'img/memoji_macbook.png' },
      { id: 'img_back_MJ_5', src: 'img/memoji_imac.jpg' },

      //Org >
      { id: 'img_back_main_ORG', src: 'img/Landing_org_2.jpg' },
      { id: 'img_back_ORG_2', src: 'img/Landing_org_3.jpg' },
      { id: 'img_back_ORG_3', src: 'img/Orange_ver.jpg' },
      { id: 'img_back_ORG_4', src: 'img/orange_macbook.png' },
      { id: 'img_back_ORG_5', src: 'img/orange_imac.jpg' },

      //Model >
      { id: 'img_back_main_MD', src: 'img/model_post_5.jpg' },
      { id: 'img_back_MG_2', src: 'img/model.kiev_2.jpg' },
      { id: 'img_back_MG_3', src: 'img/model_post_7.jpg' },
      { id: 'img_back_MG_4', src: 'img/model_post_9.jpg' },
      { id: 'img_back_MG_5', src: 'img/model_imac.jpg' },

      //Senator >
      { id: 'img_back_main_SN', src: 'img/senator_home.jpg' },
      { id: 'img_back_SN_2', src: 'img/senator_post.jpg' },
      { id: 'img_back_SN_3', src: 'img/senator_ver.jpg' },
      { id: 'img_back_SN_4', src: 'img/senator_macbook.png' },
      { id: 'img_back_SN_5', src: 'img/senator_imac.jpg' },

      //FS >
      { id: 'img_back_main_FS', src: 'img/fybridS_main.jpg' },
      { id: 'img_back_FS_2', src: 'img/iphone_fs_2.jpg' },
      { id: 'img_back_FS_3', src: 'img/fybrid_macbook.png' },
      { id: 'img_back_FS_4', src: 'img/fybrid_imac.jpg' },
      { id: 'img_back_FS_5', src: 'img/fybrid_ipad.jpg' },
      { id: 'img_back_FS_6', src: 'img/fybrid_mobile.jpg' },

      //RIAL >
      { id: 'img_back_main_RL', src: 'img/rialust_main_2.jpg' },
      { id: 'img_back_RL_2', src: 'img/rial_mac_one.jpg' },
      { id: 'img_back_RL_3', src: 'img/rial_ver.jpg' },
      { id: 'img_back_RL_4', src: 'img/rial_macbook.png' },
      { id: 'img_back_RL_5', src: 'img/rial_imac.jpg' },
      { id: 'img_back_RL_6', src: 'img/rialust_ipad.jpg' },
      { id: 'img_back_RL_7', src: 'img/rial_iphones.jpg' },

      //EK
      { id: 'img_back_main_EK', src: 'img/ekfood_main_2.jpg' },
      { id: 'img_back_EK_2', src: 'img/ekfood_main_3.jpg' },
      { id: 'img_back_EK_3', src: 'img/ekfood_ver.jpg' },
      { id: 'img_back_EK_4', src: 'img/ekfood_ver_2.jpg' },
      { id: 'img_back_EK_5', src: 'img/ekfood_macbook.png' },
      { id: 'img_back_EK_6', src: 'img/ekfood_imac.jpg' },
      { id: 'img_back_EK_7', src: 'img/ekfood_main_5.jpg' },

      //DR
      { id: 'img_back_main_DR', src: 'img/drdoogy_main_2.jpg' },
      { id: 'img_back_DR_2', src: 'img/drdoogy_main_3.jpg' },
      { id: 'img_back_DR_3', src: 'img/drdoogy_ver.jpg' },
      { id: 'img_back_DR_4', src: 'img/drdoogy_macbook.png' },
      { id: 'img_back_DR_5', src: 'img/drdoogy_imac.jpg' },
      { id: 'img_back_DR_6', src: 'img/drdoogy_main_4.jpg' },






    ]);
    queue.addEventListener('complete', function () {

      setTimeout(() => {
        preloader.style.display = 'none';
      }, 1000)
      preloader.style.opacity = '0';
      if ($('#page').hasClass('page1')) {
          setTimeout(() => {
            mobileAnim();
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
function waitForImagesLoaded(callback) {
  var images = document.getElementsByTagName('img');
  var totalImages = images.length;
  var loadedImages = 0;

  function imageLoaded() {
    loadedImages++;
    if (loadedImages === totalImages) {
      callback();
    }
  }

  for (var i = 0; i < totalImages; i++) {
    if (images[i].complete) {
      imageLoaded();
    } else {
      images[i].addEventListener('load', imageLoaded);
    }
  }
}

mobileCheck();

PageCheck();
preload()
reloadResize()

swup.on('contentReplaced', () => { 
  if ($('#page').hasClass('page1')) {
    mobileAnim();
  }
  clearTimeout(loadVideoT);
  if (mobile === true) {
    window.scrollTo(0, 0);
    $('nav').css("transform", "translateX(0vw)");
    PageCheck();
    reloadResize()
  } else {
    changeToOffScroll();
  }
});


swup.on('animationInStart', function () {
  if (mobile === false) {
    waitForImagesLoaded(function () {
        changeToOnScroll();
        PageCheck();
    });
  }
});

swup.on('popState', function () {
  setTimeout(() => {
    waitForImagesLoaded(function () {
      changeToOnScroll();
        PageCheck();
    });
  }, 50);

});






function PageHomeScript() {
  mobileCk();
  function mobileCk() {    
    if (mobile === true) { 
      $('body').addClass("body_mob")
      $('nav').css("transform","translateX(20vw)")
      
      swup.on('contentReplaced', function () {
      
        $('w-1').css("transform", "scale(100%)")
        if ($('#page').hasClass('page1')) {
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



    }
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

      // $('.last_img').each(function () {
      //   $(this).on('load', function () {

          $('.main_next_mob').css('display', 'none')
          $('.main_next').css('display', 'block')
          nextAnim();
    
    
          const imgbox = document.querySelector('.imgbox');
          const video = document.getElementById("my-video");
    
    
      function LoadVideo() {
            
        loadVideoT = setTimeout(() => {
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
                  image.style.transform = 'scale(100%)';
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

      //   })
      // })





      
      
      
      



      

    }

    });
  



}
function AboutScript() {

  if (mobile === true) {
    $('.left_box_bar').css('display','none')
  } else {


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






