// কোনো বইয়ের পৃষ্ঠাসংখ্যা 100-এর কম হলে বলবি "Small book", 100 থেকে 500-এর মধ্যে হলে বলবি "Mid-size book", আর 500-এর বেশি হলে বলবি "heart-attack size book"।



const bookPage = 150;

if (bookPage < 100) {
    console.log("Small book");
}
else if (bookPage >= 100 && bookPage <= 500) {
    console.log("Mid-size book");
}
else {
    console.log("hard-attack size book");
}