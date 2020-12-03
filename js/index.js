$(function(){

  


   //VIDEO THUMBS FUNCTIONS//
   $('.video-thumb:nth-child(1)').clone().appendTo('.video-thumbs').addClass('clone first-clone');

   $('.video-thumbs').find('.video-thumb:nth-child(5)').removeClass('active thumb-1').attr('index', '5');

   $('.video-thumb:nth-child(4)').clone().prependTo('.video-thumbs');

   $('.video-thumbs').find('.video-thumb:nth-child(1)').removeClass('active'). addClass('clone last-clone').attr('index', '0');


  function nextVideoThumb() {
  var currentThumb = parseInt($('.video-thumbs').attr('current-thumb'));
  var totalThumbsInit = $('.video-thumb').length;
  var totalThumbs = parseInt(totalThumbsInit - 2);
  var activeClasses = $('.video-thumbs').attr('class');
  var splitClasses = activeClasses.split(' ');
  var thisClass = splitClasses[1];
  
  $('.video-thumb').removeClass('active');

  if (currentThumb < totalThumbs) {
    var nextThumb = parseInt(currentThumb + 1);
    var nextClass = 'position-' + nextThumb;
    $('.video-thumbs').attr('current-thumb', nextThumb);
    $('.video-thumbs').removeClass(thisClass);
    $('.video-thumbs').addClass(nextClass);
    $('.video-thumb[index='+nextThumb+']').addClass('active');

  } else if (currentThumb == totalThumbs) {
    var nextThumb = 1;
    var nextClass = 'position-1';
    $('.video-thumbs').attr('current-thumb', nextThumb);
    $('.video-thumbs').removeClass(thisClass);
    $('.video-thumbs').addClass(nextClass);
    $('.video-thumb[index='+nextThumb+']').addClass('active');
  }

  };

  function prevVideoThumb() {
  var currentThumb = parseInt($('.video-thumbs').attr('current-thumb'));
  var totalThumbsInit = $('.video-thumb').length;
  var totalThumbs = parseInt(totalThumbsInit - 2);
  var activeClasses = $('.video-thumbs').attr('class');
  var splitClasses = activeClasses.split(' ');
  var thisClass = splitClasses[1];

  if (currentThumb > 1) {
    var prevThumb = parseInt(currentThumb - 1);
    var prevClass = 'position-' + prevThumb;
    $('.video-thumbs').attr('current-thumb', prevThumb);
    $('.video-thumbs').removeClass(thisClass);
    $('.video-thumbs').addClass(prevClass);
    $('.video-thumb[index='+prevThumb+']').addClass('active');

  } else if (currentThumb == 1) {
    var prevThumb = totalThumbs;
    var prevClass = 'position-' + totalThumbs;
    $('.video-thumbs').attr('current-thumb', prevThumb);
    $('.video-thumbs').removeClass(thisClass);
    $('.video-thumbs').addClass(prevClass);
    $('.video-thumb[index='+prevThumb+']').addClass('active');
  }
  };

  $('.video-thumbs-frame').on('swipeleft', nextVideoThumb);
  $('.video-thumbs-frame').on('swiperight', prevVideoThumb);

  // 자주 묻는 질문 button 클릭시 박스 아래로 오픈
// 지주 묻는 질문 button 클릭시 오른쪽 icon변경
$('.faq-list .faq-answer').hide();

$('.faq-list .faq-question').on('click',function(e){
  e.preventDefault();

  const style = $(this).hasClass('on');
  if(style == false) {//.on이 없는 경우
    $('.faq-list .faq-question').removeClass('on');
    $(this).addClass('on');

    $('.faq-list .faq-answer').stop().slideUp();
    $(this).next().stop().slideDown();
  } else {//.on인 경우, 이미 클릭된 title
    $(this).removeClass('on');
    $(this).next().slideUp();
  }
});

 });

//  마우스 오버시 영상재생
//  $(document).ready(function(){
//   $(function () {
//     var movies = $('.movie');
  
//     movies.on('mouseover', function () {
//       var title_id = $(this).attr('id');
//       var singer = $(this).attr('data-singer');
//       // $('.title').text(title_id);
//       // $('.singer').text(singer);
//       $('body').addClass('bg');
  
//       this.play();
  
//     });
  
//     movies.on('mouseout', function () {
//       $('body').removeClass('bg');
//       this.pause();
//       this.currentTime = 0;
  
//     });
  
//   })
// })