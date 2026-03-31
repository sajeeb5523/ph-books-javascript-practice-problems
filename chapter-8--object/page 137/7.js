// সংখ্যার একটি অবজেক্ট দিলাম— const numbers = { a: 10, b: 20, c: 30, d: 40 }; এইবার বুদ্ধি খাটিয়ে এই অবজেক্টের সব প্রোপার্টির ভ্যালুগুলোর যোগফল বের কর।



const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

const values = Object.values(numbers);
console.log(values);

let sum = 0;
for (const num of values) {
    sum = sum + num;
}

console.log(sum);