// যদি তোর বাসায় মেহমান আসে, প্রথমে জিজ্ঞেস করবি, তারা চা খাবে কি না। যদি চা খেতে চায়, তাহলে জিজ্ঞেস করবি, সাথে বিস্কুট খাবে কি না। না চাইলে বলবি, ‘শুধু চা রেডি।’ আর যদি চা-ও না খেতে চায়, বলবি, ‘বসে বসে স্টার জলসা দেখুন।’



const wantsTea = true;
const wantsBiscuit = true;

if (wantsTea == true) {

    if (wantsBiscuit == true) {
        console.log("ca ar biscuit niye astechi");
    }
    else {
        console.log("ca ready");
    }
}
else {
    console.log("bose bose star jalsa dekhun");
}