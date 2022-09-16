// console.log("Running conditionals JS");
// let random=Math.random();
// if(random<0.5){
//     console.log("The random number is smaller than 0.5");
// }
// else{
//     console.log("The random number is bigger or equal to 0.5");
// }
// console.log(random);

// //Days of the week
// const dayOfWeek=prompt("Enter a day").toLowerCase();
// if (dayOfWeek==='monday'){
//     console.log("It's Monday");
// }
// else if (dayOfWeek==='saturday')
// {
//     console.log("It's Saturday");
// }
// else if (dayOfWeek==='friday')
// {
//     console.log("It's Friday");
// }
// else
// {
//     console.log("It's not Saturday or Friday or Monday");
// }


// //age conditionals
// const age=prompt();
// if(age<5){console.log("baby-Free");}
// else if(age<10){console.log("child - $10");}
// else if(age<65){console.log("adult- $20");}
// else{console.log("old man - $10");}


// // password
// const password = prompt("Enter password");
// if(password.length>=6){
//     console.log("password has 6+ chars");
//     if(password.indexOf(' ')===-1)
//         console.log("Password does not contain spaces");

//     else
//         console.log("Password contains spaces");
// }
// else
//     console.log("Password too short");

//password refactoring

const password=prompt("Enter password");
if(password.length>=6 && password.indexOf(' ')===-1)
    console.log("Valid password");

else
    console.log("Invalid password");
