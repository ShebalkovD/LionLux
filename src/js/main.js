let nav = document.querySelector('#nav')
let catalog = document.querySelector('#header_catalog')

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
};

function change_nav(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add("nav_fixed");

    if (entry.isIntersecting && !catalog.classList.contains('active')){
        nav.classList.remove("nav_fixed");
    }
}

let nav_observer = new IntersectionObserver( change_nav, options);
let target = document.querySelector(".header_observertrigger");
nav_observer.observe(target)

const nav_catalog_btn = document.querySelector('#nav_catalog_button');

nav_catalog_btn.addEventListener('click', function() {
    let posTop = window.scrollY;
    
    if (catalog.classList.contains('active') && posTop === 0) {
        nav.classList.remove('nav_fixed')
    }else {
        nav.classList.add('nav_fixed')
    }
    
    catalog.classList.toggle('active')
})