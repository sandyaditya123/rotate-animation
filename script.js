// Get all elements
const playButton = document.getElementById('playButton');
const myImage = document.querySelector('.my-img');

playButton.addEventListener('click', function () {
    // To start animation
    playButton.textContent = 'Stop';
    myImage.classList.add('rotate');
    this.addEventListener('click', function () {
        // To stop animation
        if (myImage.classList.contains('rotate')) {
            this.textContent = 'Play';
            myImage.classList.remove('rotate');
        } else {
            // To start animation again
            this.textContent = 'Stop';
            myImage.classList.add('rotate');
        }
    });
});
