// Animation Scroll
function createIntersectionObserver(className) {
    return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // console.log((entry))
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            } else {
                entry.target.classList.remove(className);
            }
        });
    });
}

// for animation fade
const observerFade = createIntersectionObserver('animation-fade');
const elementAnimationFade = document.querySelectorAll('.hidden-fade');
elementAnimationFade.forEach((el) => observerFade.observe(el));

// for animation right
const observerRight = createIntersectionObserver('animation-right');
const elementAnimationRight = document.querySelectorAll('.hidden-right');
elementAnimationRight.forEach((al) => observerRight.observe(al))

// for animation left
const observeLeft = createIntersectionObserver('animation-left');
const elementAnimationLeft = document.querySelectorAll('.hidden-left');
elementAnimationLeft.forEach((el) => observeLeft.observe(el));

// for animation up
const observeUp = createIntersectionObserver('animation-up');
const elementAnimationUp = document.querySelectorAll('.hidden-up');
elementAnimationUp.forEach((el) => observeUp.observe(el));




// Animation Scrol