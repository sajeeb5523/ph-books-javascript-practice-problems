// তুই একটি অ্যাপ বানিয়েছিস। প্রথমে চেক করবি, ব্যবহারকারীর অ্যাকাউন্ট অ্যাকটিভ কি না। যদি অ্যাকটিভ হয়, তার সাবস্ক্রিপশন চেক করবি। যদি প্রিমিয়াম হয়, তাকে প্রিমিয়াম ফিচার দেখাবি। না হলে বলবি, ‘ফ্রি ভার্সন দেখুন।’



const isActivate = true;
const isPremium = true;

if (isActivate == true) {
    console.log("account active");

    if (isPremium == true) {
        console.log("see premium features");
    }
    else {
        console.log("see free version");
    }
}
else {
    console.log("account not active");
}