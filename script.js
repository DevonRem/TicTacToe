const container = document.querySelector('.container');
const restartbtn = document.querySelector('.restartbtn');

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


const playerFactory = (name, playerToken) => {
    const player = () => playerToken;
    const Name = () => name;
    return { player, Name };
}

const player1 = playerFactory(prompt("Enter your name for player1"),'X');
const player2 = playerFactory(prompt("Enter your name for player2"), 'O');

player1.player();
player2.player();
let turn = player1.player();
let moves = 0;

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
                gameOver();
                moves++;
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
        //first col
        if(allcols[0].innerText === player1.player() && allcols[1].innerText === player1.player() && allcols[2].innerText === player1.player() ) {
            alert(player1.Name() +" Wins!");
        }
        if(allcols[0].innerText === player2.player() && allcols[1].innerText === player2.player() && allcols[2].innerText === player2.player() ) {
            alert(player2.Name() +" Wins!");
        }
        //second col
        if(allcols[3].innerText === player1.player() && allcols[4].innerText === player1.player() && allcols[5].innerText === player1.player() ) {
            alert(player1.Name() +" Wins!");
        }
        if(allcols[3].innerText === player2.player() && allcols[4].innerText === player2.player() && allcols[5].innerText === player2.player() ) {
            alert(player2.Name() +" Wins!");
        }
        //third col
        if(allcols[6].innerText === player1.player() && allcols[7].innerText === player1.player() && allcols[8].innerText === player1.player() ) {
            alert(player1.Name() +" Wins!");
        }
        if(allcols[6].innerText === player2.player() && allcols[7].innerText === player2.player() && allcols[8].innerText === player2.player() ) {
            alert(player2.Name() +" Wins!");
        }
        //first row
        if(allcols[0].innerText === player1.player() && allcols[3].innerText === player1.player() && allcols[6].innerText === player1.player() ) {
            alert(player1.Name() +" Wins!");
        }
        if(allcols[0].innerText === player2.player() && allcols[3].innerText === player2.player() && allcols[6].innerText === player2.player() ) {
            alert(player2.Name() +" Wins!");
        }
        //second row
        if(allcols[1].innerText === player1.player() && allcols[4].innerText === player1.player() && allcols[7].innerText === player1.player() ) {
            alert(player1.Name() +" Wins!");
        }
        if(allcols[1].innerText === player2.player() && allcols[4].innerText === player2.player() && allcols[7].innerText === player2.player() ) {
            alert(player2.Name() +" Wins!");
        }
        //third row
        if(allcols[2].innerText === player1.player() && allcols[5].innerText === player1.player() && allcols[8].innerText === player1.player() ) {
            alert(player1.Name() +" Wins!");
        }
        if(allcols[2].innerText === player2.player() && allcols[5].innerText === player2.player() && allcols[8].innerText === player2.player() ) {
            alert(player2.Name() +" Wins!");
        }
        //diagonal 1
        if(allcols[2].innerText === player1.player() && allcols[4].innerText === player1.player() && allcols[6].innerText === player1.player() ) {
            alert(player1.Name() +" Wins!");
        }
        if(allcols[2].innerText === player2.player() && allcols[4].innerText === player2.player() && allcols[6].innerText === player2.player() ) {
            alert(player2.Name() +" Wins!");
        }
        //diagonal 2
        if(allcols[0].innerText === player1.player() && allcols[4].innerText === player1.player() && allcols[8].innerText === player1.player() ) {
            alert(player1.Name() +" Wins!");
        }
        if(allcols[0].innerText === player2.player() && allcols[4].innerText === player2.player() && allcols[8].innerText === player2.player() ) {
            alert(player2.Name() +" Wins!");
        }
        //tie
        console.log(moves);
        if(moves === 8) {
            alert("Tie!");
            moves = 0;
        }

    };

    const restartGame = () => {
        restartbtn.addEventListener('click', function(e){
            
        });
    }

    return { mouseover, mouseclick };
}



let allcols = document.querySelectorAll('.row > .col');
console.log(allcols);

const control = gameLogic();
control.mouseover();
control.mouseclick();

