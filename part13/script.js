'use strict';

///////////////////////////////////////
// Modal window
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const openModal = function (e) {
    e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


///////////////////////////////////////////////////////////////////// IMPLIMENTING THE SMOOTH SCROOLING FUNCTION

const btnScrollto = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollto.addEventListener('click',function(e){
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('cureent scroll (x/y)', window.pageXOffset, pageYOffset)

  ///////////// scrolling
  //////////// FIRST WAY 
  // window.scrollTo(s1coords.left + window.pageXOffset,s1coords.top + window.pageYOffset);


  /////////////////////// SECOND WAY
  // window.scrollTo({
  //   left: s1coords.left+ window.pageXOffset,
  //   top : s1coords.top + window.pageYOffset,
  //   behavior : "smooth"
  // })


  //////////////// THIRD WAY TO APPLY SMOOTH SCROLLING
  section1.scrollIntoView({behavior:'smooth'});
})




//////////////////////////// smooth scrolling in nav bar 
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   })
// }) ///////////////////////////////// below is second and easy to apply

document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.classList.contains("nav__link")){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
})



///////////////////////////////////////
// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});



///////////////////////////////////////
// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));



////////////////////////////// making navigation bar sticky

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);


//////////////// reveal section ke codes
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});


// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));



///////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();


////////////////////////if we need add cokie message
const message = document.createElement('div');
message.classList.add('cookie--message');

message.innerHTML = "we use cookied for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>";
header.append(message);
document.querySelector('.btn--close-cookie').addEventListener('click',function() { message.remove()});



///////////////////////projectcode end











/////////////////////////////////////////////////////////
////////////////////// LECTURE START ///////////////////
/////////////////////

/////////////////////////////////// SELECTING , CREATING  AND DELETING ELEMENTS

///////////////// SELECTING ELEMENTS
// console.log(document.documentElement);
// console.log(document.documentElement.textContent);
// console.log('her is all about bodd////////////////////////////////////////////////////////')
// console.log(document.head.textContent);
// console.log('her is all about bodd////////////////////////////////////////////////////////')
// console.log(document.body.textContent);


////////////////////////// if we need to select one element then we use queryselector otherwise for multiple elements we use queryselector all
// console.log(document.querySelector('.header'));
// console.log(document.querySelectorAll('.section'));          /////////////////// select all section



// const singleddek = document.getElementById('section--1');
// const allbtn = document.getElementsByTagName('button');
// console.log(singleddek);
// console.log(allbtn); 

// console.log(document.getElementsByClassName('btn'));


//////////////////////////////////////////////////////////// CREATING ELEMENT
// const message = document.createElement('div');
// message.classList.add('cookie--message');

// message.innerHTML = "we use cookied for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>";


// // header.prepend(message);
// header.append(message);
// // header.before(message);
// // header.after(message);


// ////////////////////////////////// deleting elements 
// document.querySelector('.btn--close-cookie').addEventListener('click',function() { message.remove()});

/////////////////////// styles
// message.style.backgroundColor = '#37383d' ;
// message.style.color = 'white' ;
// message.style.width = '100%';

// console.log(message.style.height);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// /////////way to style
// message.style.height = Number.parseFloat(getComputedStyle(message).height,10)+40+'px';


///////////////////////// css custom property
// document.documentElement.style.setProperty("--color-primary",'orange')



///////////////////////////css attributes changing
// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.className);
// console.log(logo.src);
// console.log(logo.getAttribute('designer'));

// logo.alt = 'beautiful namima'

// logo.setAttribute('company','Bankist');

// console.log(logo.getAttribute('src'));           //////////////////////   img/logo.png
// console.log(logo.getAttribute('src'));










////////////////////////////////// TYPES OF EVENT LISTENER AND HANDLER (EVENT IS SIGNAL SOMETHING IS HAPPEN)

////////////////////////////////// my example
// const h1 = document.querySelector('h1');
// h1.addEventListener("mouseenter",function(e){
//   alert("your mouse is one first heading");
// })

// h1.addEventListener("mouseleave",function(e){
//   alert("your mouse leaves the  first heading");
// })

////////////////////another way
// h1.onmouseenter = function(e){alert("your mouse is one first heading")};

// const alertH1 = function(e){
//   alert("your mouse is one first heading");
// }
// h1.removeEventListener('mouseenter',alertH1);





//////////////// event propagation pdha h iske baad
//////////////////  EVENT PROPAGATION IN COLORING
// const randomcolorgenratr = (min,max) => Math.floor(Math.random()*(max-min + 1) + min);
// const randomcolor = () => `rgb(${randomcolorgenratr(0,25)},${randomcolorgenratr(0,255)},${randomcolorgenratr(0,255)})`;

// //// selectbtn
// document.querySelector('.nav__link').addEventListener('click',function(e){
//   this.style.color = randomcolor();
//   e.stopPropagation
// })
// document.querySelector('.nav__links').addEventListener('click',function(e){
//   this.style.color = randomcolor();
// })
// document.querySelector('.nav').addEventListener('click',function(e){
//   this.style.color = randomcolor();
// })


///////////////////////////////////////////////////////////////////
/////////////////////////////// event delegation and smooth scrooling in navbar's links
//////////////////////////// smooth scrolling in nav bar 
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   })
// }) ///////////////////////////////// below is second and easy to apply

// document.querySelector('.nav__links').addEventListener('click',function(e){
//   e.preventDefault();
//   if(e.target.classList.contains("nav__link")){
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   }
// })











/////////////////////////////////////////////////////////// DOM TRAVERSING
// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);


// const h1 = document.querySelector('h1');

// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });