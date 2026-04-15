window.addEventListener("load", () => {
  const header = document.querySelector(".header");
  let scy = 0;

  // 스크롤 될 때
  window.addEventListener("scroll", () => {
    // 1. 스크롤바의 px 위치값 파악
    scy = window.document.documentElement.scrollTop;
    // 2. active 적용 조건
    if (scy > 0) {
      header.classList.add("active");
    }else {
        header.classList.remove("active")
    }
  });
});
