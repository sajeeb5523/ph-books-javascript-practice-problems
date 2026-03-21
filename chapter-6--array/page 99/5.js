// তোর কাছে 5টি বইয়ের নাম দিয়ে একটা অ্যারে আছে। এখন তুই সবার প্রথম বইটা পড়ে শেষ করে ফেলছস। তাই প্রথম বইয়ের নামটা অ্যারে থেকে রিমুভ করে ফেল। তারপর বাকি নামগুলো আউটপুটে দেখা।



const books = ["Rich Dad Poor Dad", "Think and Grow Rich", "The Power of Now"];
books.shift();

console.log(books);