import users from "./users.js";

//task-1
const getUserNames = users => {
   return users.map(user => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//task-2
const getUsersWithEyeColor = (users, color) => 
    users.filter(function (user) {
        if (user.eyeColor === color) {
            return user;
        }
});

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//task-3
const getUsersWithGender = (users, gender) => {
   const filteredUsers = users.filter(function (user) {
            if (user.gender === gender) {
                return user;
            }
    })
    return filteredUsers.map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//task-4
const getInactiveUsers = users => {
     return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//task-5
const getUserWithEmail = (users, email) => users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//task-6
const getUsersWithAge = (users, min, max) => {
    const result = users.filter(user => user.age >= min && user.age <= max);
    return result;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//task-7
const calculateTotalBalance = users => {
return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

//task-8

//const getUsersWithFriend = (users, friendName) => users.some(user => user.friends = friendName);

const getUsersWithFriend = (users, friendName) => {

    const usersWithFriend = users.filter(function (user) {
        if (user.friends.some(friend => friend == friendName)) {
            return user;
        }
    })
    return usersWithFriend.map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


