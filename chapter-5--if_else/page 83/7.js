// তোর একটা গেমিং অ্যাপ আছে। প্লেয়ারের লেভেল 10-এর কম হলে বলবি "novice", 10 থেকে 50-এর মধ্যে হলে বলবি "Expert", আর 50-এর বেশি হলে বলবি "Pro Gamer"।



const playerLevel = 35;

if (playerLevel < 10) {
    console.log("novice");
}
else if (playerLevel >= 10 && playerLevel <= 50){
    console.log("Expert");
}
else{
    console.log("Pro Gamer");
}