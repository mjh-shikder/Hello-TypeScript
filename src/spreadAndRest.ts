// ? Spread operator in Array

const friends = ['Talha', 'Alamin']

const schoolFriends = ['shahadat', 'zakaria', 'niaz', 'riyaj']

const collegeFriends = ['jewl', 'tawhid', 'Faijul']

//* eikhane jodi friends.push(schoolFriends) eivabe ditam tahole error asto
//? ['Talha', 'Alamin', ['Rion', 'rafi', 'emran', 'labid'] ] tahole bisoy ta amon hoto. tai ... spread operator use korte hobe

friends.push(...schoolFriends)
console.log(friends);


// ? Spread Oparator in Object

const user = { name: 'mjh', phone: '019999999' };
const otherInfo = { hobby: 'coding', color: ' purple' };

const userInfo = { ...user, ...otherInfo }

console.log(userInfo);
