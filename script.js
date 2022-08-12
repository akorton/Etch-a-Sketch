let grid;
let initialColor = '#E5E5E5';
let newColor = '#ffa500';
let invisibleBorders = false;
let anarchyFlag = false;

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
            if (invisibleBorders) element.classList.add('invisibleBorders');
            element.style.backgroundColor = initialColor;
            element.style.gridArea = `${i + 1} / ${j + 1} / ${i + 2} / ${j + 2}`;
            element.addEventListener('mouseover', (e)=>{
                let curElement = e.target;
                if (!anarchyFlag) curElement.style.backgroundColor = newColor;
                else curElement.style.backgroundColor = getRandomColorRGB();
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
});


const toggleBordersButton = document.querySelector('.borders');
toggleBordersButton.addEventListener('click', (e)=>{
    invisibleBorders = !invisibleBorders;
    grid.childNodes.forEach(cell=>{
        cell.classList.toggle("invisibleBorders");
    })
});

const colorInput = document.querySelector('.choose-color input');
colorInput.style.borderColor = newColor;
const colorSubmitButton = document.querySelector('.choose-color button');

colorSubmitButton.addEventListener('click', (e)=>{
    newColor = colorInput.value;
    colorInput.style.borderColor = newColor;
    alert('Color successfully changed!');
});

const anarchyButton = document.querySelector('.anarchy');
const anarchyExitButton = document.querySelector('.anarchy-exit');
anarchyButton.addEventListener('click', (e)=>{
    anarchyFlag = true;
    anarchyButton.classList.toggle('invisibleButton');
    anarchyExitButton.classList.toggle('invisibleButton');
})
anarchyExitButton.addEventListener('click', (e)=>{
    anarchyFlag = false;
    anarchyButton.classList.toggle('invisibleButton');
    anarchyExitButton.classList.toggle('invisibleButton');
})

const getRandomColorRGB = ()=>{
    let r = getRandomInteger(0, 256).toString(16);
    let g = getRandomInteger(0, 256).toString(16);
    let b = getRandomInteger(0, 256).toString(16);
    return `#${r}${g}${b}`;
}


const getRandomInteger = (from, to)=>{
    return Math.floor(Math.random() * (to - from) + from);
}
