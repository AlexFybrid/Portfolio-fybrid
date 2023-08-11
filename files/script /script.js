// Var >
var homeanim = null;
var mobile = null;
var mobilePC = null
var mobileRotate = false;
var loadVideoT;



  //Swup transition >
  
// const swup = new Swup({
//   plugins: [new SwupPreloadPlugin()]

// });

const swup = new Swup({
  plugins: [new SwupOverlayTheme()]
});

import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js';
const nothing = ''

const backEasing = {
  out: 'cubic-bezier(.48, 1.33, .67, 1.06)',
  in: 'ease',

}
const lightbox = new PhotoSwipeLightbox({
  arrowPrevSVG: nothing,
  arrowNextSVG: nothing,
  closeSVG: nothing,
  zoomSVG: nothing,
  padding: { top: 50, bottom: 50, left: 50, right: 50 },
  mouseMovePan: false,
  secondaryZoomLevel: 0.6,
  imageClickAction: 'close',
  showAnimationDuration: 250,
  hideAnimationDuration: 200,
  // may select multiple "galleries"
  gallery: '#gallery-img',
  children: 'a',
  pswpModule: () => import('./photoswipe.esm.min.js')
});
lightbox.on('firstUpdate', () => {
  lightbox.pswp.options.easing = backEasing.out;
});
lightbox.on('close', () => {
  lightbox.pswp.options.easing = backEasing.in;
});





//Performance >
function preload() {
  document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('preloader');
    const progressBar = document.querySelector('.progresss');
    const queue = new createjs.LoadQueue();
    $('.backgraund_bar_box').css('background-color','#1c1c1c')


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

      // //About >
      // { id: 'cursera1', src: 'img/cursera_1.jpg' },
      // { id: 'cursera2', src: 'img/cursera_2.jpg' },
      // { id: 'memo_me', src: 'img/memoji_me.png' },

      // //Friesa >
      // { id: 'img_back_main_FR', src: 'img/Back_2.jpg' },
      // { id: 'img_back_FR_2', src: 'img/Back_3.jpg' },
      // { id: 'img_back_FR_3', src: 'img/Back_5.jpg' },
      // { id: 'img_back_FR_4', src: 'img/Back_5.5.jpg' },
      // { id: 'img_back_FR_5', src: 'img/Back_5.6.jpg' },
      // { id: 'img_back_FR_6', src: 'img/Back_4.jpg' },
      // { id: 'img_back_FR_7', src: 'img/Friesa_reg.jpg' },
      // { id: 'img_back_FR_8', src: 'img/Friesa_phones.jpg' },
      // { id: 'img_back_FR_9', src: 'img/Friesa_Mac`s.jpg' },

      // //Aston >
      // { id: 'img_back_main_AS', src: 'img/Back_Aston.jpg' },
      // { id: 'img_back_AS_2', src: 'img/Aston_main.jpg' },
      // { id: 'img_back_AS_3', src: 'img/aston_post_5.jpg' },
      // { id: 'img_back_AS_4', src: 'img/aston_macbook.png' },
      // { id: 'img_back_AS_5', src: 'img/aston_post_6.jpg' },
      // { id: 'img_back_AS_6', src: 'img/Aston_mac.jpg' },

      // //Memoji >
      // { id: 'img_back_main_MJ', src: 'img/Back_memoji.jpg' },
      // { id: 'img_back_MJ_2', src: 'img/memoji_main.jpg' },
      // { id: 'img_back_MJ_3', src: 'img/memo_img.jpg' },
      // { id: 'img_back_MJ_4', src: 'img/memoji_macbook.png' },
      // { id: 'img_back_MJ_5', src: 'img/memoji_imac.jpg' },

      // //Org >
      // { id: 'img_back_main_ORG', src: 'img/Landing_org_2.jpg' },
      // { id: 'img_back_ORG_2', src: 'img/Landing_org_3.jpg' },
      // { id: 'img_back_ORG_3', src: 'img/Orange_ver.jpg' },
      // { id: 'img_back_ORG_4', src: 'img/orange_macbook.png' },
      // { id: 'img_back_ORG_5', src: 'img/orange_imac.jpg' },

      // //Model >
      // { id: 'img_back_main_MD', src: 'img/model_post_5.jpg' },
      // { id: 'img_back_MG_2', src: 'img/model.kiev_2.jpg' },
      // { id: 'img_back_MG_3', src: 'img/model_post_7.jpg' },
      // { id: 'img_back_MG_4', src: 'img/model_post_9.jpg' },
      // { id: 'img_back_MG_5', src: 'img/model_imac.jpg' },

      // //Senator >
      // { id: 'img_back_main_SN', src: 'img/senator_home.jpg' },
      // { id: 'img_back_SN_2', src: 'img/senator_post.jpg' },
      // { id: 'img_back_SN_3', src: 'img/senator_ver.jpg' },
      // { id: 'img_back_SN_4', src: 'img/senator_macbook.png' },
      // { id: 'img_back_SN_5', src: 'img/senator_imac.jpg' },

      // //FS >
      // { id: 'img_back_main_FS', src: 'img/fybridS_main.jpg' },
      // { id: 'img_back_FS_2', src: 'img/iphone_fs_2.jpg' },
      // { id: 'img_back_FS_3', src: 'img/fybrid_macbook.png' },
      // { id: 'img_back_FS_4', src: 'img/fybrid_imac.jpg' },
      // { id: 'img_back_FS_5', src: 'img/fybrid_ipad.jpg' },
      // { id: 'img_back_FS_6', src: 'img/fybrid_mobile.jpg' },

      // //RIAL >
      // { id: 'img_back_main_RL', src: 'img/rialust_main_2.jpg' },
      // { id: 'img_back_RL_2', src: 'img/rial_mac_one.jpg' },
      // { id: 'img_back_RL_3', src: 'img/rial_ver.jpg' },
      // { id: 'img_back_RL_4', src: 'img/rial_macbook.png' },
      // { id: 'img_back_RL_5', src: 'img/rial_imac.jpg' },
      // { id: 'img_back_RL_6', src: 'img/rialust_ipad.jpg' },
      // { id: 'img_back_RL_7', src: 'img/rial_iphones.jpg' },

      // //EK
      // { id: 'img_back_main_EK', src: 'img/ekfood_main_2.jpg' },
      // { id: 'img_back_EK_2', src: 'img/ekfood_main_3.jpg' },
      // { id: 'img_back_EK_3', src: 'img/ekfood_ver.jpg' },
      // { id: 'img_back_EK_4', src: 'img/ekfood_ver_2.jpg' },
      // { id: 'img_back_EK_5', src: 'img/ekfood_macbook.png' },
      // { id: 'img_back_EK_6', src: 'img/ekfood_imac.jpg' },
      // { id: 'img_back_EK_7', src: 'img/ekfood_main_5.jpg' },

      // //DR
      // { id: 'img_back_main_DR', src: 'img/drdoogy_main_2.jpg' },
      // { id: 'img_back_DR_2', src: 'img/drdoogy_main_3.jpg' },
      // { id: 'img_back_DR_3', src: 'img/drdoogy_ver.jpg' },
      // { id: 'img_back_DR_4', src: 'img/drdoogy_macbook.png' },
      // { id: 'img_back_DR_5', src: 'img/drdoogy_imac.jpg' },
      // { id: 'img_back_DR_6', src: 'img/drdoogy_main_4.jpg' },






    ]);
    queue.addEventListener('complete', function () {

      setTimeout(() => {
        mobileCheck();

        preloader.style.display = 'none';
      }, 1500)
      $('.backgraund_bar_box').addClass('preload_anim_on')
      $('.progress-bar_box').css('opacity','0')
      if ($('#page').hasClass('page1')) {
          setTimeout(() => {
            mobileAnim();
        }, 1000);
      }
    });
  });

}

function mobileCheck() {
  var userAgent = navigator.userAgent;
  var isMobile = /Mobi/i.test(userAgent);
  if (isMobile) {
    mobile = true;
    if (mobile === true) {
      PageCheck();
    }
  } else {
      mobile = false;
      PageCheck();
  }
}








//Before Page Script >

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
      if ($('.select_nav').hasClass('select_about')) {
        $('.select_nav').removeClass('select_about')
      }
      Page2workScript();
    }
    if ($('#page').hasClass('pageabout')) {
      window.scrollTo(0, 0);

      if(mobile === false){
        $('.left_box_bar').removeClass('left_box_bar_on')
      }
      $('.select_nav').addClass('select_about')
      AboutScript();
    }
  })
}
function mobileAnim() {
  if (homeanim === null) {
    // $('.blur_obj').addClass('blur_start')
      $('.anim-pic').each(function (index) {
        var $strip = $(this);
        setTimeout(function () {
          $strip.addClass('anim-pic-anim');
        }, index * 100);
      });

      homeanim = true;
    } else {
    $('.blur_obj').css('opacity', '1')
    $('.anim-pic').css('opacity', '1')
    }
}
function RotateDevise() {
  if (mobile === true) {
    if (mobileRotate === false) {      
      $(window).on('load resize', function () {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        
        if (windowWidth <= 736 && windowHeight <= 414) {
          $('.rotate_box').on('mouseup', function () {
            $('.rotate_box').css("display", "none")
            mobileRotate = true;
          })
        }
      });
    }
   }
}
// function waitForImagesLoaded(callback) {
//   var images = document.getElementsByTagName('img');
//   var totalImages = images.length;
//   var loadedImages = 0;

//   function imageLoaded() {
//     loadedImages++;
//     if (loadedImages === totalImages) {
//       callback();
//     }
//   }

//   for (var i = 0; i < totalImages; i++) {
//     if (images[i].complete) {
//       imageLoaded();
//     } else {
//       images[i].addEventListener('load', imageLoaded);
//     }
//   }
// }
// waitForImagesLoaded(function () {
// });

preload()

swup.hooks.on('content:replace', () => { 
  if ($('#page').hasClass('page1')) {
    mobileAnim();
  }
  clearTimeout(loadVideoT);
    window.scrollTo(0, 0);
  if (mobile === true) {
    $('nav').css("transform", "translateX(0vw)");
  }
});

swup.hooks.on('animation:in:start', function () {
  PageCheck();
});

swup.hooks.on('history:popstate', () => {
  setTimeout(() => {
    PageCheck();





  }, 50);

});




//Page Script >

function PageHomeScript() {


  mobileCk();
  function mobileCk() {    
    if (mobile === true) { 
      $('body').addClass("body_mob")
      if (!mobilePC === true) {
        $('nav').css("transform","translateX(20vw)")
      }

      swup.hooks.on('content:replace', () => {
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
        if (!mobilePC === true) {
          movenav();
        }
      },700)



      swup.hooks.before('content:replace', () => {
        shouldMoveNav = false; // Установка флага в false при событии
        $('nav').css("transform", "translateX(0vw)");
        window.scrollTo(0, 0);



      });



    }
  }

};


function Page2workScript() {
  var videoClick = false;
  if (mobile === true) {
    $('#my-video').remove();
    lightbox.init();
  }
  imageZoom();  
  $(document).ready(function () {
    const video = document.getElementById("my-video");
    

    const progressPath = document.querySelector('.progress-wrap');
    
    

      $('.main_next_mob').css('display', 'block')
      $('.main_next').css('display', 'none')
    
    function Video() {
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
            videoClick = !videoClick;
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
    
    
        const imgbox = document.querySelector('.imgbox');
        
    function LoadVideo() {
      if (!mobile === true) {

        setTimeout(() => {
          window.addEventListener('scroll', function () {
            var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
              
            imgbox.style.opacity = '0';
            $(".progress-wrap").addClass("playbt_on");
            $("#img_back_main").remove();
            $('.descrip').css('opacity', '1');


            if (scrollPercentage >= -3 && scrollPercentage < 3) {
              if (videoClick === false) {
                if (!progressPath.classList.contains("pause")) {
                  video.play();
                  $(".playButton__icon").addClass("icon_target");

                }
              }
            } else {
              if (videoClick === false) {
                video.pause();
                $(".playButton__icon").removeClass("icon_target")
              }
            }

          });
        }, 2500)
        Video();
      }
        }
        
        
    if (video) {

      if (video.readyState === 4) {
        LoadVideo();
      } else {
        video.addEventListener("loadeddata", LoadVideo);
      }
  


        }



  });
              
  if ($('#page').hasClass('as')) {
    const horizontalScrollDiv = document.getElementById('scroll_container');
  
    horizontalScrollDiv.addEventListener('scroll', function () {
      $('.back_scroll_ico').addClass('icon-scroll_done')
    });
  }

}
function AboutScript() {

  if (mobile === true) {
    $('.con-on-mob').addClass('con-off-mob');
    $('.left_box_bar').css('display', 'none')
    $('.row_mob_ab').addClass('row_mob_ab_on');
    $('.about_text').addClass('row_mob_ab_on');
    $('.tildcard').addClass('tildcard_mobile')
    $('.me_memoji').addClass('me_memoji_mob')




  } else {

    function tiltInt() {
      VanillaTilt.init(document.querySelectorAll(".tildcard"));
    }
    let miniPrewEnabled = true;
    
    function miniPrew() {
      if (!miniPrewEnabled) return;
      window.onscroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const contentHeight = document.querySelector('.content').offsetHeight;
        const textMinBarHeightPx = document.querySelector('.text_min_bar').offsetHeight;

        const maxScrollPosition = contentHeight - windowHeight;

        const cubePosition = (scrollPosition / maxScrollPosition) * (windowHeight - (0.72 * windowHeight));

        const cubePosition2 = (scrollPosition / maxScrollPosition) * (windowHeight - (0.40 * windowHeight));

        document.querySelector('.box_back').style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${cubePosition}, 0, 1)`;
        document.querySelector('.text_min_bar').style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -${cubePosition2}, 0, 1)`;

      };
    }


    function miniPrewStop() {
      miniPrewEnabled = false;
      window.onscroll = null; // Remove the scroll event listener
    }

    miniPrew();  
    tiltInt();
    
    let minibar = true;
    minibar = true;  
    swup.hooks.on('animation:out:end', () => {
      if (minibar === true) {
        miniPrewStop();

        minibar = false;
      }
    })
  }
}










