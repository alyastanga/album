document.addEventListener('DOMContentLoaded', function() {
    const imageGrid = document.getElementById('photos');

    // Example array of media URLs
    const mediaUrls = [
        "assets/album/img1.jpg",
        "assets/album/vid1.mp4",
        "assets/album/vid2.mp4",
    ];

    // Add media to the grid
    mediaUrls.forEach(url => {
        let mediaElement;
        if (url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') || url.endsWith('.gif')) {
            mediaElement = document.createElement('img');
            mediaElement.src = url;
            mediaElement.alt = 'Image';
        } else if (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg')) {
            mediaElement = document.createElement('video');
            mediaElement.src = url;
            mediaElement.controls = true;
            //mediaElement.width = 1200; // Set a fixed width for videos
        }

        if (mediaElement) {
            imageGrid.appendChild(mediaElement);
        }
    });
    // Center align images and videos
    const mediaElements = imageGrid.querySelectorAll('img, video');
    mediaElements.forEach(element => {
        element.style.display = 'block';
        element.style.marginLeft = 'auto';
        element.style.marginRight = 'auto';
    });

    // Initialize Masonry after all media have loaded
    imagesLoaded(imageGrid, function() {
        new Masonry(imageGrid, {
            itemSelector: 'img, video',
            columnWidth: 'img',
            percentPosition: true
        });
    });
});
