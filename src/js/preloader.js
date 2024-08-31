let preloader = document.querySelector("#preloader")
let bodyel = document.querySelector("body")

window.onload = (e) => {
    preloader.classList.add('hide')
    
    setTimeout(function() {
        preloader.style.display = 'none'
        bodyel.classList.remove("no_scroll")
    }, 300)
}
