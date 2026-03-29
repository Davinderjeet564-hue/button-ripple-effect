let button = document.querySelector('.button');
const animationDuration = 1000;

const durationInSeconds = animationDuration / 1000;

document.documentElement.style.setProperty('--animation-duration', `${durationInSeconds}s`);

function getPosition(event) {
    const rect = button.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    return {x, y};
}

button.addEventListener('click', (event) => {
    let position = getPosition(event);
    let x = position.x;
    let y = position.y;
    
    // Calculate the size of the ripple
    const size = Math.sqrt(Math.pow(button.offsetWidth, 2) + Math.pow(button.offsetHeight, 2));

    // Create ripple element
    const ripple = document.createElement('span');
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x - size / 2}px`;
    ripple.style.top = `${y - size / 2}px`;
    ripple.classList.add('ripple');

    //ripple.style.backgroundColor = 'rgba(255, 166, 42, 0.5)';

    ripple.style.background = `
        radial-gradient(circle,
        rgba(254, 183, 52, 0.8) 0%,
        rgba(255, 150, 50, 0.5) 40%,
        rgba(255, 100, 0, 0.2) 70%,
        transparent 100%)
    `;
    
    // Add ripple to button
    button.appendChild(ripple);
    
    // Remove ripple after animation completes
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});
