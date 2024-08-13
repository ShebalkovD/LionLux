let line1 = document.querySelector('#line')
let line2 = document.querySelector('#line2')
let section_category = document.querySelector('.category')


let options2 = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

function start_animation(entries, observer) {
    const [entry] = entries;
    
    if (entry.isIntersecting) {
        line1.classList.add("line_inner-active");
        line2.classList.add("line_inner-active");
        section_category.classList.add('category_animated')

        setTimeout(function() {
            let elements = document.querySelectorAll('.category_triangle')
            elements.forEach(el => {
                el.style.pointerEvents = "auto";
            })
        }, 1500)
    }
    

   
    
}

let observer = new IntersectionObserver( start_animation, options2);
let category_section = document.querySelector(".triangle3");
observer.observe(category_section)