let grid;
let initialColor = '#DDDDDD';

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
            newGrid.appendChild(element);
        }
    }
}

setUpGrid(16);


