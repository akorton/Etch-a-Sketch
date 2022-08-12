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

setUpGrid(16);

const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', (e)=>{
    console.log(grid);
    resetGrid();
});

const resetGrid = ()=>{
    grid.childNodes.forEach((cell)=>{
        cell.style.backgroundColor = initialColor;
    });
}
