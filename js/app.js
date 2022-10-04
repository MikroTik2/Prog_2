/*------------------------------------------------------------Scroll*/

const anchors = document.querySelectorAll('a[href*="#')

for(let anchor of anchors) {
   anchor.addEventListener("click", function(event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   })
}
/*------------------------------------------------------------Hamburger*/

const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
   burger.classList.toggle("active");
   navMenu.classList.toggle("active");
})