window.onload = function () {
  // slows the execution of certain function with some milliseconds
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const images = document.querySelectorAll(".slide-in");

  function checkSlide(e) {
    images.forEach(img => {
      const isShown =
        window.scrollY > img.offsetTop - window.innerHeight + img.height / 3;
      if (isShown) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }

      const isHidden = window.scrollY > img.offsetTop + (img.height / 3) * 2;
      if (isHidden) {
        img.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", debounce(checkSlide, 20));
}