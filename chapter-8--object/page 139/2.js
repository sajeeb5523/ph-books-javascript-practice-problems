// const player = { name Messi, goals 800, club Inter Miami }; Object.freeze() মেথড ব্যবহার করে অবজেক্ট ফ্রিজ কর। তারপর নতুন প্রোপার্টি যোগ করে দেখ, কাজ করে কি না।



const player = {
    name: "Messi",
    goals: 800,
    club: "Inter miami"
}

Object.freeze(player);

player.age = 36;
console.log(player);