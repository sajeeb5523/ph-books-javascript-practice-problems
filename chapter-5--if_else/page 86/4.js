// তোর বাসার ফ্রিজে খাবার আছে কি না, চেক করবি। যদি থাকে, খাবার গরম করবি। আর যদি না থাকে, চেক করবি, ফুড ডেলিভারি অ্যাপ কাজ করছে কি না। কাজ করলে অর্ডার করবি, না হলে বলবি, ‘আজকে আমি রোজা।’



const hasFood = false;
const foodApp = true;

if (hasFood == true) {
    console.log("khabar gorom korte hobe");
}
else {
    if (foodApp == true) {
        console.log("khabar order done");
    }
    else {
        console.log("ajk ami roja");
    }
}