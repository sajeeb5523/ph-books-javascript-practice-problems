// 20 থেকে 40 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং শুধু ফাইনাল যোগফলটা আউটপুট হিসেবে দেখবি।



let num = 20;
let sum = 0;

while (num <= 40) {
    sum = sum + num;
    num++;
}

console.log("Sum: ", sum);