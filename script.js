let grid;
let initialColor = '#E5E5E5';
let newColor = '#ffa500';

const setUpGrid = (num)=>{
    let content = document.querySelector('.content');
    let oldGrid = document.querySelector('.grid');
    content.removeChild(oldGrid);
    let newGrid = document.createElement('div');
    content.appendChild(newGrid);
    newGrid.classList.add('grid');
    for (let i = 0; i < num; i++){
        for (let j = 0; j < num; j++){
            let element = document.createElement('div');
            element.classList.add('cell');
            element.style.backgroundColor = initialColor;
            element.style.gridArea = `${i + 1} / ${j + 1} / ${i + 2} / ${j + 2}`;
            element.addEventListener('mouseover', (e)=>{
                let curElement = e.target;
                curElement.style.backgroundColor = newColor;
            });
            newGrid.appendChild(element);
        }
    }
    grid = newGrid;
}

setUpGrid(20);

const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', (e)=>{
    resetGrid();
});

const resetGrid = ()=>{
    grid.childNodes.forEach((cell)=>{
        cell.style.backgroundColor = initialColor;
    });
}

const inputNumberOfSquaresButton = document.querySelector('.number-of-squares');
inputNumberOfSquaresButton.addEventListener('click', (e)=>{
    let numberOfSquares = +prompt('Input number of squares in one row: ');
    console.log(numberOfSquares);
    if (numberOfSquares <= 0 || numberOfSquares > 100 || isNaN(numberOfSquares) || !Number.isInteger(numberOfSquares)) {
        alert('Incorrect number of squares:\nNumber of squares should be poisitive natural number less than 101.');
        return;
    }
    setUpGrid(numberOfSquares);
})
