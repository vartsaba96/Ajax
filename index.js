$.ajax('https://repetitora.net/api/JS/Images',
{
    success: function(data){
        data.forEach(element => {
            const image = document.createElement('img');
            image.src = element.original;
            document.querySelector('body').appendChild(image);
        });
    }
});
const resultBlock = document.querySelector("result");
const clickMeButton = document.querySelector("#click-me");
clickMeButton.addEventListener("click", makeRequest);
function makeRequest (){
    resultBlock.innerHTML = 'result';
}