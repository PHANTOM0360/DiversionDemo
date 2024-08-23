document.addEventListener('scroll', function() {
    const subVideoBox = document.querySelector('.sub-video-box');
    const subsection = document.querySelector('.subsection');
    const spinningMoon = document.querySelector('.spinning-moon');
    const logoVideo = document.querySelector('.logo-video');

    // Get viewport height
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    // Calculate scaling factor for the logo
    const logoScale = Math.min(2.5, 1 + (scrollPosition / viewportHeight)); // Logo scales up to 2.5 times

    // Apply the scale transformation to the logo
    if (logoVideo) {
        logoVideo.style.transform = `scale(${logoScale})`;
    }

    // Adjust scroll speed based on logo size
    const contentScrollSpeed = logoScale > 1 ? 1 / logoScale : 1; // Slow down scroll speed when logo is scaling up

    // Calculate the amount scrolled within the subsection
    const subsectionRect = subsection.getBoundingClientRect();
    const isInView = subsectionRect.top <= viewportHeight && subsectionRect.bottom >= 0;

    if (isInView) {
        const scrollOffset = scrollPosition - subsection.offsetTop;
        const subsectionHeight = subsection.offsetHeight;

        // Define scaling factor based on scroll position
        // Starts at 0.5 and goes up to 1.5
        const scale = Math.min(Math.max(0.5, 0.5 + (scrollOffset / subsectionHeight)), 1);

        // Apply the scale transformation to the sub-video-box
        subVideoBox.querySelector('video').style.transform = `scale(${scale})`;

        if (scrollOffset >= subsectionHeight) {
            window.scrollTo(0, subsectionHeight);
        }
    }

    // Rotate the moon based on scroll position
    if (spinningMoon) {
        const rotationAngle = (scrollPosition / 10) % 360; // Slower rotation
        spinningMoon.style.transform = `rotate(${rotationAngle}deg)`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const popupContents = document.querySelectorAll('.popup-content');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = button.textContent.trim().toLowerCase(); // Get button text to match with div id
            const targetDiv = document.getElementById(targetId);

            popupContents.forEach(div => {
                if (div !== targetDiv) {
                    div.style.display = 'none'; // Hide other divs
                }
            });

            targetDiv.style.display = 'block'; // Show the target div
        });
    });

    // Handle big button click separately for chatbot
    const bigButton = document.querySelector('.big-btn');
    bigButton.addEventListener('click', function() {
        popupContents.forEach(div => div.style.display = 'none'); // Hide all divs
        document.getElementById('chatbot').style.display = 'block'; // Show chatbot div
    });
});
