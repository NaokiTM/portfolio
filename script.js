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





function typeText(el, msPerChar = 20, startDelay = 400) {
  el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());

  // wrap every character in a hidden span so the layout is reserved up front
  const chars = [];
  const walk = node => {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        for (const ch of n.textContent.replace(/\s+/g, ' ')) {
          const s = document.createElement('span');
          s.textContent = ch;
          s.style.visibility = 'hidden';
          s.setAttribute('aria-hidden', 'true');
          frag.appendChild(s);
          chars.push(s);
        }
        n.replaceWith(frag);
      } else if (n.nodeType === Node.ELEMENT_NODE) {
        walk(n);   // goes inside things like your <b>Bristol, UK.</b>
      }
    });
  };
  walk(el);

  let shown = 0;
  let t0 = null;
  const step = now => {
    if (t0 === null) t0 = now;
    const target = Math.min(chars.length, Math.floor((now - t0) / msPerChar));
    while (shown < target) chars[shown++].style.visibility = 'visible';
    if (shown < chars.length) requestAnimationFrame(step);
  };
  setTimeout(() => requestAnimationFrame(step), startDelay);
}

typeText(document.getElementById('description'));



const clock = document.getElementById('location');
const tick = () => clock.textContent = 'Bristol, United Kingdom:  ' + new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London' });
tick(); setInterval(tick, 1000);
