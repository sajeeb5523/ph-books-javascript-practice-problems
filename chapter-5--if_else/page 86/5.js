// ধর, তুই একটা পার্টি করবি। প্রথমে দেখবি, পার্টিতে 100 জনের বেশি গেস্ট আসবে কি না। যদি আসে, তাহলে চেক করবি, সবাই গিফট আনবে কি না। যদি আনে, বলবি, ‘Lets party all night.’ নচেৎ বলবি, ‘I will party with myself.’ 



const guestCount = 98;
const gift = false;

if (guestCount > 100) {

    if (gift == true) {
        console.log("Lets party all night");
    }
    else {
        console.log("I will party with myself");
    }
}
else {
    console.log("guest kom asche so party cancel");
}