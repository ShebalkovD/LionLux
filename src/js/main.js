let nav = document.querySelector('#nav')
let catalog = document.querySelector('#header_catalog')
let body = document.querySelector("body")
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

let burger_btn = document.querySelector("#nav_burger")
let burger_menu = document.querySelector("#burger_menu")
let burger_close_btn = document.querySelector("#burger_menu_close")
let burger_catalog_btn = document.querySelector("#mobile_catalog_btn")
let burger_catalog_close_btn = document.querySelector("#burger_catalog_close")
let burger_list= document.querySelector("#burger_list")
let burger_catalog= document.querySelector("#burger_catalog")

// Работа мобильного меню
burger_btn.addEventListener("click", function() {
    burger_menu.style.display = "flex";
    body.classList.add("no_scroll")
    setTimeout(function(){
        burger_menu.classList.add("burger_menu-active")
    }, 100)
})

burger_close_btn.addEventListener("click", function() {
    burger_menu.classList.remove("burger_menu-active")
    body.classList.remove("no_scroll")
    setTimeout(function(){
        burger_menu.style.display = "none";
        burger_catalog.classList.remove("burger_menu_catalog-active")
        burger_list.classList.add("burger_menu_list-active")
        burger_catalog_close_btn.classList.remove("active")
    }, 200)
})

// Работа Каталога в мобильном меню


burger_catalog_btn.addEventListener("click", function() {
    burger_catalog_close_btn.classList.add("active")
    burger_list.classList.remove("burger_menu_list-active")
    burger_catalog.classList.add("burger_menu_catalog-active")
})

burger_catalog_close_btn.addEventListener("click", function() {
    burger_catalog_close_btn.classList.remove("active")
    burger_catalog.classList.remove("burger_menu_catalog-active")
    burger_list.classList.add("burger_menu_list-active")
})