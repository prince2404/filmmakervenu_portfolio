document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('play-full-video');
    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close-btn');    
    const fullVideoContainer = document.getElementById('full-video-container');
    const previewVideo = document.getElementById('preview-video');
    const previewVideo2 = document.getElementById('preview-video-2');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    var sidemenu = document.getElementById("sidemenu");
    const menuIcon = document.querySelector('.fa-bars');
    const closeIcon = document.querySelector('.fa-xmark');
    menuIcon.addEventListener('click', openmenu);
    closeIcon.addEventListener('click', closemenu);
    function openmenu(){
        sidemenu.style.left = "0";
        document.body.style.overflow = "hidden";
    }
    function closemenu(){
        sidemenu.style.left = "-150px";
        document.body.style.overflow = "auto";
    }

    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidemenu.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);
        const isClickOnCloseIcon = closeIcon.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnMenuIcon && !isClickOnCloseIcon && sidemenu.style.left === "0px") {
            closemenu();
        }
    });

    // Youtube video id's
    const cinematographyVideoId = "FrnWrqN2mOo"; // Replace with actual ID
    const editingVideoId = "wt0haVnorBo"; // Replace with actual ID

    let currentVideoId = cinematographyVideoId;

    // let currentVideoIndex = 0;
    const videos = [previewVideo, previewVideo2];
    const textOverlays = [
        document.getElementById('text-overlay-1'),
        document.getElementById('text-overlay-2')
    ];
    // const fullVideos = ['images/Cinematography showreel.mp4', 'images/Editing Showreel.mp4'];

    let currentVideoIndex = 0;
    videos[0].classList.add('active');
    textOverlays[0].classList.add('active');
    
    previewVideo.addEventListener('loadedmetadata', function() {
        previewVideo.play();
    });

    // Function to load YouTube embed
    const loadYouTubeVideo = (videoId) => {
        fullVideoContainer.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}?rel=0&autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="responsive-iframe youtube-embed"></iframe>`;
    };

    function updateArrows() {
        leftArrow.style.display = currentVideoIndex === 0 ? 'none' : 'flex';
        rightArrow.style.display = currentVideoIndex === videos.length - 1 ? 'none' : 'flex';
    }
    function switchVideo(direction) {
        videos[currentVideoIndex].classList.remove('active');
        textOverlays[currentVideoIndex].classList.remove('active');
        currentVideoIndex = direction === 'next' ? currentVideoIndex + 1 : currentVideoIndex - 1;
        videos[currentVideoIndex].classList.add('active');
        textOverlays[currentVideoIndex].classList.add('active');
        // fullVideo.src = fullVideos[currentVideoIndex];
        if (currentVideoIndex === 0) {
            currentVideoId = cinematographyVideoId;
          } else {
            currentVideoId = editingVideoId;
          }
        loadYouTubeVideo(currentVideoId)
       
        updateArrows();
    }
    leftArrow.addEventListener('click', () => {
        if (currentVideoIndex > 0) {
            switchVideo('prev');
        }
    });
    rightArrow.addEventListener('click', () => {
        if (currentVideoIndex < videos.length - 1) {
            switchVideo('next');
        }
    });
    playButton.addEventListener('click', function () {
        // console.log('Button clicked'); // Add debugging
        modal.style.display = 'block';
        loadYouTubeVideo(currentVideoId)
        // fullVideo.src = fullVideos[currentVideoIndex];
        // fullVideo.play();
        document.body.classList.add('modal-open');
        // previewVideo.play();
    });
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        fullVideoContainer.innerHTML = '';
        // fullVideo.pause();
        // fullVideo.currentTime = 0;
        document.body.classList.remove('modal-open');
        // previewVideo.play();
        videos[currentVideoIndex].play();
    });
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            fullVideoContainer.innerHTML = '';
            // fullVideo.pause();
            // fullVideo.currentTime = 0;
            document.body.classList.remove('modal-open');
            // previewVideo.play();
            videos[currentVideoIndex].play();
        }

        
    });

    
});

