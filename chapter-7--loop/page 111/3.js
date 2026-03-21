// তুই এক স্কুলে 1 থেকে 50 পর্যন্ত ছাত্রদের রোল নম্বর লিস্ট করবি, তারপর একটা while লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।



let num = 1;
let sum = 0;

while (num <= 50) {
    console.log(num);
    sum = sum + num;
    num++;
}

console.log("Sum: ", sum);