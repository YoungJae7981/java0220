const func1 = () => {
  console.log("Time Out");
};
// ||선언
const func2 = () => {
  console.log("Interval");
};

const myTimeout = setTimeout(func1, 2000);
const myTimeout2 = setTimeout(func1, 5000);
const myInterval = setInterval(func2, 1000);
