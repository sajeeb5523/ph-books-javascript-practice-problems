// while লুপ দিয়ে 5 থেকে 15 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর।



let num = 5;
let sum = 0;

while (num <= 15) {
    console.log(num);
    sum = sum + num;
    num++;
}

console.log("Sum: ", sum);