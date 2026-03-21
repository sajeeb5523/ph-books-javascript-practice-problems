// তুই কিছু শহরের নাম লিখে রাখছিস— ‘Dhaka’, ‘Chittagong’, ‘Sylhet’। এখন তুই ভাবলি, আরেকটা শহরের নাম যোগ করবি, কিন্তু ভুলে ছোট হাতের rajshahi যোগ করে ফেললি। এবার প্রোগ্রাম লিখে চেক কর, RajShahi আছে কি না।



const cities = ["Dhaka", "Chittagong", "Sylhet"];
cities.push("rajshahi");

console.log(cities);

console.log(cities.includes("RajShahi"));