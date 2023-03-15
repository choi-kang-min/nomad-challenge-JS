const a = 5; // 값이 바뀌지 않음 : const
const b = 2;
let myName = "choi"; // 후에 수정이 가능함 : let

console.log(a + b); // console에다가 값을 출력함 : console.log()
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "choichoi"; // 변수의 값을 변경함

console.log("your new name is " + myName);

let amIFat = true; // boolean

console.log(amIFat);

amIFat = null; // 아무것도 없음
let amIHere; // 정의하지 않음 : undefined

console.log(amIFat, amIHere);

//----------- array

const daysOfWeek = ["mon", "tue" , "wed", "thu", "fri", "sat"]; // 변수에 여러개의 값을 넣을 수 있음 : array
// [] 안에 ,으로 구분지어 데이터를 넣음

console.log(daysOfWeek[4]); // n번째 정보를 꺼내고 싶을 때는 왼쪽에서 오른쪽으로 0부터 세어 변수명 뒤에 []안에 넣어 사용한다. (n-1을 넣는다)

daysOfWeek.push("sun"); // 배열이름.push()를 통해 배열에 값을 추가한다. (const여도 상관없음)

console.log(daysOfWeek);

//----------- object

// const playerName ="nico";
// const playerPoints = 121212;
// const playerhandsome = false;
// v 아래처럼 정리가 가능

const player = { // object
    name : "nico", // object 안에 있는 요소 : property
    points: 121212,
    fat : true,
}; // 이거는 object라고 함, 마찬가지로 배열 안의 값을 변경할 수 있다.
// player.name와 같은 방식으로 접근 가능하다.
// array는 [] 안에 의미가 거의 동일한 것들을 묶는 데 유용한 방면
// object는 {} 안에 같은 요소의 다른 의미를 가진 것들을 묶는데 유용하다

console.log(player); // object 전체를 불러옴
console.log(player.name); // object 안에 name라는 이름을 가진 값을 가져옴
console.log(player["name"]); // 이런 식으로 변형이 가능하다

player.lastName = "potato"; // player라는 object 안에 선언하지 않은 property를 입력하면
console.log(player.lastName); // 추가된다
//---------- function 
function plus(a, b) { // 소괄호 안으로 데이터를 받는 변수(?) : argument
    console.log(a + b); // 이 변수는 plus 안에서만 사용가능하다
}
function divide(a, b) {
    console.log(a / b);
}
plus(60, 8);
divide(98, 20);

const player = { //object 안에
    name : "nico",
    sayHello : function(otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you!");
    }
};
console.log(player.name);
player.sayHello("lynn");
player.sayHello("lulu");

////////// 계산기 함수 object
const claculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    },
};
const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.plus(timesResult, plusResult);
const powerResule = calculator.power(divideResult, minusResult);

/////////// 조건문
const age = prompt("How old are you?");

parseInt(age); // 받은 값이 숫자라면 string이었던 것이 int로 바뀜
// 만일 age에 글자가 들어가 있다면 NaN으로 출력됨(Not a Number)
console.log(typeof age); // typeof -> age가 무슨 타입인지 알려준다 -> string, int, float 등
console.log(isNaN(age)); // boolean형식으로 반환하며, false라면 숫자라는 거임, true면 숫자가 아니라는 거겠지?

// if ,else if
if (isNaN(age) || age < 0) { // 숫자가 아닐 때, 또는 나이가 0살보다 어릴 떄
    console.log("please write a number");
} else if (age < 18) { // 숫자가 18보다 작을 때
    console.log("You are too young");
} else if(age >= 18 && age <= 50) { // 숫자가 18이상, 50이하일 떄
    console.log("you can drink it!");
}  else if(age >= 51 && age <= 80) { // 숫자가 51이상, 80이하일 때
    console.log("you should exercise");
} else if(age > 80) { // 숫자가 80을 넘을 때
    console.log("You can do whatever you want..!");
} else if (age === 100) {
    console.log("wow wou are wise");
}