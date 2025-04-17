document.addEventListener('DOMContentLoaded', function() {
  // WhatsApp button logic
  const whatsappBtn = document.getElementById('whatsappBtn');
  const heroSection = document.querySelector('.hero-section');

  window.addEventListener('scroll', function() {
    const heroHeight = heroSection.offsetHeight;
    if (window.scrollY > heroHeight) {
      whatsappBtn.classList.remove('d-none');
    } else {
      whatsappBtn.classList.add('d-none');
    }
  });

  // Services Carousel
  const carouselItems = document.getElementById('carouselItems');
  if (carouselItems) {
    const servicesPrevBtn = document.getElementById('prevBtn');
    const servicesNextBtn = document.getElementById('nextBtn');
    const servicesItems = carouselItems.children;
    const servicesItemWidth = servicesItems[0].offsetWidth + 16; // Adding margin
    const servicesVisibleItems = 3;
    let servicesCurrentIndex = 0;

    function updateServicesCarousel() {
      carouselItems.style.transition = 'transform 0.5s ease';
      carouselItems.style.transform = `translateX(-${servicesCurrentIndex * servicesItemWidth}px)`;
    }

    servicesPrevBtn.addEventListener('click', function() {
      if (servicesCurrentIndex > 0) {
        servicesCurrentIndex--;
      } else {
        servicesCurrentIndex = servicesItems.length - servicesVisibleItems;
      }
      updateServicesCarousel();
    });

    servicesNextBtn.addEventListener('click', function() {
      if (servicesCurrentIndex < servicesItems.length - servicesVisibleItems) {
        servicesCurrentIndex++;
      } else {
        servicesCurrentIndex = 0;
      }
      updateServicesCarousel();
    });

    updateServicesCarousel();
  }

  // Customer Reviews Carousel
  const customerReviews = document.getElementById('customerReviews');
  if (customerReviews) {
    const reviewPrevBtn = document.querySelector('#prevReview');
    const reviewNextBtn = document.querySelector('#nextReview');
    const reviewItems = customerReviews.children;
    const reviewItemWidth = reviewItems[0].offsetWidth + 32; // Adding margin
    const reviewsVisibleItems = 3;
    let reviewsCurrentIndex = 0;

    function updateReviewsCarousel() {
      customerReviews.style.transition = 'transform 0.5s ease';
      customerReviews.style.transform = `translateX(-${reviewsCurrentIndex * reviewItemWidth}px)`;
    }

    reviewPrevBtn.addEventListener('click', function() {
      if (reviewsCurrentIndex > 0) {
        reviewsCurrentIndex--;
      } else {
        reviewsCurrentIndex = reviewItems.length - reviewsVisibleItems;
      }
      updateReviewsCarousel();
    });

    reviewNextBtn.addEventListener('click', function() {
      if (reviewsCurrentIndex < reviewItems.length - reviewsVisibleItems) {
        reviewsCurrentIndex++;
      } else {
        reviewsCurrentIndex = 0;
      }
      updateReviewsCarousel();
    });

    updateReviewsCarousel();
  }
});
