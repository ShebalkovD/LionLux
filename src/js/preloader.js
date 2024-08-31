let preloader = document.querySelector("#preloader")

window.onload = (e) => {
    preloader.classList.add('hide')
    
    setTimeout(function() {
        preloader.style.display = 'none'

    }, 300)
}