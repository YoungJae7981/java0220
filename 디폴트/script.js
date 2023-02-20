// var value1 = 1;
// value1 = value1 + 1;
// var value1 = value1 + 1;

// console.log(value1);
// // var=초기에 만들어짐 이미 선언했던 거 추가 선언 가능 //
// let counter = 2;
// counter = counter + 1;
// let counter = counter + 1;
// console.log(counter);
// // let //

const div = document.querySelector("#div");
const cDiv = document.querySelector(".cDiv");
console.log(div);
console.log(cDiv);
div.style.color = "greenyellow";

const arr = [1, 2, 3];
// 상수배열설명함
arr[0] = 5;
// 재선언하지 않는 한 자식들 바꾸는것 가능
console.log(arr);

// div=객체 style = 객체 color =객체
// 자바스크립트 상수=자식 바꾸는건 상관없음 그 배열 값도 바뀌는건 상관없음

// 8개의 data type이 존재함
/*
1) 문자열 String
2) 숫자 Number
3) 큰 숫자 Bigint(아주아주아주 큰숫자 숫자 변수할당할떄 메모리를 벗어날정도로 큰숫자 효율적으로 대부분의 숫자를 저장하는 메모리에는 담을 수 없다 큰 숫자를 담을땐 먼저말해야함)
4) 불린 Boolean(참 또는 거짓)
5) 정의되지않는 Undefined
6) 널 Null 
7) 심볼 Symbol
8) 객체 Object

*/

const str = "youngjae 's house";
console.log(typeof str);

const n = 100;
console.log(typeof n);
const yerOrNo = true; //false
console.log(typeof yerOrNo);
// 예약어 자바스크립트가 쓰는 단어
// 사용자가 ex) const 등 단어들을 사용할 수 없음

let x;
console.log(x);

// =undefined 정의 되지가않음
// 객체 ex)
const obj1 = ["youngjae", "john", "mike"];
const obj2 = {
  name: "Paul",
  age: 20,
};
const obj3 = document.querySelector("#div");
// querySelector(return이들어가는듯)
console.log(typeof obj1);
console.log(typeof obj2);
console.log(typeof obj3);
