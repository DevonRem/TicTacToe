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
    const player = () => playerToken;
    return { player };
}

const player1 = playerFactory('X');
const player2 = playerFactory('O');

player1.player();
player2.player();
let turn = player1.player();

const gameLogic = () => {
    const mouseover = () => {
        container.addEventListener('mouseover', function(e) {
            if (e.target.innerText === '') {
            e.target.style.background = 'grey';
            }
        });
        
        container.addEventListener('mouseout', function(e) {
            if (e.target.innerText === '') {
            e.target.style.background = 'white';
            }
        });
    };

    const mouseclick = () => {
        container.addEventListener('click', function(e){
            if (e.target.innerText === '') {
                e.target.innerText = turn;
                e.target.style.background = 'white';
                changeTurn();
                }
        });
    };


    const changeTurn = () => {
        if (turn === player1.player()) {
            turn = player2.player();
        }
        else {
            turn = player1.player();
        }
    };

    const gameOver = () => {
        
    };
    return { mouseover, mouseclick };
}

const control = gameLogic();
control.mouseover();
control.mouseclick();

