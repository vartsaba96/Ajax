const resultBlock = document.querySelector("#result");
const pageNumber = document.querySelector("#page-number");
const clickMeButton = document.querySelector("#click-me");
const getTasksButton = document.querySelector("#tasks-me");

clickMeButton.addEventListener("click", ()=>{
    const promise = getImages(pageNumber.value);
    promise
    .then(onImagesReceived);
});
getTasksButton.addEventListener("click", ()=>{
    const promise = getTasks();
    promise
    .then(onTasksReceived);
});
createTasks('learn react').then((data) =>{
    console.log(data);
});

function onImagesReceived(data) {
        data.forEach(element => {
            const image = document.createElement('img');
            image.src = element.original;
            document.querySelector('#result').appendChild(image);
        });
    }
    function onTasksReceived(tasks) {
        tasks.forEach(task => {
            const li=document.createElement('li');
            li.innerHTML=task.title;
            document.querySelector('#result').appendChild(li);
        });
    }
    