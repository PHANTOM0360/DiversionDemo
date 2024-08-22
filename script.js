document.addEventListener('scroll', function() {
    const subVideoBox = document.querySelector('.sub-video-box');
    const subsection = document.querySelector('.subsection');
    
    const boxRect = subVideoBox.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Check if the bottom of the sub-video-box is in view
    const isInView = boxRect.top <= viewportHeight && boxRect.bottom >= 0;

    if (isInView) {
        // Calculate the amount scrolled within the subsection
        const scrollPosition = window.scrollY - subsection.offsetTop;
        const subsectionHeight = subsection.offsetHeight;

        // Define scaling factor based on scroll position
        // Starts at 0.5 and goes up to 1.5
        const scale = Math.min(Math.max(0.5, 0.5 + (scrollPosition / subsectionHeight)), 1);

        // Apply the scale transformation
        subVideoBox.querySelector('video').style.transform = `scale(${scale})`;

        if (scrollPosition >= subsectionHeight) {
            window.scrollTo(0, subsectionHeight);
        }
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
