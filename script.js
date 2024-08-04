$(document).ready(function () {
  const $body = $("body");
  const $slides = $(".slide");
  const $leftBtn = $("#left");
  const $rightBtn = $("#right");

  let activeSlide = 0;

  $rightBtn.click(function () {
    activeSlide += 1;

    if (activeSlide >= $slides.length) {
      activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
  });

  $leftBtn.click(function () {
    activeSlide -= 1;

    if (activeSlide < 0) {
      activeSlide = $slides.length - 1;
    }

    setBgToBody();
    setActiveSlide();
  });

  function setBgToBody() {
    $body.css(
      "background-image",
      $slides.eq(activeSlide).css("background-image")
    );
  }

  function setActiveSlide() {
    $slides.removeClass("active");
    $slides.eq(activeSlide).addClass("active");
  }

  setBgToBody();
  setActiveSlide();
});
