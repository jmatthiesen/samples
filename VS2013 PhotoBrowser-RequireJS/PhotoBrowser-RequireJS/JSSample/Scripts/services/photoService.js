define(['jquery'], function (jq) {
    function getPhotoList() {
        return jq.ajax('/photos.json');
    }

    return {
        getPhotoList: getPhotoList
    };
});