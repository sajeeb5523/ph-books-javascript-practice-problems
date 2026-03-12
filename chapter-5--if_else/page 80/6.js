// একজন মানুষের যদি শরীরের তাপমাত্রা 100 ডিগ্রির বেশি অথবা কাশি থাকে, তাহলে সে ডাক্তারের কাছে যাবে। নচেৎ সে কাঁথা মুড়ি দিয়ে শুয়ে থাকবে। এর জন্য একটা প্রোগ্রাম লিখ।



const bodyTemperature = 101;
const hasCough = false;

if (bodyTemperature > 100 || hasCough == false) {
    console.log("katha muri diye ghumabe");
}
else {
    console.log("doctor er kache jabe");
}