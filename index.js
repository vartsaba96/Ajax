
const resultBlock = document.querySelector("#result");
const pageNumber = document.querySelector("#page-number");
const clickMeButton = document.querySelector("#click-me");
clickMeButton.addEventListener("click", makeRequest);

function makeRequest (){
    $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber.value}&count=1`, {
        success: function(data){
            data.forEach(element => {
                const image = document.createElement('img');
                image.src = element.original;
                document.querySelector('#result').appendChild(image);
            });
        }
    }); 
}