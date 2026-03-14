// তুই একটি রেস্টুরেন্ট চালাচ্ছোস, যেখানে 12 বছরের নিচে বাচ্চাদের ফ্রি খাওয়ানো হয় এবং 60 বছরের ওপরের মানুষকে 50% ডিসকাউন্ট দেওয়া হয়, বাকিদের পুরা টাকা দিতে হয়।



const age = 19;
const price = 250;

if (age < 12) {
    console.log("free eat");
}
else if (age > 60) {
    const discount = price / 100 * 50;
    const pay = price - discount;
    console.log(pay);
}
else {
    console.log("full payment");
}