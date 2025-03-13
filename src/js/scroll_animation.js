const scroll_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated_fadeup-active')
        }

        
    })
    
},
{ threshold: 0.5,
   
});

let targets = document.querySelectorAll(".animated_fadeup");
for (let target of targets) {
    scroll_observer.observe(target)
}
