// ধর, তুই '56.78' আর '12.34' স্ট্রিং আকারে পাইলি। এখন এই দুইটা যোগ করে কীভাবে আসল সংখ্যা বের করবি? সেটা বের করার একটা প্রোগ্রাম লিখ।



const stringNum1 = "56.78";
const stringNum2 = "12.34";

const num1 = parseFloat(stringNum1);
const num2 = parseFloat(stringNum2);    

const sum = num1 + num2;

console.log(sum);