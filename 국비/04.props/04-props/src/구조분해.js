const mydata = {a: 100, b: 200, c: 300, d: 400, e: 500};

console.log(mydata.a);
console.log(mydata.c);
console.log(mydata.e);

const { a, c, e } = mydata;
console.log(a);
console.log(c);
console.log(e);

// b 재정의
const mycopy = {...mydata, b: 2000}
console.log(mycopy);
