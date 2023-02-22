/* cursor_round */
document.addEventListener("mousemove", function(e){
    const dot = document.querySelector('.dot');
    dot.style.left = e.pageX + 'px';
    dot.style.top = e.pageY + 'px';
  });
  
/* header scroll event */
$(function(){
var lastScrollTop = 0, delta = 15;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return; // 스크롤값을 받아서 리턴한다.
    if ((st > lastScrollTop) && (lastScrollTop>0)) {
        $("#header").css("top","-80px"); // 스크롤을 내렸을때 #header의 CSS 속성중 top 값을 -50px로 변경한다.

    } else {
        $("#header").css("top","0px"); // 스크롤을 올렸을때 #header의 CSS 속성중 top 값을 0px로 변경한다.
    }
        lastScrollTop = st;
        });
});


$(document).ready(function(){
  $('.gnb-btn').on('click', function(){
    if(!$(this).hasClass('on')) {
      $(this).addClass('on');
      $('body').css('overflow-y','hidden');
    } else {
      $(this).removeClass('on');
      $('body').css('overflow-y','visible');
    }
  });
  
});

/*$(document).ready(function(){
  //$('classNAME or element').hover(A, B);
  $('.row-portfolio > ul > li').hover(
    function(event){
      $(this).children('.hover-img').addClass('active');
    },
    function(){
      $(this).children('.hover-img').removeClass('active');
    }
  );
});*/

/* sub_project tab */
$(function(){
  $('.tabcontent > div').hide();
  $('.tabnav a').click(function () {
    $('.tabcontent > div').hide().filter(this.hash).fadeIn();
    $('.tabnav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();
});

/* main 마지막 섹션_배경색 변경 */
$(window).scroll(function() {
    var $window = $(window),
        $body = $('body'),
        $panel = $('.bgcolor');
  
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });

        $body.addClass('color-' + $(this).data('color'));        
      } 
    });    
    
  }).scroll();



 