// তোর প্রোগ্রামিং নোটবুকে "JavaScript" লিখে রেখেছিস, আর এটা একটা স্ট্রিং টাইপ ডাটা। এখন তুই দেখতে চাস "JavaScript" == 'JavaScript' আর "JavaScript" === 'JavaScript' দিলে কী আউটপুট আসবে। ব্যাখ্যা কর, কেন একই আউটপুট আসছে।



// i. দুটোর ভেতরে থাকা লেখা (Value) একদম এক।
// ii. ডাবল কোট (") আর সিঙ্গেল কোট (') উভয়ই জাভাস্ক্রিপ্টে 'String' টাইপ।
// iii. মান ও টাইপ দুইটাই মিলে যাওয়ায় == এবং === উভয়ই true দেয়।

const note1 = "JavaScript";
const note2 = 'JavaScript';

console.log(note1 == note2);
console.log(note1 === note2);