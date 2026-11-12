let centerContent = document.getElementById('center-content');
let panel1 = document.getElementById('panel1');
let panel2 = document.getElementById('panel2');
let panel3 = document.getElementById('panel3');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    if (scrollY < panel1.offsetHeight) {
        centerContent.textContent = 'Naoki Miyagawa';
    } else if (scrollY < panel1.offsetHeight + panel2.offsetHeight) {
        centerContent.textContent = 'Projects';
    } else if (scrollY < panel1.offsetHeight + panel2.offsetHeight + panel3.offsetHeight) {
        centerContent.textContent = 'Contact';
    }
});


const cursor = document.getElementById('cursor');

if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.documentElement.classList.add('has-cursor');

  addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    cursor.style.opacity = 1;
  });

  document.documentElement.addEventListener('mouseleave', () => {
    cursor.style.opacity = 0;
  });
}