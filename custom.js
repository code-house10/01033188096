$(document).ready(function() {
	// grab the initial top offset of the navigation
	   var stickyNavTop = $('.mainNav').offset().top;

	   // our function that decides weather the navigation bar should have "fixed" css position or not.
	   var stickyNav = function(){
		var scrollTop = $(window).scrollTop(); // our current vertical position from the top

		// if we've scrolled more than the navigation, change its position to fixed to stick to top,
		// otherwise change it back to relative
		if (scrollTop > stickyNavTop) {
			$('.mainNav').addClass('sticky');
		} else {
			$('.mainNav').removeClass('sticky');
		}
	};

	stickyNav();
	// and run it again every time you scroll
	$(window).scroll(function() {
	  stickyNav();
	});
  });

  const swiper = new Swiper('.main-swiper', {
	// Optional parameters
	spaceBetween: 0,
	centeredSlides: true,
	loop: true,
	grabCursor: true,
	effect: "creative",
	creativeEffect: {
	  prev: {
		shadow: true,
		translate: [0, 0, -400],
	  },
	  next: {
		translate: ["100%", 0, 0],
	  },
	},
	autoplay: {
	  delay: 5000,
	  disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
        dynamicBullets: true,
	  clickable: true,
	},

  });

   /**
   * Init swiper slider with 1 slide at once in desktop view
   */
   new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });



  function openPanel(evt, tabNumber) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tab-content");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tab");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabNumber).style.display = "block";
	evt.currentTarget.className += " active";
  }

	//spinner
	$(".spinner ").fadeOut("slow");
	//WOW js
	new WOW().init();

	 /**
   * Initiate Pure Counter
   */
	 new PureCounter();
	// tooltip
	var tooltipTriggerList = [].slice.call(
	  document.querySelectorAll('[data-bs-toggle="tooltip"]')
	);
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	  return new bootstrap.Tooltip(tooltipTriggerEl);
	});

