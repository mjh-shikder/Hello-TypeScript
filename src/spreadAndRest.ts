// ? Spread operator in Array

const friends = ["Talha", "Alamin"];

const schoolFriends = ["shahadat", "zakaria", "niaz", "riyaj"];

const collegeFriends = ["jewl", "tawhid", "Faijul"];

//* eikhane jodi friends.push(schoolFriends) eivabe ditam tahole error asto
//? ['Talha', 'Alamin', ['Rion', 'rafi', 'emran', 'labid'] ] tahole bisoy ta amon hoto. tai ... spread operator use korte hobe

friends.push(...schoolFriends);
console.log(friends);

// ? Spread Oparator in Object

const user = { name: "mjh", phone: "019999999" };
const otherInfo = { hobby: "coding", color: " purple" };

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);



// ? Rest Oparator

const sendInvite = (frined1: string, friend2: string, friend3: string) => {
  console.log(`Sent old Invitation to ${frined1}`);
  console.log(`Sent old Invitation to ${friend2}`);
  console.log(`Sent old Invitation to ${friend3}`);
};
sendInvite("rony", "jony", "josim");



const sendSmartInvite = (...frineds: string[]) => {
    frineds.forEach((friend: String)=> console.log(`Send Invitation to ${friend}`)
    )
 
};

sendSmartInvite('josim', 'faruk', 'foysal', 'kobir')