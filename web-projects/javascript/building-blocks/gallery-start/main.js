const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i + 1}.jpg`);
    thumbBar.appendChild(newImage);
    newImage.onclick = function (e) {
        displayedImage.src = e.target.src;
    }
}

// use bubbling version
// thumbBar.onclick = function (e) {
//     displayedImage.src = e.target.src;
// }

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function (e) {
    if ('dark' === (btn.getAttribute('class'))) {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
})