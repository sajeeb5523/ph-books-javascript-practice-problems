// প্রোগ্রাম লিখে বের কর।তোর কাছে 60 টাকা আছে। তুই যদি প্রতিবার 15 টাকা করে খরচ করিস, কয়বার খরচ করতে পারবি? এবং খরচের পর কয় টাকা বাকি থাকবে, সেটা বের করতে একটা প্রোগ্রাম লিখ।



const totalMoney = 60;
const expense = 15;

const timesCanSpend =totalMoney / expense;
const remainingMoney = totalMoney % expense;

console.log(timesCanSpend);
console.log(remainingMoney);