document.addEventListener('DOMContentLoaded', function() {
    // Handle sidebar navigation
    const sidebarLinks = document.querySelectorAll('.course-nav a');
    const sections = document.querySelectorAll('.course-section');

    // Update active section based on scroll position
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

function loadLesson(lessonId) {
    // Hide all lesson content
    document.querySelectorAll('.lesson-content').forEach(content => {
        content.style.display = 'none';
    });

    // Show selected lesson content
    const selectedLesson = document.querySelector(`#${lessonId}-content`);
    if (selectedLesson) {
        selectedLesson.style.display = 'block';
        // Scroll to lesson content
        selectedLesson.scrollIntoView({ behavior: 'smooth' });
    }

    // Update active state in sidebar
    document.querySelectorAll('.course-nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${lessonId}`) {
            link.classList.add('active');
        }
    });
}

function initVideoPlayer() {
    const videoPlayers = document.querySelectorAll('.video-player');
    videoPlayers.forEach(player => {
        // Add custom video controls
        const video = player.querySelector('video');
        const playBtn = player.querySelector('.play-btn');
        const progressBar = player.querySelector('.progress-bar');

        playBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playBtn.textContent = 'Pause';
            } else {
                video.pause();
                playBtn.textContent = 'Play';
            }
        });

        video.addEventListener('timeupdate', () => {
            const progress = (video.currentTime / video.duration) * 100;
            progressBar.style.width = progress + '%';
        });
    });
}

// Initialize video players when lesson content is loaded
document.addEventListener('DOMContentLoaded', function() {
    initVideoPlayer();
}); 