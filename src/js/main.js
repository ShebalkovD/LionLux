

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

function getScrollBarWidth () {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild (inner);

    document.body.appendChild (outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild (outer);

    return (w1 - w2);
};

const nav_catalog_btn = document.querySelector('#nav_catalog_button');
const catalog_container = document.querySelector('.header_catalog .container')
const blur_block = document.querySelector('.blur_block')
const header_catalog_buttons = document.querySelectorAll('.header_catalog_list_item')

function openHeaderCatalog() {
    blur_block.style.display = 'block'  
    let scrollWidth = getScrollBarWidth()
    body.style.paddingRight = scrollWidth + 'px'
    nav.style.paddingRight = scrollWidth + 'px'
    body.classList.add('no_scroll')
    catalog.classList.add('active')
    blur_block.classList.add('active')
    setTimeout(function(){
        catalog_container.classList.add('active')
    }, 500)
}

function closeHeaderCatalog() {
    catalog_container.classList.remove('active')
    blur_block.classList.remove('active')
    setTimeout(function(){
        catalog.classList.remove('active')
        body.classList.remove('no_scroll')
        body.style.paddingRight = 0 + 'px'
        nav.style.paddingRight = 0 + 'px'
        blur_block.style.display = 'none'
    }, 500)
    
}

nav_catalog_btn.addEventListener('click', function() {
    let posTop = window.scrollY;
    
    if (catalog.classList.contains('active') && posTop === 0) {
        setTimeout(function(){
            nav.classList.remove('nav_fixed')
        }, 500)
    }else {
        nav.classList.add('nav_fixed')
    }
    
    catalog.classList.contains('active') ? closeHeaderCatalog() : openHeaderCatalog()
})

blur_block.addEventListener('click', function(){
    let posTop = window.scrollY;
    if (catalog.classList.contains('active') && posTop === 0) {
        setTimeout(function(){
            nav.classList.remove('nav_fixed')
        }, 500)
    }else {
        nav.classList.add('nav_fixed')
    }
    closeHeaderCatalog()
})

header_catalog_buttons.forEach(button => {
    button.addEventListener('click', function() {
        header_catalog_buttons.forEach(button => {
            button.classList.remove('header_catalog_list_item-active')
            let sublist = button.querySelector('.header_catalog_sublist')
            if (sublist != undefined) {
                sublist.classList.remove('header_catalog_sublist-active')
            }
        })
        button.classList.add('header_catalog_list_item-active')
        let sublist = button.querySelector('.header_catalog_sublist')
        if (sublist != undefined) {
            sublist.classList.add('header_catalog_sublist-active')
        }
    })
})

let burger_btn = document.querySelector("#nav_burger")
let burger_menu = document.querySelector("#burger_menu")
let burger_close_btn = document.querySelector("#burger_menu_close")
let burger_catalog_btn = document.querySelector("#mobile_catalog_btn")
let burger_catalog_close_btn = document.querySelector("#burger_catalog_close")
let burger_list= document.querySelector("#burger_list")
let burger_catalog= document.querySelector("#burger_catalog")
let burger_catalog_buttons = document.querySelectorAll(".burger_menu_catalog_list_item")
let burger_catalog_sublists = document.querySelectorAll('.burger_menu_catalog_sublist')

// Работа мобильного меню
burger_btn.addEventListener("click", function() {
    burger_menu.style.display = "flex";
    body.classList.add("no_scroll")
    burger_catalog_sublists.forEach(list => {
        let height = list.offsetHeight
        list.style.marginTop = `-${height}px`
    })
    setTimeout(function(){
        burger_menu.classList.add("burger_menu-active")
    }, 100)
})

burger_close_btn.addEventListener("click", function() {
    burger_menu.classList.remove("burger_menu-active")
    body.classList.remove("no_scroll")
    burger_catalog_sublists.forEach(list => {
        let height = list.offsetHeight
        list.style.marginTop = `-${height}px`
    })
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




burger_catalog_buttons.forEach(button => {
    button.addEventListener('click', function() {
        // burger_catalog_buttons.forEach(button => {
        //     button.classList.remove('active')
        // })

        button.classList.toggle('active')
        let sublist = button.querySelector('.burger_menu_catalog_sublist')

        if (button.classList.contains('active')) {
            sublist.style.marginTop = '2rem'
        }else {
            sublist.style.marginTop = `-${sublist.offsetHeight}px`
        }
    })
})


