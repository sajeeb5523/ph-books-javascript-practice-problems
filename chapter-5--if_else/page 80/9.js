// শার্টের দাম 1000 টাকার বেশি হলে এবং কুপন থাকলে তোকে 20 পারসেন্ট ডিসকাউন্ট দেয়া হবে। এর জন্য প্রোগ্রাম লিখ।



const shirtPrice = 1150;
const hasCoupon = false;

if (shirtPrice > 1000 && hasCoupon == true) {
    console.log("20% discount dewa hobe");
}
else {
    console.log("no discount");
}