// একটা প্রোগ্রাম বানিয়ে ‘বৃষ্টি’ নামক উপাদান আছে কি না, চেক কর। যদি থাকে, তাহলে আউটপুটে বলবি ‘I need umberalla’, না থাকলে বলবি ‘No rain no pain’। অ্যারেতে ‘দীঘি’, ‘মেঘ’, ‘বৃষ্টি’ ও ‘বর্ষা’ আছে।



const items = ["dighi", "megh", "bristi", "borsha"];

if (items.includes("bristi")) {
    console.log("I need umbrella");
}
else {
    console.log("No rain no pain");
}