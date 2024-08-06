let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
};

function change_nav(entries, observer) {
    let nav = document.querySelector('#nav')
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add("nav_active");
    if (entry.isIntersecting) nav.classList.remove("nav_active");
}

let nav_observer = new IntersectionObserver( change_nav, options);
let target = document.querySelector(".header_observertrigger");
nav_observer.observe(target)