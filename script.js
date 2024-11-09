// Function to handle scroll event and reveal sections
function handleScroll() {
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY;

    sections.forEach(section => {
        if (scrollY + window.innerHeight > section.offsetTop + section.clientHeight / 2) {
            section.classList.add('visible');
        }
    });
}

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);

// Trigger scroll event on page load to reveal sections
window.addEventListener('load', handleScroll);
// Function to handle the Resume button click event
document.getElementById('resumeBtn').addEventListener('click', function () {
    const resumeImg = document.getElementById('resumeImg');
    resumeImg.style.display = resumeImg.style.display === 'none' || resumeImg.style.display === '' ? 'block' : 'none';
});
