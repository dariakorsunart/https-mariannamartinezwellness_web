



document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the class 'buttonGoToBook'
  const bookButtons = document.querySelectorAll('.buttonGoToBook');

  bookButtons.forEach(button => {
      button.addEventListener('click', handleBookNowClick);
  });

  loadGoogleAnalytics();
  initServicesHorizontalScroll()
  initTestimonialsScroll()
});

function handleBookNowClick(event) {
  const today = new Date();
  const UNAVAILABILITY_MESSAGE = "Online booking for all appointments will resume in October 2026 as I am currently on maternity leave. Thank you for your patience!";
  const RESUME_BOOKING_DATE = new Date('2026-10-01T00:00:00');

  // Check if the current date is BEFORE the resume date
  if (today < RESUME_BOOKING_DATE) {
      // Stop the default action (prevent navigation to Calendly link)
      event.preventDefault();

      // Display the alert message to the user
      alert(UNAVAILABILITY_MESSAGE);

      // Optional: Log to console for debugging
      console.log('Booking blocked due to maternity leave. Resume date: ' + RESUME_BOOKING_DATE.toDateString());
  }
  // If the date is on or after October 1, 2026, the function does nothing,
  // and the default action (going to the 'href' link) proceeds as normal.
}

function initTestimonialsScroll(){
  const back = document.querySelector("#back");
  const next = document.querySelector("#next");
  

  const photos = ["Testimonial 1 - AnyaAndrei1.png","Testimonial 2 - Anya.png",
    "Testimonial 3 - Mila.png","Testimonial 4 - Alex.jpg",
    "Testimonial 5 - Alex.jpg","Testimonial 6 - Alex.jpg",
    "Testimonial 7 - Michal.jpg","Testimonial 7 - Svetlana2.jpg",
    "Testimonial 8 - ValyaBeforeAfterNew.png","Testimonial 9 - Valya.png",
    "Testimonial 10 - DimaBeforeandAfter.jpg", "Testimonial 11 - Dima.png","Testimonial 12.png",
    "Testimonial 13 - Alex.png", "Testimonial 14 - Ollie.jpeg"];
  let i = 0;
  if(back !== null && next!==null){
      next.addEventListener("click",()=>{
          i++;
          if (i>photos.length-1) {
              i=0;
          }
          document.querySelector("#pictureTestimonials").src = photos[i];
      })

      back.addEventListener("click",()=>{
          i--;
          if (i<0) {
              i=photos.length-1;
          }
          document.querySelector("#pictureTestimonials").src = photos[i];
      })
  }
}

fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
    });

function scrollServices(direction) {
        const grid = document.querySelector('.imgGrid');
        const scrollAmount = 300; // pixels per click
    
        if (grid) {
          grid.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
          });
        }
}


function initServicesHorizontalScroll() {
  
  const container = document.querySelector(".imgGrid");
  const next_arrow = document.querySelector(".scroll-arrow.next");
  const prev_arrow = document.querySelector(".scroll-arrow.prev");

  if(next_arrow !== null && prev_arrow!==null && container !== null){
    const scrollAmount = document.querySelector(".imgButton").offsetWidth;

    next_arrow.addEventListener('click', () => {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prev_arrow.addEventListener('click', () => {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }
}


// Function to dynamically load the Google Analytics tag
function loadGoogleAnalytics() {
  const head = document.head;
  const gaMeasurementId = 'G-HY2DQXXLHF'; // Your specific Measurement ID

  // 1. Create the Google Tag Manager (gtag.js) script element
  const scriptAsync = document.createElement('script');
  scriptAsync.async = true;
  scriptAsync.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
  head.appendChild(scriptAsync);

  // 2. Create the configuration script element
  const scriptConfig = document.createElement('script');
  scriptConfig.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaMeasurementId}');
  `;
  head.appendChild(scriptConfig);

  console.log('Google Analytics tag loaded successfully.');
}


