// তুই নিজের দোকান খুলছিস। তোর দোকানে কেউ 3000 টাকার বেশি কেনাকাটা করলে 5% ডিসকাউন্ট, আর 6000 টাকার বেশি কেনাকাটা করলে 15% ডিসকাউন্ট দিবি। যদি এক বন্ধু এসে 4500 টাকার জিনিস কিনে, তবে তাকে কত টাকা দিতে হবে?



const totalAmount = 4500;

if (totalAmount >= 6000) {
    const discount = totalAmount / 100 * 15;
    const pay = totalAmount - discount;
    console.log(pay);
}
else if (totalAmount >= 3000) {
    const discount = totalAmount / 100 * 5;
    const pay = totalAmount - discount;
    console.log(pay);
}
else {
    console.log(totalAmount);
}