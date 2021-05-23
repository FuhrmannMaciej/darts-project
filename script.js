document.querySelector('.hamburger-menu')
.addEventListener('click', ()=>{
    document.querySelector('.container')
    .classList.toggle('change');
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });

const links = document.querySelectorAll(".menu-item a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
 
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}

document.querySelector(".mainTitle a").addEventListener("click", clickHandler);