import Swiper, { Navigation, Pagination } from 'swiper';
import 'virtual-select-plugin/dist/virtual-select.js';

import wrapWords from './modules/wrap.js';
import initProgressBar from './modules/progressScroll.js';
import { initCounters } from './modules/newCounter.js';
import quantityInput from './modules/quantity.js';

document.addEventListener('DOMContentLoaded', () => {
  isElementExist('.swiper-container', initSlider);
  isElementExist('.page-header', isHeaderScrolling);
  isElementExist('.quantity', initQuantity);
  VirtualSelect.init({ ele: 'select' });
  initCounters('.counter');
  
});

function isElementExist(_el, _cb) {
  let elem = document.querySelector(_el);
  
  if (document.body.contains(elem)) {
    try {
      _cb();
    } catch (e) {
      console.log(e);
    }
  }
}


function initQuantity() {
  quantityInput('.quantity');
}

function initSlider() {
  const swiper = new Swiper('.swiper-container', {
    // cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',
    }, pagination: {
      el: '.swiper-pagination',
    }, mousewheel: true, keyboard: true,
  });
}


function isHeaderScrolling() {
  let scrollPos = 0;
  const header = document.querySelector('.page-header');
  const main = document.querySelector('.main');
  const wrapper = document.querySelector('.wrapper');
  const headerPosition = header.getBoundingClientRect().top;
  
  function addMainPadding() {
    const headerHeight = header.offsetHeight;
    main.style.setProperty('--header-height', headerHeight + 'px');
  }
  
  function headerSticky() {
    let currentScrollPos = window.scrollY;
    
    if (currentScrollPos > headerPosition) {
      header.classList.add('_scrolled');
    } else {
      header.classList.remove('_scrolled');
    }
    
    if (currentScrollPos > scrollPos) {
      if (!header.classList.contains('_fixed')) {
        header.classList.add('_fixed');
      }
    } else {
      if (header.classList.contains('_fixed')) {
        header.classList.remove('_fixed');
      }
    }
    
    scrollPos = currentScrollPos;
  }
  
  addMainPadding();
  
  window.addEventListener('resize', () => {
    addMainPadding();
  });
  
  window.addEventListener('scroll', () => {
    headerSticky();
  });
}
