
// const names=["Nischay","Ram"]
// names[1]="Hari"
// console.log(names)
// const days=["Sunday","Monday","Tuesday"]
// days.push("Wednesday")
// console.log(days)
// days.unshift("Saturday")
// console.log(days)
// days.shift();
// console.log(days)
// const numbers=[1,2,3,4]
// // const newNumberArray=numbers.slice(1,4);
// // console.log(newNumberArray)
// const spliceArray=numbers.splice(2,1,10,11)
// console.log(spliceArray)
// console.log(numbers)
// split
// let text="I love Javascript"
// const newArray=text.split(' ')
// console.log(newArray)
// const person={
//     name: "Nischay Shrestha",
//     address: "Dharan",
//     age: 20
// }
// console.log(`${Object.keys(person)} ${Object.values(person)}`)
// // console.log(Object.values(person))


// Conditional In Javascript
// const isRaining=true
// if(isRaining==true){
//     console.log("Use Umbrella")
// }

// isRaining=false
// const result=isRaining ? "Carry Umbrella": "Don't carry Umbrella"
// console.log(result)

// short circuit
// const isRaining=false
// const result=isRaining && "Carry Umbrella" || "Don't Carry Umbrella"
// console.log(result)

// Nullish Coelescing Operator
let age=null
let result=age ?? "No age"
console.log(result)