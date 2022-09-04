const ROCK = '바위';
const SCISSORS = '가위';
const PAPER = '보';



// 입력받기
let userInput = prompt('가위, 바위, 보');

//입력값 검증하기
if (userInput !== SCISSORS && userInput !== ROCK && userInput !== PAPER) {
    alert('가위, 바위, 보 중 하나를 입력해주세요');

}



// 랜덤값에 따른 컴퓨터 출력
let rnd = Math.random();
let comInput = null;
if (rnd < 0.33 && 0 <= rnd) {
    comInput = SCISSORS;
}
else if (0.33 <= rnd && rnd <0.66) {
    comInput = ROCK;
}
else if (0.66 <= rnd){ // 가능한 변수 통제를 위해 else 사용 지양. 되도록 else if로 구성.
    comInput = PAPER;
}

// 유저가 입력한 값과 컴퓨터의 출력값을 비교하여 결과 생성
if (userInput === comInput) {
    alert(`컴퓨터는 ${comInput}를 냈습니다!`);
    alert('무승부!');
}
else if (userInput !== comInput) {
    if (userInput === SCISSORS) {
        if (comInput === ROCK) {
            alert(`컴퓨터는 ${comInput}를 냈습니다!`);
            alert('컴퓨터 승!');
        }
        else if (comInput === PAPER) {
            alert(`컴퓨터는 ${comInput}를 냈습니다!`);
            alert('유저 승!');
        }
    }

    else if (userInput === ROCK) {
        if (comInput === SCISSORS) {
            alert(`컴퓨터는 ${comInput}를 냈습니다!`);
            alert('유저 승!');
        }
        else if (comInput === PAPER) {
            alert(`컴퓨터는 ${comInput}를 냈습니다!`);
            alert('컴퓨터 승!');
        }
    }

    else if (userInput === PAPER) {
        if (comInput === ROCK) {
            alert(`컴퓨터는 ${comInput}를 냈습니다!`);
            alert('유저 승!');
        }
        else if (comInput === SCISSORS) {
            alert(`컴퓨터는 ${comInput}를 냈습니다!`);
            alert('컴퓨터 승!');
        }
    }
}