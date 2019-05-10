const resultBlock = document.querySelector("#result");
const pageNumber = document.querySelector("#page-number");
const clickMeButton = document.querySelector("#click-me");
clickMeButton.addEventListener("click", ()=>{
    const promise = getImages(pageNumber.value);
    promise
    .then(onDataReceived);
});


function onDataReceived(data) {
        data.forEach(element => {
            const image = document.createElement('img');
            image.src = element.original;
            document.querySelector('#result').appendChild(image);
        });
    }
