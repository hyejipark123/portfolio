// 마우스커서 dot 
document.addEventListener("DOMContentLoaded", function() {
  const dot = document.querySelector('.dot');
  const noDotZone = document.querySelector('.disign-list-wrap');

  document.addEventListener("mousemove", function(e) {
    const zoneRect = noDotZone.getBoundingClientRect();

    // 디자인 리스트 영역(마우스 커서 노출X) 체크
    const isInNoDotZone = e.clientX >= zoneRect.left && e.clientX <= zoneRect.right &&
                          e.clientY >= zoneRect.top && e.clientY <= zoneRect.bottom;

    if (isInNoDotZone) {
      dot.style.display = 'none';
    } else {
      dot.style.display = 'block';
      dot.style.left = e.pageX + 'px';
      dot.style.top = e.pageY + 'px';
    }
  });

  // a 태그 마우스오버 시 dot 클래스명 추가
  document.querySelectorAll('a, .list-item').forEach(function(link) {
    link.addEventListener('mouseover', function() {
      dot.classList.add('over');
    });

    link.addEventListener('mouseout', function() {
      dot.classList.remove('over');
    });
  });
});

// header 스크롤 이벤트 
$(function(){
  let lastScrollTop = 0;
  const delta = 15;

  $(window).scroll(function(event){
    const st = $(this).scrollTop();

    if(st === 0) {
      // 최상단에 있을 때 배경색을 투명하게 설정
      $('.header').removeClass('nav-up').removeClass('nav-bg');
    } else if(Math.abs(lastScrollTop - st) <= delta) {
      return;
    } else if(st > lastScrollTop) {
      // 스크롤을 내릴 때
      $('.header').addClass('nav-up').addClass('nav-bg');
    } else {
      // 스크롤을 올릴 때
      $('.header').removeClass('nav-up').addClass('nav-bg');
    }

    lastScrollTop = st;
  });
});



// 메인 타이틀 밑줄 active 추가
document.addEventListener('DOMContentLoaded', function() {
  const spanElement = document.querySelector('.underline');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              spanElement.classList.add('active');
          } else {
              spanElement.classList.remove('active');
          }
      });
  });
  observer.observe(spanElement);
});

// 메인화면 마우스따라 움직이는 이미지 효과
// document.addEventListener('DOMContentLoaded', function() {
//   const images = document.querySelectorAll('.rotate-on-mouse');

//   document.addEventListener('mousemove', function(event) {
//       const windowWidth = window.innerWidth;
//       const mouseX = event.clientX;

//       // 화면의 중심을 기준으로 마우스 위치에 따라 회전 각도 계산
//       const rotation = ((mouseX / windowWidth) * 2 - 1) * 20; // -20도에서 20도 사이로 회전

//       images.forEach(image => {
//           image.style.transform = `rotate(${rotation}deg)`;
//       });
//   });
// });


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

document.addEventListener('DOMContentLoaded', function() {
  // Get modal elements
  var modal = document.getElementById("subModal");
  var span = document.getElementsByClassName("close")[0];
  var modalBody = document.getElementById("modalBody");
  var items = document.querySelectorAll(".open-modal");

  // Open modal when any button is clicked
  items.forEach(item => {
      item.onclick = function() {
          var target = this.getAttribute('data-target');
          fetch(target)
              .then(response => response.text())
              .then(data => {
                  modalBody.innerHTML = data;
                  modal.style.display = "block";
                  document.body.classList.add('open');
              })
      }
  });

  // Close modal when 'x' is clicked
  span.onclick = function() {
      modal.style.display = "none";
      document.body.classList.remove('open');
  }

  // Close modal when clicking outside of the modal content
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
          document.body.classList.remove('open');
      }
  }
});