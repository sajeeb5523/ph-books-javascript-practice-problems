// একটা player অবজেক্ট বানা, যেখানে name Messi, team Argentina, আর goals 91 থাকবে। Object.values ব্যবহার করে সব ভ্যালু বের কর।



const player = {
    name: "Messi",
    team: "Argentina",
    goals: 91
}

const values = Object.values(player);
console.log(values);