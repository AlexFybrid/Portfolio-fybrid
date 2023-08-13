var homeanim = null;

var miniPrewEnabled = true;

var scrollScript = true;

var workNotflood = false
let timerId;


export function PageCheckDesk() {

    if ($('#page').hasClass('page1')) {


      if ($('.select_nav').hasClass('select_about')) {
        $('.select_nav').removeClass('select_about')
      }
      if (homeanim === true) {
        $('.scroll_box').addClass("scroll_box_anim")
      }
      // PageHomeScript();
    }




    if ($('#page').hasClass('pagework')) {
      imageZoom();

      if ($('.select_nav').hasClass('select_about')) {
        $('.select_nav').removeClass('select_about')
      }
      Page2workScript();

    }




    if ($('#page').hasClass('pageabout')) {
      window.scrollTo(0, 0);
      

        $('.left_box_bar').removeClass('left_box_bar_on')

      $('.select_nav').addClass('select_about')
      AboutScript();


    }
}

PageCheckDesk();










function Page2workScript() {


  scrollScript = true;

  var videoClick = false;

  const imgbox = document.querySelector('.imgbox');

    const video = document.getElementById("my-video");


    const progressPath = document.querySelector('.progress-wrap');






    if (video) {
      if (timerId) {
        clearTimeout(timerId);
      }
       timerId = setTimeout(() => {

          if ($('#page').hasClass('pagework')) {
              if (video.readyState === 4) {
                LoadVideo();
              } else {
                video.addEventListener("loadeddata", LoadVideo);
              }

            }
          }, 2500); 




      function LoadVideo() {
        
        if (scrollScript === false) return;
            
        window.onscroll = () => {
          
          
          




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

        }
        Video();

      }





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
    }
}




function AboutScript() {
  miniPrewEnabled = true;
    function tiltInt() {
      VanillaTilt.init(document.querySelectorAll(".tildcard"));
    }
  
  
  
    function miniPrew() {
      
      if (miniPrewEnabled === false) return;
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





      miniPrew();  

  tiltInt();

}

export function miniPrewStop() {
  miniPrewEnabled = false;
  window.onscroll = null; // Remove the scroll event listener
}

export function scrollOff() {
  scrollScript = false;
  window.onscroll = null; // Remove the scroll event listener
  
}