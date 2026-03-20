// বন্ধু যদি দাওয়াত দেয়, তাহলে তার জন্মদিনের পার্টিতে তুই যাবি। আর যদি তোকে দাওয়াত না দেয়, তাহলে তাকে ফ্রেন্ডলিস্ট থেকে বের করে দিবি। আর যদি বন্ধু দাওয়াত দিয়ে ফেলে, তাহলে দাওয়াতে যাওয়ার সময় চেক করে দেখবি, পকেটে কত টাকা আছে। যদি 1000 টাকার বেশি থাকে, তাহলে বন্ধুর জন্য একটা গিফট নিয়ে যাবি। না হয় খালি হাতে যাবি।



const invited = true;
const money = 1020;

if (invited == true) {
    console.log("dawate jacchi");

    if (money > 1000) {
        console.log("gift niye jabo");
    }
    else {
        console.log("taka nai khali hate jabo");
    }
}
else {
    console.log("tui invite koris nai tui vag unfriend ho");
}