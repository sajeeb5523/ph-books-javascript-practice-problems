// একজন চাকরিপ্রার্থী পরীক্ষা দিতে পারবে, যদি তার বয়স 30-এর কম হয় এবং কাজের অভিজ্ঞতা 2 বছরের বেশি হয়। আর না হয় চাকরির পরীক্ষা দিতে পারবে না। এমন একটা প্রোগ্রাম লিখ।



const age = 24;
const workExperience = 2.5;

if (age < 30 && workExperience > 2) {
    console.log("exam dite parbe");
}
else { 
    console.log("exam dite parbe na");
}