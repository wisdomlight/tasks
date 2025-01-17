const matrix = document.getElementById('matrix')
const modal = document.getElementById('taskModal')
const modalInput = document.getElementById('taskInputModal')
const saveButton = document.getElementById('saveTask')
const closeButton = document.querySelector('.close')

let currentCell;
// this is the sophisitcated js from gemini 
matrix.addEventListener('click', function(e){
    if (e.target.classList.contains('cell')) {
        currentCell = e.target
        modal.style.display = 'block'
        modalInput.value = ''
    }
})

saveButton.addEventListener('click', function() {
    const taskText = modalInput.value.trim()
    if (taskText !== '') {
        const taskItem = document.createElement('p')
        taskItem.textContent = taskText
        currentCell.appendChild(taskItem)
        modal.style.display = 'none'
        currentCell = null
    } else {
        alert('Please enter a task.')
    }
})

closeButton.addEventListener('click', function(){
    modal.style.display = 'none'
    currentCell = null
})

// Close modal if user clicks outside of it
window.addEventListener('click', function(e){
    if (e.target == modal){
        modal.style.display= 'none'
        currentCell = null
    }
})







/*
below is the original js - which was just to find out which .cell was clicked
matrix.addEventListener('click', function(event){
    if (event.target.classList.contains('cell')){
        console.log('A cell was clicked:', event.target)
        const allClasses = event.target.classList
        console.log('All classess:', Array.from(allClasses))

        console.log('All classess as a string:', allClasses.toString())

        allClasses.forEach(className => {
            console.log('Class name:' , className)
        })
    }
})
    */