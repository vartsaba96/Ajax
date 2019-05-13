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

function getTasks(){
    var promise =axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=123`);
    return promise.then((data)=>{
        return data.data;
    });
}

function createTasks(title){
    var promise =axios.post(`https://repetitora.net/api/JS/Tasks`,{
        widgetId:123,
        title:title,
    });
    return promise.then((data)=>{
        return data.data;
    });
}