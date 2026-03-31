// একটা family অবজেক্ট বানা। যার মধ্যে একটা প্রোপার্টি হবে father সেটার মানও আরেকটা অবজেক্ট এবং ফাদারের মধ্যে তোর আব্বুর নাম, বয়স এবং পেশা (profession) থাকবে। একইভাবে family অবজেক্টে mother নামে আরেকটা প্রোপার্টি থাকবে, সেই প্রোপার্টির মানও আরেকটা অবজেক্ট। আর mother-এর অবজেক্টের মধ্যে তোর আম্মুর নাম, বয়স আর পেশা থাকবে। এখন তোর কাজ হচ্ছে, mother-এর age প্রোপার্টি বের কর। তারপর তোর আব্বুর age-এর মান বের কর। তারপর এই দুইটা age-এর যোগফল বের করে সেটা আউটপুট হিসেবে দেখা।



const family = {
    father: {
        name: "Md. Saidul Islam",
        age: 42,
        profession: "Govt. Employee",
    },
    mother: {
        name: "Mst Sultana Parvin",
        age: 39,
        profession: "housewife",
    }
}

const motherAge = family.mother.age;
const fatherAge = family.father.age;

const totalAge = motherAge + fatherAge;

console.log(totalAge);