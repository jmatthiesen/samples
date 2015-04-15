require(['services/photoService'], function (photoService) {
    var photoHtml = "";

    photoService.getPhotoList().then(function (images) {
        images.forEach(function (item, index) {
            var createNewRow = (index % 4 == 0);
            if (createNewRow) {
                if (index != 0) {
                    photoHtml += '</div>';
                }
                photoHtml += '<div class="row">';
            }
            photoHtml += '<div class="col-md-3"><img src="' + item + '" alt="" class="img-thumbnail"/></div>'

            document.getElementById('photos').innerHTML = photoHtml;
        })
    });
});