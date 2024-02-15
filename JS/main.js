const parentSkill = document.querySelector('.list-skill')
var children = parentSkill.children
var plusTimeDelay = 200
for (var i = 0; i < children.length; i++) {
    children[i].style.transitionDelay = `${plusTimeDelay += 200}ms`
}

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
const paragraph = document.querySelectorAll('.paragraph');
const itemProject = document.querySelectorAll('.itemProject');
const display = document.querySelectorAll('#displayProject');



