// Mobile Video Autoplay Script
// Ensures videos autoplay on mobile devices

document.addEventListener('DOMContentLoaded', function() {
    // Function to force video autoplay on mobile
    function forceVideoAutoplay() {
        const videos = document.querySelectorAll('.hero-video, .projects-video, .equipment-video');
        
        videos.forEach(video => {
            // Set video attributes for mobile autoplay
            video.setAttribute('autoplay', '');
            video.setAttribute('muted', '');
            video.setAttribute('playsinline', '');
            video.setAttribute('webkit-playsinline', '');
            video.muted = true;
            video.playsInline = true;
            
            // Force play the video
            const playPromise = video.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('Video autoplay started successfully');
                }).catch(error => {
                    console.log('Video autoplay failed:', error);
                    // Try to play again after a short delay
                    setTimeout(() => {
                        video.play().catch(e => console.log('Retry failed:', e));
                    }, 1000);
                });
            }
        });
    }
    
    // Force autoplay immediately
    forceVideoAutoplay();
    
    // Also try on user interaction (fallback)
    document.addEventListener('touchstart', forceVideoAutoplay, { once: true });
    document.addEventListener('click', forceVideoAutoplay, { once: true });
    
    // Try again after page load
    window.addEventListener('load', forceVideoAutoplay);
});

