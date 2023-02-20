let value = 10;
console.log(1);

function myFunc1() {
  //   console.log(value);
  console.log(2);
  // 함수를 호출할떄 함수가 선언됨
}

value = value + 10;
console.log(3);

myFunc1();
console.log(4);
// 제일 중요 런타임 실행 순서

// 변수선언 펑션 선언 동작에대한 코드 실행
// 호출이 없으면 안들어감

let z = 10;
function plus() {
  z = z + 10;
  return z; //리턴함수
}
function plusWithoutReturn() {
  z = z + 10;
}
const w = plus();
console.log(plus());
console.log(plusWithoutReturn());

const y = plus();
console.log(z);

// ↑ Void형 함수(리턴이 없는 함수)
// ↑ return이 들어가면 리턴함수
// 권고사항 return으로 쓰는게 쓸모가 많음

// function multyply(a, b) {
//   return a + b;
// }

const valueA = function (a, b) {
  return a + b;
};
console.log(valueA);

// const multyply1 = function (a, b) {
//   return a + b;
// };

// const multyply = (a, b) => {
//   return a + b;
// };

const multyply = (a, b) => a * b;

console.log(multyply(2, 3));

// 중요!! 애로우함수 모양에 익숙해지자

// console.log(sum(arr));
// console.log(sumArrow(arr));
const myArray = [1, 2, 3];

let firstName = "Kim";
let lastName = "Jac";
// var firstName = "Kim";
// var lastName = "Young-Jae";
// var=기본적으로 윈도우로 선언됨
const myObject = {
  firstName: "김",
  lastName: "영재",
  display: function () {
    console.log(this);
    return this.firstName + "" + this.lastName;
  },
};
console.log(myObject.display());

// THIS. 객체내에있는 걸 가리킴
// 객체안에 함수를 만들때 function으로 만듬 this는 식구로 가리킴
