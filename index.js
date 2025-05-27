const back = document.querySelector("#back");
const next = document.querySelector("#next");

const photos = ["Testimonial 1 - AnyaAndrei1.png","Testimonial 2 - Anya.png","Testimonial 3 - Mila.png","Testimonial 4 - Alex.jpg","Testimonial 5 - Alex.jpg","Testimonial 6 - Alex.jpg","Testimonial 7 - Michal.jpg","Testimonial 7 - Svetlana2.jpg","Testimonial 8 - ValyaBeforeAfterNew.png","Testimonial 9 - Valya.png","Testimonial 10 - DimaBeforeandAfter.jpg", "Testimonial 11 - Dima.png","Testimonial 12 .png","Testimonial 13 - Alex.png"];
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