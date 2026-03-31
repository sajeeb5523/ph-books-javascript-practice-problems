// এই অবজেক্টটিতে চেক কর, author প্রোপার্টি আছে কি না। const article = { title: "Learning JS", category: "Programming" };



const article = {
    title: "Learning JS",
    category: "Programming"
}

if ("author" in article) {
    console.log("ache");
}
else {
    console.log("nai");
}