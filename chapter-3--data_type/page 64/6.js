// ধর, তোর কাছে '10.5678' আর '5.4321' আছে। তুই আউটপুটে দশমিকের পর 1 ঘর পর্যন্ত দেখতে চাস। সেটা কীভাবে দেখাবি?



const num1 = 10.5678;
const num2 = 5.4321;

const sum = num1 + num2;
const totalSum = sum.toFixed(1);

console.log(totalSum);