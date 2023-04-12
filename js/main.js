// Get Element

const sideBar = document.querySelector("aside");
const navBarBtn = document.querySelector(
  ".landing-page .nav-bar-icon .fa-solid"
);
const navBarLi = document.querySelectorAll("aside nav ul li a");
const navBarSections = document.querySelectorAll("aside nav ul li");
const aboutMeSection = document.querySelector(".about-me");
const sections = document.querySelectorAll("section");
const home = document.querySelector("#landing-page");
const skills = document.querySelector("#skills");
const progbar = document.querySelectorAll(".progbar");
const progbarSpan = document.querySelectorAll(".progbar span");
const increamentBar = document.querySelector("#zfacts");
const counters = document.querySelectorAll(".counter");

console.log(progbarSpan);
//========================== Libs ==========================//
//-------------- 1- Type Writer Lib --------------//
var app = document.getElementById("app");
var typewriter = new Typewriter(app, {
  loop: true,
});
typewriter
  .typeString("I'm Mohamed Ahmed Ramadan")
  .pauseFor(2500)
  .deleteAll()
  .typeString("I'm Front-End Developer")
  .pauseFor(2500)
  .deleteAll()
  .typeString("I'm Free Lancer")
  .pauseFor(2500)
  .deleteChars(2)
  .start();
//-------------- 2- Swiper JS Lib --------------//
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//-------------- 3- WayPoints --------------//

//Functions
window.onscroll = function () {
  if (window.scrollY > home.topOffset && window.scrollY < 200) {
    removeActiveFromNavBarSections();
    home.classList.add("active");
  } else {
    sections.forEach((sec) => {
      const way1 = new Waypoint({
        element: sec,
        handler: function () {
          navBarSections.forEach((navSec) => {
            if (
              sec.getAttribute("data-target") ===
              navSec.getAttribute("data-target")
            ) {
              removeActiveFromNavBarSections();
              navSec.classList.add("active");
            }
          });
        },
        offset: 400,
      });
    });
  }
};
//----
const way2 = new Waypoint({
  element: skills,
  handler: function () {
    progbarSpan.forEach((span) => {
      span.style.width = span.getAttribute("data-width");
    });
  },
  offset: 50,
});
//----------
const way3 = new Waypoint({
  element: skills,
  handler: function () {
    progbarSpan.forEach((span) => {
      span.style.width = "0";
    });
  },
  offset: 300,
});
//---
//----
const way4 = new Waypoint({
  element: increamentBar,
  handler: function () {
    counters.forEach((counter) => {
      counter.innerText = "0";

      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  },
  offset: 400,
});
//----------
// const way5 = new Waypoint({
//   element: increamentBar,
//   handler: function () {
//     counters.forEach((counter) => {
//       counter.innerText = "0";
//     });
//   },
//   offset: 300,
// });
//---
function removeActiveFromNavBarSections() {
  navBarSections.forEach((sec) => {
    sec.classList.remove("active");
  });
}

//----------------------

//----------------------

//========================== Main JS ==========================//
//-------------- 1- NAV-BAR --------------//
//Events
navBarBtn.onclick = (event) => {
  if (!sideBar.classList.contains("active")) {
    sideBar.classList.add("active");
    navBarBtn.classList.remove("fa-bars");
    navBarBtn.classList.add("fa-xmark");
  } else {
    removeSideBar();
  }
};
navBarLi.forEach((a) => {
  a.onclick = (event) => {
    removeSideBar();
  };
});

// Functions
function removeSideBar() {
  if (window.matchMedia("(max-width: 991px)").matches) {
    sideBar.classList.remove("active");
    navBarBtn.classList.add("fa-bars");
    navBarBtn.classList.remove("fa-xmark");
  }
}

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    sideBar.classList.remove("active");
  } else {
    sideBar.classList.add("active");
  }
}
var x = window.matchMedia("(max-width: 991px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

//-------------- 2- Add Active to Scrolled Section --------------//

//------------------

//---------------
/*
const counters = document.querySelectorAll(".counter");
console.log(counters);

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 600;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
*/
