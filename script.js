document.addEventListener("DOMContentLoaded", function (event) {
  event.preventDefault();
  window.addEventListener("scroll", function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      document.querySelector(".navbar").classList.add("sticky");
    } else {
      document.querySelector(".navbar").classList.remove("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      document.querySelector(".scroll-up-btn").classList.add("show");
    } else {
      document.querySelector(".scroll-up-btn").classList.remove("show");
    }
  });

  // slide-up script
  document
    .querySelector(".scroll-up-btn")
    .addEventListener("click", function () {
      // removing smooth scroll on slide-up button click
      document.body.scrollIntoView({ behavior: "smooth" });
    });

  document
    .querySelector(".navbar .menu li a")
    .addEventListener("click", function () {
      // applying again smooth scroll on menu items click
      document.querySelector("html").style.scrollBehavior = "smooth";
    });

  //toggle menu/navbar script
  //si el nodo es un i (icono) o un a (enlace o anchor tag)
  document.querySelector(".navbar").addEventListener("click", (e) => {
    if (e.target.nodeName === "I" || e.target.nodeName === "A") {
      document.querySelector(".navbar .menu").classList.toggle("active");
      document.querySelector(".menu-btn i").classList.toggle("active");
    }
    //console.log(e.target.nodeName);
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Problem Solver", "Developer", "Blogger", "Coder", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Problem Solver", "Developer", "Blogger", "Coder", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var slider = tns({
    container: ".carousel",
    items: 3,
    // gutter: 20,
    slideBy: "page",
    controlsPosition: "bottom",
    navPosition: "bottom",
    autoplay: true,
    autoplayButtonOutput: false,
    // controlsContainer: "#custom-control",
    controls: false,
    nav: false,
    mouseDrag: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });
});
