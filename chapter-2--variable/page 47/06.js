// তোর কাছে 500 টাকা আছে, প্রতিবার তুই 75 টাকা খরচ করবি। কয়বার খরচ করতে পারবি আর শেষে কয় টাকা বাকি থাকবে, সেটা বের করার একটা প্রোগ্রাম লিখ।



const totalMoney = 500;
const expense = 75;

const timeCanSpend = totalMoney / expense;
const remainingMoney = totalMoney % expense;

console.log(timeCanSpend);
console.log(remainingMoney);