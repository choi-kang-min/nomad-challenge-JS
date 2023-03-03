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
player.sayHello("lynn");