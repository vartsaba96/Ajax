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
/*createTasks('learn NODEJS').then((data) =>{
    console.log(data);
});
*/
/*
deleteTasks('16c9ffec-82c0-4ff6-af85-389690d03e49').then((data) =>{
    console.log(data);
});
*/
updateTasks('Learn NoSql', '8fccc982-7791-454c-a80d-494159661f77').then((data)=>{
    console.log(data);
})


function onImagesReceived(data) {
        data.forEach(element => {
            const image = document.createElement('img');
            image.src = element.original;
            document.querySelector('#result').appendChild(image);
        });
    }
    function onTasksReceived(tasks) {
        const result = document.querySelector('#result');
        result.innerHTML = '';
        tasks.forEach(task => {
            const li=document.createElement('li');
            li.innerHTML=task.title;
            li.dataset.id=task.id;
            result.appendChild(li);
        });
    }
    