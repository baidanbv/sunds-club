const webVibeTabs = document.querySelector('.webVibe-custom-tabs');
const tabsContent = document.querySelectorAll('.webVibe-custom-tabs__content li');
const tabsTitle = document.querySelectorAll('.webVibe-custom-tabs__titles li');

if (webVibeTabs) {
  webVibeTabs.addEventListener('click', (event) => {
    tabsTitle.forEach((title, index) => {
      title.dataset.itemContent = index + 1;

      tabsContent.forEach((content, index) => {
        content.dataset.contentId = index + 1;

        if (event.target.dataset.itemContent === content.dataset.contentId) {
          event.target.classList.add('active_title');
          content.classList.add('active_content');
        } else {
          content.classList.remove('active_content');
          title.classList.remove('active_title');
        }
      });
    });
  });
}

$(document).ready(function () {
  $('.gallery-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: '<div class="custom-prev"><img src="./assets/icons/left.svg"/></div>',
    nextArrow: '<div class="custom-next"><img src="./assets/icons/right.svg"/></div>',
    responsive: [
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });
});

const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobileMenu');

mobileMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('activeMenu');
});

/******************************** */

const webVibeAccordeon = document.querySelector('.webVibe-custom-tabs__accordeon');
const accordeonItem = webVibeAccordeon.querySelectorAll('.accordeon-item');

if (accordeonItem) {
  accordeonItem.forEach((item) => {
    const title = item.querySelector('.accordeon-title');
    const content = item.querySelector('.accordeon-content');

    title.addEventListener('click', () => {
      webVibeAccordeon.querySelectorAll('.accordeon-title').forEach((item) => item.classList.remove('active_title'));
      webVibeAccordeon.querySelectorAll('.accordeon-content').forEach((item) => item.classList.remove('active_content'));

      title.classList.add('active_title');
      content.classList.add('active_content');
    });
  });
}