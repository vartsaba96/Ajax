 /*function getImagesOld(pageNumber){
    var promise =$.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise;
}
*/
function getImages(pageNumber){
    var promise =axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise.then((data)=>{
        return data.data;
    });
}