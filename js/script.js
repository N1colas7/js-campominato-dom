function createGridSquare(num) 
{
    const currentElement = document.createElement('div')

    currentElement.classList.add('square');
    currentElement.innerText= num

    return currentElement;
}

let grid = document.getElementById('grid');

let button_first = document.getElementById('play')
button_first.addEventListener('click',function () {
        
    for (let i = 1; i <= 100; i++) {
        let containerSquare = document.getElementById('container')
        let currentSquare = createGridSquare(i);
       
        
        currentSquare.addEventListener('click',function () {
        currentSquare.innerText = i;
    
        
        this.classList.add('clicked');
        console.log(`Hai cliccato la cella numero ${i} `);
    })
        grid.appendChild(currentSquare);
        
    }
})

