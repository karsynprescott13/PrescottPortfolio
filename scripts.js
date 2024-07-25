document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-item img');
    const modal = document.getElementById('artModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    const span = document.getElementsByClassName('close')[0];

    images.forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = image.src;
            captionText.innerHTML = image.getAttribute('data-description');
        });
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal content, close the modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
