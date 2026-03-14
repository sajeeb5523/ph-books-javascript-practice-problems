// একটা পরীক্ষায় যদি কোনো ছাত্রের মার্কস 50-এর কম হলে বলবি "Fail", 50 থেকে 80-এর মধ্যে হলে বলবি "Pass", আর 80-এর বেশি হলে বলবি "A+"।



const mark = 83;

if (mark < 50) {
    console.log("Fail");
}
else if (mark >= 50 && mark <= 80) {
    console.log("Pass");
}
else { 
    console.log("A+");
}