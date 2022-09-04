// 전역 상수 설정
const ROCK = '바위';
const SCISSORS = '가위';
const PAPER = '보';

function userInputFunc() { // 유저 입력값
    let userInput = null;
    let comInput = null;
    clickRock();
    clickScissor();
    clickPaper();
}

function clickRock() { // 바위를 냈을 떄 결과값
    let rock = document.querySelector('#rock');
    rock.addEventListener('click', e => {
        userInput = rock;
        // alert('rock');
        comInputFunc();
        // alert(comInput);
        if (comInput === ROCK) {
            alert(`컴퓨터는 ${comInput}를 냈습니다.`);
            alert('비겼습니다!');
        }
        else if (comInput === SCISSORS) {
            alert(`컴퓨터는 ${comInput}를 냈습니다.`);
            alert('이겼습니다!');
        }
        else if (comInput === PAPER) {
            alert(`컴퓨터는 ${comInput}를 냈습니다.`);
            alert('졌습니다!');
        }
    })
}

function clickScissor() { // 가위를 냈을 때 결과값
    let scissor = document.querySelector('#scissor');
    scissor.addEventListener('click', e => {
        userInput = scissor;
        // alert('scissor');
        comInputFunc();
        // alert(comInput);
        if (comInput === SCISSORS) {
            alert(`컴퓨터는 ${comInput}를 냈습니다.`);
            alert('비겼습니다!');
        }
        else if (comInput === PAPER) {
            alert(`컴퓨터는 ${comInput}를 냈습니다.`);
            alert('이겼습니다!');
        }
        else if (comInput === ROCK) {
            alert(`컴퓨터는 ${comInput}를 냈습니다.`);
            alert('졌습니다!');
        }
    })
}

function clickPaper() { // 보를 냈을 때 결과값
    let paper = document.querySelector('#paper');
    paper.addEventListener('click', e => {
        userInput = paper;
        // alert('paper');
        comInputFunc();
        // alert(comInput);
        if (comInput === PAPER) {
            alert(`컴퓨터는 ${comInput}를 냈습니다.`);
            alert('비겼습니다!');
        }
        else if (comInput === ROCK) {
            alert(`컴퓨터는 ${comInput}를 냈습니다.`);
            alert('이겼습니다!');
        }
        else if (comInput === SCISSORS) {
            alert(`컴퓨터는 ${comInput}를 냈습니다.`);
            alert('졌습니다!');
        }
    })
}

function comInputFunc() { // 컴퓨터 입력값
    let rnd = Math.random();
    if (rnd < 0.33) comInput = ROCK;
    else if (rnd < 0.66) comInput = SCISSORS;
    else if (rnd >= 0.66) comInput = PAPER;
}

userInputFunc();