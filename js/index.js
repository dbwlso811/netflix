$(function(){
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