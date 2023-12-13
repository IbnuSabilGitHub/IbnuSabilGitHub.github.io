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


const observerFade = createIntersectionObserver('animation-fade');
const elementAnimationFade = document.querySelectorAll('.hidden-fade');
elementAnimationFade.forEach((el) => observerFade.observe(el));

const observerRight = createIntersectionObserver('animation-right');
const elementAnimationRight = document.querySelectorAll('.hidden-right');
elementAnimationRight.forEach((al) => observerRight.observe(al))

const observeLeft = createIntersectionObserver('animation-left');
const elementAnimationLeft = document.querySelectorAll('.hidden-left');
elementAnimationLeft.forEach((el) => observeLeft.observe(el));

const observeUp = createIntersectionObserver('animation-up');
const elementAnimationUp = document.querySelectorAll('.hidden-up');
elementAnimationUp.forEach((el) => observeUp.observe(el));

const parentSkill = document.querySelector('.list-skill')

var children = parentSkill.children
var plusTimeDelay = 200
console.log(children)
for (var i = 0; i < children.length; i++) {
    children[i].style.transitionDelay =  `${plusTimeDelay += 200}ms`
}

// Animation Scrol