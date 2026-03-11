// ধর তুই একটা মজার অঙ্ক করছিস। তুই ‘20’ লিখে ফেললি, কিন্তু সেটা স্ট্রিং আকারে। স্ট্রিং থেকে আসল সংখ্যায় কনভার্ট করে তার সাথে 10 যোগ করতে পারবি?



const stringNumber = "20";
const actualNumber = parseInt(stringNumber);
const result = actualNumber + 10;

console.log(result);