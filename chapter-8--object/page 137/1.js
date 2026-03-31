// বই নামে একটা অবজেক্ট বানিয়ে ফেল। সেটার মধ্যে বইয়ের নাম, লেখক, দাম ইত্যাদি থাকবে। তারপর অবজেক্টের সব প্রোপার্টি (keys) এবং সব ভ্যালু (values) কনসোল লগ কর। 



const book = {
    name: "Atomic Habits",
    author: "James Clear",
    price: 500,
}

for (const key in book) {
    const value = book[key];
    console.log(key, ":", value);
}