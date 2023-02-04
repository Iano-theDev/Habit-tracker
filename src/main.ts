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

    //push object to array oject
    habitArray.streakContainer.push(temp)
    
    // console.log(habitArray)

    let habitDisplay = `
    <img src="${temp.image}">
    <p>${temp.description}</p>
    <p>${temp.startDate}</p>
    `

    const habitDiv = document.createElement("div");
    habitDiv.classList.add('card');
    habitDiv.innerHTML += habitDisplay
    displayTask.appendChild(habitDiv)

// maximize / show card
habitDiv.addEventListener('click', () => {
    let expandCard: HTMLDivElement = document.createElement('div');
    expandCard.classList.add('expand')
    expandCard.innerHTML = habitDisplay

    //create div container for expanded card buttons
    let cardBtn: HTMLDivElement = document.createElement('div');

    //create close and delete buttons
    const closeBtn: HTMLButtonElement = document.createElement('button')
    closeBtn.innerHTML = `<button class="close">close</button>`
    closeBtn.classList.add('close')
    const deleteBtn: HTMLButtonElement = document.createElement('button')
    deleteBtn.innerText = `<button class="delete">delete</button>`
    closeBtn.classList.add('delete')

    //add buttons to container
    cardBtn.appendChild(closeBtn)
    cardBtn.appendChild(deleteBtn)

    //add card container to expanded card
    cardBtn.classList.add('card-btn')
    expandCard.appendChild(cardBtn)
    displayTask.appendChild(expandCard)

    closeBtn.addEventListener('click', (e) =>{
        // expandCard.classList.remove('exapand')
        displayTask.removeChild(expandCard)
        console.log('clicked')

    deleteBtn.addEventListener('click', (e) => {
            console.log(temp.id)
            console.log('Yeou clicked delete')
        })


    // console.log(temp)
})


    //read from array
    habitArray.streakContainer.forEach(element => {


    });

    // clear input fields
    // descriptionValue = "";
    // imageValue = "";
    // dateValue = "";
    // console.log(habitArray)
});



//event listener to show form
showForm.addEventListener('click', (e) => {
    e.preventDefault()
    mainForm.classList.toggle("hide")
})









