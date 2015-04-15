import jq  = require('jquery');

export function getPhotoList(): JQueryXHR {
    return jq.ajax('/photos.json');
}