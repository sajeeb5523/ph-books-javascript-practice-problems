// একটা প্রোগ্রাম লিখে দেখ, 25 এবং "25"-এর মধ্যে 25 == "25" এবং 25 === "25" দিলে কী আউটপুট আসবে এবং কেন সেটা হয়, সেটা কমেন্ট করে লিখ। 



const number = 25;
const stringNumber = "25";

// i. 25 == "25"
// এটি শুধু মান (Value) দেখে
console.log(number == stringNumber); 

// ii. 25 === "25"
// এটি মান এবং ডাটা টাইপ দুইটাই দেখে 
console.log(number === stringNumber);