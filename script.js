//players factory to create the players marker
const players = function(marker){
    return {
        marker
    }
}
//gameboard which includes the gameboard array(IIFE)
const gameBoardModule = (function(){
    const playerOne = players('x');
    const playerTwo = players('o')
    
    let gameboard= [];
    gameboard.push(playerOne,playerTwo)
    return {
        gameboard
    }
})();
//game flow module cotrols the status of the game
const displayControllerModule = (()=>{
    let switchPlay = true;
    const winner = document.querySelector('h2')
    const divs = Array.from(document.querySelectorAll('.board-items'))
    const _gameMode = document.querySelector('.game-mode')
    const _startBtn = document.querySelector('.start')
    const _restart = document.querySelector('.restart')
    const startGame = ()=>{
        _startBtn.addEventListener('click',()=>{
            _gameMode.style.display ='none';
            _game()
        })
    }
    const _game = ()=>{
        divs.forEach(div =>{
            div.addEventListener('click',()=>{
                if(switchPlay){
                    div.textContent = gameBoardModule.gameboard[0].marker;
                    div.style.pointerEvents = 'none'
                    switchPlay = false;
                    _win();
                    _restartGame()
                    console.log(switchPlay);
                }else{
                    div.textContent = gameBoardModule.gameboard[1].marker;
                    div.style.pointerEvents = 'none'
                    switchPlay = true;
                    console.log(switchPlay);
                    _win();
                     _restartGame()

                }
            })
        })
    }
    const _win = ()=>{
        //check for possible combinations on the first row
       if(divs[0].textContent === 'x' && divs[1].textContent ==='x'&& divs[2].textContent === 'x'){
        winner.textContent = 'x-wins'
        return;
       }else if(divs[0].textContent === 'o' && divs[1].textContent === 'o' && divs[2].textContent === 'o'){
        winner.textContent = 'o-wins'
        return;
       }
        //combinations on the second row
       else if(divs[3].textContent === 'x' && divs[4].textContent === 'x' && divs[5].textContent === 'x'){
        winner.textContent = 'x-wins'
        return;
       }else if(divs[3].textContent === 'o' && divs[4].textContent === 'o' && divs[5].textContent === 'o'){
        winner.textContent = 'o-wins'
        return;
       }
       //combinations on the third row
       else if(divs[6].textContent === 'x' && divs[7].textContent === 'x' && divs[8].textContent === 'x'){
        winner.textContent = 'x-wins';
        return;
       }else if(divs[6].textContent === 'o' && divs[7].textContent === 'o' && divs[8].textContent === 'o'){
        winner.textContent = 'o-wins';
        return;
       }
       //combinations on first column
      else if(divs[0].textContent === 'x' && divs[3].textContent === 'x' && divs[6].textContent === 'x'){
        winner.textContent = 'x-wins';
        return;
       }else if(divs[0].textContent === 'o' && divs[3].textContent === 'o' && divs[6].textContent === 'o'){
        winner.textContent = 'o-wins';
        return;
       }
       //combinations on the second column
       else if(divs[1].textContent === 'x' && divs[4].textContent === 'x' && divs[7].textContent === 'x'){
        winner.textContent = 'x-wins';
        return;
       }
       else if(divs[1].textContent === 'o' && divs[4].textContent === 'o' && divs[7].textContent === 'o'){
        winner.textContent = 'o-wins';
        return;
       }
       //combinations on the third column
       else if(divs[2].textContent === 'x' && divs[5].textContent === 'x' && divs[8].textContent === 'x'){
        winner.textContent = 'x-wins';
        return;
       }
       else if(divs[2].textContent === 'o' && divs[5].textContent === 'o' && divs[8].textContent === 'o'){
        winner.textContent = 'o-wins';
        return;
       }
       //combinations on the diagonal
       else if(divs[0].textContent === 'x' && divs[4].textContent === 'x' && divs[8].textContent === 'x'){
        winner.textContent = 'x-wins';
        return;
       }else if(divs[0].textContent === 'o' && divs[4].textContent === 'o' && divs[8].textContent === 'o'){
        winner.textContent = 'o-wins';
        return;
       }
       //combinations on the opposite diagonal
       else if(divs[2].textContent === 'x' && divs[4].textContent === 'x' && divs[6].textContent === 'x'){
        winner.textContent = 'x-wins';
        return;
       }
       else if(divs[2].textContent === 'o' && divs[4].textContent === 'o' && divs[6].textContent === 'o'){
        winner.textContent = 'o-wins';
        return;
       }
       //check whether all the divs contain text
       else{
        const check = divs.every(div => div.textContent !== '')
        if(check){
            winner.textContent = "it's a tie";
            return;
        }
       }
    }
    const _restartGame = ()=>{
        if(winner.textContent == ''){
            return;
        }else{
            _gameMode.style.display = 'flex';
            winner.style.display = 'flex'
            _startBtn.style.display = 'none'
            _restart.style.display = 'flex'
            _gameMode.classList.add('grid')
        }
        _restart.addEventListener('click',()=>{
           _restart.style.display = 'none'
           _gameMode.style.display = 'none'
           switchPlay = true;
           startGame();
        //    startBtn.style.display = 'flex'
           winner.textContent= ''
           divs.forEach(div =>{
            if(div.textContent !== ''){
                div.textContent = ''
                div.style.pointerEvents = 'fill';
            }
           })
        })
    }
    return {
        startGame
    }
})();
displayControllerModule.startGame()