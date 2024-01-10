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


const parentSkill = document.querySelector('.list-skill')
var children = parentSkill.children
var plusTimeDelay = 200
for (var i = 0; i < children.length; i++) {
    children[i].style.transitionDelay = `${plusTimeDelay += 200}ms`
}

// Animation Scrol

const sections = document.querySelectorAll('section')
const textNavbar = document.querySelectorAll('.txtNav')

// Fungsi active section
function updateActiveSection() {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            textNavbar[index].classList.add('active')
        } else {
            textNavbar[index].classList.remove('active');
        }
    });
}

window.addEventListener('scroll', updateActiveSection);

updateActiveSection(); // calling function


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// switch paragraph
const paragraph = document.querySelector('.paragraph');
const triggerParagraph = document.getElementById('trigger-description');


let statusParagraph = false
triggerParagraph.addEventListener('click', function () {
    if (statusParagraph) {
        paragraph.style.display = 'none'
        triggerParagraph.innerHTML = 'Allow description'
        statusParagraph = false
    }else{
        paragraph.style.display = 'block'
        triggerParagraph.innerHTML = 'Hide description'
        statusParagraph = true
    }
})


