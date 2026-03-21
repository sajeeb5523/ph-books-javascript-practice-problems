// while লুপ ব্যবহার করে 21 থেকে 50 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং প্রতিবারের যোগফল দেখাবি।



let num = 21;
let sum = 0;

while (num <= 50) {
    console.log(num);
    sum = sum + num;
    num++;
    console.log("Sum: ", sum);
}
