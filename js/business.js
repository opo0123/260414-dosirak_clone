window.addEventListener("load", () => {
  const swBusiness = new Swiper(".sw-business", {
    slidesPerView: 1, // swiper 기본(mobile - 1개만 보임)

    // spaceBetween: 20, // slide 간격 (gap)

    breakpoints: {
      // 480 이후
      480: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      //1024 이후
      1024: { slidesPerView: 3 },
    },
  });

  // modal - 클릭시 없어짐
  const businessModal = document.querySelector(".business-modal");
  businessModal.addEventListener("click", () => {
    businessModal.style.display = "none";
  });
});
