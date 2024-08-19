document.addEventListener('scroll', function() {
    const subVideoBox = document.querySelector('.sub-video-box');
    const subsection = document.querySelector('.subsection');
    
    // Get the scroll position relative to the subsection
    const scrollPosition = window.scrollY - subsection.offsetTop;
    
    // Define a scaling factor based on the scroll position
    const scale = Math.min(Math.max(0.1, 0.1 + scrollPosition / 1000), 1); // Limits the scale between 1 and 1.5
    
    // Apply the scale transformation
    subVideoBox.style.transform = `scale(${scale})`;
});