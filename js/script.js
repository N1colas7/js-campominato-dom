function createNewGame() {
    let difficulty = parseInt(document.getElementById('select').value);
    
    let cellsNumber;
    let cellsPerRow;

    switch(difficulty){
        case 1:
            cellsNumber = 100;
            cellsPerRow = 10;
            break;
        case 2:
            cellsNumber = 81;
            cellsPerRow = 9;
            break;    
        case 3:
            cellsNumber = 49;
            cellsPerRow = 7;
            break; 
        default:
            cellsNumber = 100;
            cellsPerRow = 10;
            break;       
    }    

    let arrayBombs = createBombsArray(1, cellsNumber);

    //chiamo la funzione per la griglia 
    createGameGrid(arrayBombs, cellsNumber, cellsPerRow);
}

function createBombsArray( min, max)
{
    let bombs = [];
    let i = 0;
    while(i < 16){
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        
        if(!bombs.includes(number)){
            bombs.push(number);
        i++;
        }

    }

    return bombs;
}

function createGameGrid(bombs_array, cellsNumber, cellsPerRow) 
{
    document.querySelector('.container').innerHTML = '';
        /*for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.classList.add('square');
            cell.innerText = i+1;
            cell.addEventListener('click', function(){
                this.classList.toggle('clicked');
                console.log(this.innerText);
        });
        document.querySelector('.grid').appendChild(cell);
    }*/
    const grid = document.createElement('div');
    grid.classList.add('grid');

    const grid_side = cellsPerRow * 100;
    grid.style.width = `${grid_side}px`;
    grid.style.height = `${grid_side}px`;

    for (let i = 0; i < cellsNumber; i++) {
        const cell = createSingleCell(i+1, cellsPerRow);    
        cell.addEventListener('click',function(){
            
            this.classList.toggle('clicked');
            
            if (bombs_array.includes(parseInt(this.innerText))) {
                this.classList.add('red');
                grid.classList.add('events-none');
                alert('Hai preso una bomba')
            }
    })
        grid.appendChild(cell);
    }
    document.querySelector('.container').appendChild(grid)

}

document.getElementById('play').addEventListener('click', function(){
    createNewGame();

})    

function createSingleCell(num, cells_per_row)
{
    const cell = document.createElement('div')

    cell.classList.add('square');

    let sideLength = '100px';

    cell.style.width = sideLength;
    cell.style.height = sideLength;

    cell.innerText = num;

    return cell;
}



