// একটি প্রোগ্রাম লিখ। যা চেক করবে, একজন শিক্ষার্থী ভর্তি হওয়ার যোগ্য কি না। গণিত স্কোর 80-এর বেশি অথবা ইংরেজি স্কোর 85-এর বেশি হতে হবে। আর এইগুলার কোনোটাই সত্যি না হলে বলবি— তোকে বিয়ে দিয়ে দিব।



const mathScore = 81;
const englishScore = 83;

if (mathScore > 80 || englishScore > 85) {
    console.log("good marks");
}
else {
    console.log("toke biye diye dibo");
}