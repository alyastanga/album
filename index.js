document.addEventListener('DOMContentLoaded', function() {
    const imageGrid = document.getElementById('photos');

    const mediaUrls = [
        "assets/album/img1.jpg",
        "assets/album/vid1.mp4",
        "assets/album/vid2.mp4",
    ];

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
    const mediaElements = imageGrid.querySelectorAll('img, video');
    mediaElements.forEach(element => {
        element.style.display = 'block';
        element.style.marginLeft = 'auto';
        element.style.marginRight = 'auto';
    });

    imagesLoaded(imageGrid, function() {
        new Masonry(imageGrid, {
            itemSelector: 'img, video',
            columnWidth: 'img',
            percentPosition: true
        });
    });
});