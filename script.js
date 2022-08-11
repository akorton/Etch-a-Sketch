let grid;
let initialColor = '#DDDDDD';

const setUpGrid = (num)=>{
    grid = document.querySelector('.grid');
    for (let i = 0; i < num; i++){
        for (let j = 0; j < num; j++){
            let element = document.createElement('div');
            element.classList.add('cell');
            element.style.backgroundColor = initialColor;
            element.style.gridArea = `${i + 1} / ${j + 1} / ${i + 2} / ${j + 2}`;
            grid.appendChild(element);
        }
    }
}

setUpGrid(16);


