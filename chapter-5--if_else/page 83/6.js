// একটা প্রোগ্রাম লিখ। যা চেক করবে, তাপমাত্রা 0 ডিগ্রির কম হলে বলবে "Ice", 0 থেকে 20-এর মধ্যে হলে বলবে "Cool Cool", আর 20-এর বেশি হলে বলবে "Hot Hot"।



const temperature = 15;

if (temperature < 0) {
    console.log("Ice");
}
else if(temperature >= 0 && temperature <= 20){
    console.log("Cool Cool");
}
else { 
    console.log("Hot Hot");
}