$(function(){
// 자주 묻는 질문 button 클릭시 박스 아래로 오픈
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
  //  button 클릭시 icon 변화
   $('.faq-question').on('click', function(){
    $('.btn-x').toggleClass('active');
    });

      // $('.btn-x').each(function () {
      //     $('.faq-question').click(function () {
      //         $(this).addClass('active');
      //         $(this).siblings('active').removeClass('active');
      //     });
      // });
    



  // $('.faq-list .faq-question').on('click',function(){
  //   if($(this).hasClass('active')){//active를 가지고 있으면
  //     $(this).removeClass('active');//모든 active 제거
  //   } else {
  //     $(this).siblings('.active').removeClass('active');
  //     $(this).addClass('active');
  //   }
  // });
 });