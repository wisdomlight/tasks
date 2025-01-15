const matrix = document.getElementById('matrix')

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