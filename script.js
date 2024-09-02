// let arr = [1,2,3,4,45,889,7,999598]
// arr.splice(arr.indexOf(4)+1,0,7,7,7)
// console.log(arr);


// var arrr = 88
// console.log(arrr);


// console.log(1.15+3.30);



// let user = {
//     name:"john",
//     age:23,
//     getFullName(){
//         return this.name + this.age
//     }
// }


// let user = {
//     name:"john",
//     age:23,
//     getFullName(){
//         return this.name + this.age
//     }
// }



let user = {
        name:"john",
        age:23,
        getFullName:()=>{
            return this.name + this.age
        }
}

console.log(user.getFullName());
