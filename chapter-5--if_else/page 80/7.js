// একজন শিক্ষার্থীকে পরীক্ষা দিতে দেয়া হবে, যদি তার উপস্থিতি 80 শতাংশের বেশি এবং হোমওয়ার্ক জমা দেয়া থাকে। নচেৎ অটো ফেল। এই শর্তের জন্য প্রোগ্রাম লিখ।



const attendance = 85;
const isHomeworkSubmitted = true;

if (attendance > 80 && isHomeworkSubmitted == true) {
    console.log("exam dite dewa hobe");
}
else {
    console.log("auto fail");
}