function upDate(previewPic) {

    console.log(previewPic);

    $('#image').css('background-image', 'url('+previewPic.src+ ')');

    $('#image').text(previewPic.alt);
}

function unDo() {

    $('#image').text("Hover over an image below to display here.");

    $('#image').css('background-image', 'none');
}
