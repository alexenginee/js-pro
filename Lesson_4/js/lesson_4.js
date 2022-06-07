const users = [
    {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        age: 23,
    },
    {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        age: 20,
    },
    {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
        age: 40,
    },
    {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
        age: 36,
    },
    {
        id: 11,
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg",
        age: 70,
    },
    {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg",
        age: 45,
    },
];
function getFirstlastName(arr) {
    const newArr = arr.map((el) => {
        `${el.first_name} ${el.last_name}`;
    });
    return newArr.join(", ");
}
console.log(getFirstlastName(users));
function getEmails(arr) {
    const emails = arr.map((el) => el.email);
    const emailsSort = emails.sort();
    return emailsSort;
}
console.log(getEmails(users));
function getNewArr(arr) {
    const newArr = arr.map((el) => ({
        fullName: `${el.first_name} ${el.last_name}`,
        id: el.id
    }));
    return newArr;
}
console.log(getNewArr(users));
function getObj(arr) {
    const newArr = arr.map((el) => ({
        avgAge: `${el.first_name} ${el.last_name}`,
        gt18: `${(el.age > 30) ? +1 : null}`,
        gt30: `${(el.age > 40) ? el.age : null}`,
        gt40: `${(el.age > 18) ? el.age : null}`
    }));
    return newArr;
}
console.log(getObj(users));
