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
        const boxHeight = subVideoBox.offsetHeight;
        const subsectionHeight = subsection.offsetHeight;

        // Define scaling factor based on scroll position
        // Starts at 0.5 and goes up to 1.5
        const scale = Math.min(Math.max(0.5, 0.5 + (scrollPosition / subsectionHeight)), 1);

        // Apply the scale transformation
        subVideoBox.querySelector('video').style.transform = `scale(${scale})`;

        // if (scrollPosition >= subsectionHeight) {
        //     window.scrollTo(0, subsectionHeight);
        // }
    }
});
