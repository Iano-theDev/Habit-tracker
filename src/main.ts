import TaskInterface from "./interfaces/task_interface.js";
import StreakItem from "./classes/streak_item.js";
import StreakArray from "./classes/streak_array.js";

const showForm = document.querySelector('.show-form')! as HTMLButtonElement
const taskName = document.querySelector('#task-name') as HTMLInputElement
const imageUrl = document.querySelector('#image-url') as HTMLInputElement
const taskDate = document.querySelector('#task-date') as HTMLInputElement
const taskButton = document.querySelector('#sub-btn')! as HTMLButtonElement
const displayTask = document.querySelector('.display-task')! as HTMLDListElement
const formContainer = document.querySelector('.habit-from')! as HTMLFormElement
const mainForm = document.querySelector('form') as HTMLFormElement


// creating a new instance of a task via an Event listener

let habitArray = new StreakArray([])

taskButton.addEventListener('click', (e) => {
    e.preventDefault();
    let descriptionValue = taskName.value
    let imageValue = imageUrl.value
    let dateValue = taskDate.value

    // instantiate new streakitem object
    let temp = new StreakItem(
        descriptionValue, 
        new URL(imageValue),
        dateValue,
        new Date
    )

    let habitDisplay = `
    <img src="${temp.image}">
    <p>${temp.description}</p>
    <p>${temp.startDate}</p>
    `
    const habitDiv = document.createElement("div");
    habitDiv.classList.add('card');
    habitDiv.innerHTML += habitDisplay
    displayTask.appendChild(habitDiv)

    //push object to array oject
    habitArray.streakContainer.push(temp)

    // clear input fields
    // descriptionValue = "";
    // imageValue = "";
    // dateValue = "";
    // console.log(habitArray)

    // maximize card
    let singleCard = document.querySelector('.card')! as HTMLDivElement
    singleCard.addEventListener('click', () => {

        console.log()
    })
});



//event listener to show form
showForm.addEventListener('click', (e) => {
    e.preventDefault()
    mainForm.classList.toggle("hide")
})









