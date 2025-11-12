// Var >
var homeanim = null;
var mobile = null;



const swup = new Swup({
  plugins: [new SwupFadeTheme(),
    new SwupPreloadPlugin()
  ],
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
            AnimHome();
        }, 1000);
      }
    });
  });

}





function mobileCheck() {
  function isMobile() {
    return window.innerWidth <= 600;
  }
  if (isMobile()) {
    mobile = true;

    import('./mobile.js')
      .then(module => {
        const { PageCheckMob } = module; 
        const { shouldMoveNavOff } = module; 

        swup.hooks.on('animation:in:start', function () {
          PageCheckMob(); 
        });
        swup.hooks.on('history:popstate', () => {
          setTimeout(() => {
            PageCheckMob(); 
          }, 50);
        });
        swup.hooks.on('animation:out:end', () => {
          if ($('#page').hasClass('page1')) {
            shouldMoveNavOff();
          }
        });
      })
  } else {
      mobile = false;
      // PageCheck();
    import('./desk.js')
      .then(module => {
        const { PageCheckDesk } = module; 
        const { miniPrewStop } = module; 
        const { scrollOff } = module; 

        swup.hooks.on('animation:in:start', function () {
          PageCheckDesk();
        });
        swup.hooks.on('history:popstate', () => {
          setTimeout(() => {
            PageCheckDesk();
          }, 50);
        });
        swup.hooks.on('animation:out:end', () => {
          if ($('#page').hasClass('pageabout')) {
            miniPrewStop()
          }
          if ($('#page').hasClass('pagework')) {
            scrollOff();
          }
        });
      })
    
    
    
    
    
    
    
    
    
    
  }
}


swup.hooks.on('content:replace', () => {
  $('body').css('pointer-events', 'none')
  setTimeout(() => {
    $('body').css('pointer-events', 'auto')
  }, 450);
  if ($('#page').hasClass('page1')) {
    AnimHome();
  }
});







// function AnimHome() {
//   if (homeanim === null) {
//     // $('.blur_obj').addClass('blur_start')
//     $('.anim-pic').each(function (index) {
//       var $strip = $(this);
//       setTimeout(function () {
//         $strip.addClass('anim-pic-anim');
//       }, index * 100);
//     });

//     homeanim = true;
//   } else {
//     $('.blur_obj').css('opacity', '1')
//     $('.anim-pic').css('opacity', '1')
//   }
// } 















preload()


















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
  tapAction: 'close',
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

export default lightbox;








const swiper = new Swiper('.swiper', {
  spaceBetween: 0,
  speed:10000,
	direction: 'horizontal',
  autoplay: {delay: 0},
  loop: true,
  slidesPerView: 1,
  freeMode: true,
  grabCursor: true,
  
  breakpoints: {
    640: {
      slidesPerView: 1.5,
    },    
    768: {
      slidesPerView: 2,
    },
    1324: {
      slidesPerView: 3,
    },
  }
    
});


const swiper2 = new Swiper('.swiper2', {
  spaceBetween: 0,
  speed:9000,
	direction: 'horizontal',
  autoplay: {delay: 0},
  loop: true,
  slidesPerView: 1,
  allowTouchMove: false,
  freeMode: true,
  breakpoints: {
    640: {
      slidesPerView: 5,
    },    

    1324: {
      slidesPerView: 7,
    },
  }
    
});

