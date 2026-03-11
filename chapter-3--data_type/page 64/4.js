// তুই 3.456 আর 2.789 যোগ করলি। আউটপুটে তুই দশমিকের পর মাত্র 2 ঘর পর্যন্ত দেখতে চাস। কীভাবে দেখাবি? একটা প্রোগ্রাম লিখ।



const num1 = 3.456;
const num2 = 2.789;
const sum = num1 + num2;

const totalSum = sum.toFixed(2);

console.log(totalSum); 