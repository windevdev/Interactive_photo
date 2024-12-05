function upDate(previewPic) {
    console.log('Mouse over event triggered');

    console.log('Alt text:', previewPic.alt);
    console.log('Source:', previewPic.src);

    let imageContainer = document.getElementById('image');

    imageContainer.textContent = previewPic.alt;

    imageContainer.style.backgroundImage = `url('${previewPic.src}')`;

    imageContainer.style.backgroundSize = 'cover';
    imageContainer.style.backgroundPosition = 'center';
}

function undo() {
    let imageContainer = document.getElementById('image');

    imageContainer.style.backgroundImage = 'url("")';

    imageContainer.textContent = "Hover over an image below to display here.";

    imageContainer.style.backgroundSize = 'auto';
    imageContainer.style.backgroundPosition = 'initial';
}
