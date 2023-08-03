const container = document.querySelector('.container');

const gameBoard = (() => {
    const create = () => {
        for (let rows = 0; rows < 3; rows++) {
            const row = document.createElement('div');
            row.classList.add('row');
            row.setAttribute('id','a' + rows);
            container.appendChild(row);
            for (let columns = 0; columns < 3; columns++) {
                const col = document.createElement('div');
                col.classList.add('col');
                col.setAttribute('id','b' + columns);
                row.appendChild(col);
            }
        }
    }
    
    return {
        create
    };
})();

gameBoard.create();


const playerFactory = (playerToken) => {
    const player = () => console.log(playerToken);
    return { player };
}

const player1 = playerFactory('x');

player1.player();

container.addEventListener('mouseover', function(e) {
    e.target.style.background = 'grey';
});

container.addEventListener('mouseout', function(e) {
    if (e.target.style.background !== 'black') {
    e.target.style.background = 'white';
    }
});