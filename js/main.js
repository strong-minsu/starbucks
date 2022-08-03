const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function(){
  searchEl.classList.add("focused");
  // 속성 지정
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener("blur", function(){
  searchEl.classList.remove("focused");
  // 속성 지정
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
window.addEventListener('scroll', _.throttle(function (){
  // console.log(window.scrollY);
  if(window.scrollY > 500){
    // badge 숨기기
    // badgeEl.style.display = "none";
    // gsap.to(요소, 지속시간, 옵션); -> 애니메이션 처리
    gsap.to(badgeEl, .6,{
      opacity: 0,
      display: 'none'
    })
    // 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });
  }else{
    //badge 보이기
    // badgeEl.style.display = "block";
    gsap.to(badgeEl, .6,{
      opacity: 1,
      display: 'block'
    })
    //버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.trottle(함수, 시간)

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1,{
    delay: (index+1)*.5, //0.7, 1.4, 2.1, 2.7
    opacity: 1,
  })
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  direction:'horizontal', //기본값
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delete:5000
  // }
  pagination:{
    el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container',{
  autoplay:true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5, //한 화면에 5개 화면
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    //숨김 처리
    promotionEl.classList.add('hide');
  }else{
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floationObject(selector, delay, size){
  // gsap.to(요소, 시간, 옵션) -> js 애니메이션 라이브러리
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    {
      y: size,
      repeat: -1, //repeat -1 무한 반복
      yoyo: true, //다시 위로 올라가는 애니메이션
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floationObject(".floating1", 1, 15);
floationObject(".floating2", .5, 15);
floationObject(".floating3", 1.5, 20);


const spyEls =document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,  //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); 
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();  //2022로 반환됨
