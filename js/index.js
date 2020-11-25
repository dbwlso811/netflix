$(function(){
    $('.faq-answer').on('click',function(){
      if($(this).hasClass('active')){//active를 가지고 있으면
        $(this).removeClass('active');//모든 active 제거
      } else {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
      }
    });
  });