// //forof
// let numbers = [1, 2, 3];
// for (let number of numbers)
//     console.log(number);

//for object literals

// let people = { bob: "10", doe: "15" };
// for (let person in people)
//     console.log(person);//it will print only the key

// we can make this into a for of loop by using Object.keys and Object.values
//  let people = { bob: "10", doe: "15" }
// for(let person of Object.keys(people))
// {
//     console.log(`${person} has age ${people[person]}`)
// }