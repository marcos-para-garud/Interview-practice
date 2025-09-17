// Question 1

import { set, set } from "mongoose";

let arr = [1, 2, [3, [4, 5], 6], 7, 8];
let ans = [];

function solve(arr){
   
    arr.map((array)=>{
        if(Array.isArray(array))
        {
            solve(array);
        }
        else{
            ans.push(array);
        }
    })
}

solve(arr);

// Question 2
// You are given an array of objects representing orders:

// const orders = [
//   { id: 1, items: ["apple", "banana"], status: "delivered" },
//   { id: 2, items: ["banana", "orange"], status: "pending" },
//   { id: 3, items: ["apple", "mango"], status: "delivered" },
//   { id: 4, items: ["banana", "mango"], status: "delivered" },
// ];
// Task:
// Return a list of unique items from all orders that are delivered, sorted in alphabetical order.

// Expected Output:
// ["apple", "banana", "mango"]

const orders = [
    { id: 1, items: ["apple", "banana"], status: "delivered" },
    { id: 2, items: ["banana", "orange"], status: "pending" },
    { id: 3, items: ["apple", "mango"], status: "delivered" },
    { id: 4, items: ["banana", "mango"], status: "delivered" },
  ];
  

  let array = [];
  let innerArray = [];
  //const set = new Set();
function solve(orders)
{
    array = orders.filter((element)=>(element.status==="delivered"))
    array.forEach(element => {
        innerArray.push(...element.items);
        
    });

    const uniqueItems = [...new Set(innerArray)];
    uniqueItems.sort();
    console.log(uniqueItems);
    
}

solve(orders);




// Question 3

// Given an array of user objects, each having name and age, return the names of users who are older than 25, sorted by age in descending order.

// input:
// const users = [
//     { name: "Alice", age: 22 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 28 },
//     { name: "David", age: 25 }
//   ];

//   output:
//   ["Bob", "Charlie"]

const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 },
    { name: "David", age: 25 }
  ];


  let array3 = [];
  let newArray3 = [];
   function solve(users){

    const sortedUsers = users.sort((a, b) => b.age - a.age);

    array3 = sortedUsers.filter((element)=>(
        element.age>25
    ))
    

   newArray3 = array3.map((ele)=>(
        ele.name
   ))
    console.log(newArray3);
    
    
  }

  solve(users)



  //Question 4:
// You are given an array of blog posts where each post has a title, likes, and author.
// Write a JavaScript function that:

// Filters posts with more than 100 likes.

// Sorts them in descending order by likes.

// Returns an array containing only the titles of the filtered posts.

// i/p:
// const posts = [
//     { title: "Post One", likes: 150, author: "Alice" },
//     { title: "Post Two", likes: 90, author: "Bob" },
//     { title: "Post Three", likes: 200, author: "Charlie" },
//     { title: "Post Four", likes: 120, author: "David" }
//   ];

//   o/p
//   ["Post Three", "Post One", "Post Four"]


const posts = [
    { title: "Post One", likes: 150, author: "Alice" },
    { title: "Post Two", likes: 90, author: "Bob" },
    { title: "Post Three", likes: 200, author: "Charlie" },
    { title: "Post Four", likes: 120, author: "David" }
  ];

  const solve = (posts)=>{
    const sortedPosts = posts.sort((a , b)=> b.likes-a.likes);

    const arr = sortedPosts.filter((items)=> items.likes>100)

    const ans = arr.map((items)=> items.title);
    console.log(ans);
    
  }

  solve(posts);


//   Question 5:
// You have an array of users. Each user has a name, age, and an array of skills.
// Write a function to find all users who know "JavaScript", sort them by age in ascending 
// order, and return only their names.
//  input :
//  const users = [
//     { name: "Alice", age: 25, skills: ["JavaScript", "React"] },
//     { name: "Bob", age: 30, skills: ["Python", "Django"] },
//     { name: "Charlie", age: 22, skills: ["JavaScript", "Node.js"] },
//     { name: "David", age: 28, skills: ["Java", "Spring"] }
//   ];

//   output:
//   ["Charlie", "Alice"]

const users5 = [
    { name: "Alice", age: 25, skills: ["JavaScript", "React"] },
    { name: "Bob", age: 30, skills: ["Python", "Django"] },
    { name: "Charlie", age: 22, skills: ["JavaScript", "Node.js"] },
    { name: "David", age: 28, skills: ["Java", "Spring"] }
  ];
  
  const solve = (users) => {
    return users
      .filter(user => user.skills.includes("JavaScript")) // Keep only JS users
      .sort((a, b) => a.age - b.age) // Sort by age ascending
      .map(user => user.name); // Get names
  };
  
  console.log(solve(users5));
  


//   Question 6:
//   const orders = [
//     { id: 1, amount: 250, status: "completed" },
//     { id: 2, amount: 450, status: "pending" },
//     { id: 3, amount: 300, status: "completed" },
//     { id: 4, amount: 150, status: "completed" },
//     { id: 5, amount: 500, status: "pending" }
//   ];
//   Write a function that:

//   Filters only completed orders.
  
//   Sorts them in descending order by amount.
  
//   Returns just the ids of these sorted orders.
//   o/p:
//   [3, 1, 4]



const orders6 = [
        { id: 1, amount: 250, status: "completed" },
        { id: 2, amount: 450, status: "pending" },
        { id: 3, amount: 300, status: "completed" },
        { id: 4, amount: 150, status: "completed" },
        { id: 5, amount: 500, status: "pending" }
      ];

      let sorted = [];
      let ans6 = [];
      const solve = (orders)=>{
        sorted = orders.sort((a , b)=> b.amount-a.amount)
        ans = sorted.filter((ele)=>ele.status==="completed")
        .map((ele)=>ele.id)
        console.log(ans6);
        
      }
      solve(orders6)


      //Question 7
    //   const posts = [
    //     { id: 1, title: "Intro to MongoDB", author: "Alice" },
    //     { id: 2, title: "Mastering React", author: "Bob" },
    //     { id: 3, title: "Node.js Streams", author: "Alice" },
    //     { id: 4, title: "Express.js Security", author: "Alice" },
    //     { id: 5, title: "React Hooks Deep Dive", author: "Bob" }
    //   ];
    //   Write a function groupPosts(posts) that returns an object where:

    //   The keys are the authors' names.
      
    //   The values are the number of posts written by that author.
    //   o/p
    //   {
    //     Alice: 3,
    //     Bob: 2
    //   }

       const posts7 = [
        { id: 1, title: "Intro to MongoDB", author: "Alice" },
        { id: 2, title: "Mastering React", author: "Bob" },
        { id: 3, title: "Node.js Streams", author: "Alice" },
        { id: 4, title: "Express.js Security", author: "Alice" },
        { id: 5, title: "React Hooks Deep Dive", author: "Bob" }
      ];

      const solve = (posts)=>{
        posts.groupBy(author)
      }
      solve(posts7)


      // Question 8

//       You are given a nested object of unknown depth. Flatten it into a single object with dot-separated keys.
//       let obj = {
//         name: "Akash",
//         address: {
//           city: "Mumbai",
//           pincode: {
//             code: 400001,
//             area: "Fort"
//           }
//         },
//         skills: {
//           programming: {
//             frontend: "React",
//             backend: "Node.js"
//           }
//         }
//       };

//       o/p
//       {
//         "name": "Akash",
//         "address.city": "Mumbai",
//         "address.pincode.code": 400001,
//         "address.pincode.area": "Fort",
//         "skills.programming.frontend": "React",
//         "skills.programming.backend": "Node.js"
//       }

      
//       Constraints:

// Object depth can be unlimited.

// Should work for any key/value combination.
            




// Question 9:
// Problem

// Flatten an array of nested arrays to any depth, remove duplicates, and sort in ascending order.

// Example:

// [3, [2, [3, [1]]], 4, [2]]  //output → [1, 2, 3, 4]

const arr9 = [3, [2, [3, [1]]], 4, [2]]

let ans9 = []
let set9 = new Set();
const solve9 = (arr)=>{
    arr.forEach((ele)=>{
        if(Array.isArray(ele))
        {
            solve9(ele);
        }
        else{
            set9.add(ele);
        }
    })
    // ans9 = set9
    // ans9.sort()
    
let ans9 = Array.from(set9).sort((a, b) => a - b);
}

solve9(arr9)

// Question 10
// Boss level – Flatten deeply but preserve non-array types exactly as they are.
// Example:
// [3, [2, [3, [1]]], "hi", [true, [null, [undefined]]]]
// → [3, 2, 3, 1, "hi", true, null, undefined]

let arr10 = [3, [2, [3, [1]]], "hi", [true, [null, [undefined]]]]
let ans10 = []
const solve10 = (arr)=>{
    arr.forEach((ele)=>{
        if(Array.isArray(ele))
        {
            solve10(ele)
        }
        else{
            ans10.push(ele)
        }
    })
}

solve10(arr10)


//Question 10
// You are given an array of objects representing employees:

// const employees = [
//   { name: "Alice", salary: 50000 },
//   { name: "Bob", salary: 60000 },
//   { name: "Charlie", salary: 40000 },
//   { name: "David", salary: 80000 },
//   { name: "Eva", salary: 70000 }
// ];


// Task:
// Write a function that returns the top 3 highest-paid employees in descending order of salary.
// The function should return an array of names only, like:

// ["David", "Eva", "Bob"]

const employees = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 60000 },
  { name: "Charlie", salary: 40000 },
  { name: "David", salary: 80000 },
  { name: "Eva", salary: 70000 }
];

const solve11 = (employees) => {
    return employees
      .sort((a, b) => b.salary - a.salary) // sort descending
      .slice(0, 3) // pick top 3
      .map(emp => emp.name); // return only names
  };
solve11(employees)

//Question 12

// You are given an array of numbers.
// Write a function to find the first non-repeating element in the array.

// Example:

// const arr = [4, 5, 1, 2, 0, 4];


// Expected Output:

// 5

const arr12 = [4, 5, 1, 2, 0, 4];
let map = new Map();
const solve12 = (arr)=>{
   arr.forEach((ele)=>{
    if(map.get(ele))
    {
        map.set(ele , map.get(ele)+1)
    }
    else{
        map.set(ele , 1);
    }
   })

   let result = null;
   arr.forEach((ele)=>{
       if (result === null && map.get(ele) === 1) {
           result = ele; // pick first non-repeating
       }
   });
   console.log(ans);
   
}
solve12(arr12)


//Question 13
// Find the intersection of two arrays (unique elements only).
// Example:

// const arr1 = [1, 2, 2, 3, 4];
// const arr2 = [2, 2, 3, 5];

// intersection(arr1, arr2);

// Expected output: [2, 3]


const intersection = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
  
    // keep only elements present in both sets
    const result = [...set1].filter(num => set2.has(num));
  
    return result;
  };
  
  // Example
  const arr1 = [1, 2, 2, 3, 4];
  const arr2 = [2, 2, 3, 5];
  console.log(intersection(arr1, arr2)); // [2, 3]
  


  // Question 14

//   Rotate an Array by k Steps

// 👉 Given an array and a number k, rotate the array to the right by k steps.

// Example:

// Input: arr = [1, 2, 3, 4, 5, 6, 7], k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]

function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n; // handle cases where k > n
    return [...arr.slice(n - k), ...arr.slice(0, n - k)];
  }
  
  // Example
  console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
  // 👉 [5, 6, 7, 1, 2, 3, 4]
  


//   Question 15

//   Write a function to invert an object’s keys and values.

// 📌 Example:

// Input:  { a: 1, b: 2, c: 3 }
// Output: { 1: "a", 2: "b", 3: "c" }

Input:  { a: 1, b: 2, c: 3 }

const solve15 = (input)=>{
    let values = Object.values(input);
    let keys = Object.keys(input);
    let obj = {}

    for(let i=0; i<values.length; i++)
    {
        obj[values[i]] = keys[i];
    }

   return obj;
}

solve15(Input)


// Question 16
// ❓ Question 2:

// Write a function that merges two objects, but if a key exists in both, the value from the second object should overwrite the first one.

// Example:

// Input: 
// obj1 = { a: 1, b: 2, c: 3 }
// obj2 = { b: 4, d: 5 }

// Output:
// { a: 1, b: 4, c: 3, d: 5 }

const solve16a = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  };

  //or my solution below, but upper solution is ideal

obj1 = { a: 1, b: 2, c: 3 }
obj2 = { b: 4, d: 5 }

const solve16b = (obj1 , obj2)=>{
    let ans = {};
    let arr1 = Object.keys(obj1)
    let arr2 = Object.keys(obj2)
    const map = new Map();

    for(let i=0; i<arr1.length; i++)
    {
        map.set(arr1[i] , obj1[arr1[i]]);
    }
    for(let i=0; i<arr2.length; i++)
    {
        if(map.get(arr2[i]))
        {
            obj1[arr2[i]] = obj2[arr2[i]];
        }
        else {
            // add new key if not exists
            obj1[arr2[i]] = obj2[arr2[i]];
        }
        
    }

return obj1;
   
}

solve16(obj1 , obj2)

// Question 17
//Write a function to invert an object.
// That means keys become values and values become keys.
// const obj = { a: 1, b: 2, c: 3 };

// console.log(invertObject(obj));

// o/p { 1: "a", 2: "b", 3: "c" }


const obj17 = { a: 1, b: 2, c: 3 };
const solve17 = (obj)=>{
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let ans = {};

    for(let i=0; i<keys.length; i++)
    {
        ans[values[i]] = keys[i];
    }
    console.log(ans);
    
}
solve17(obj17)

//Question 18
// Write a function that checks whether two objects are equal
//  (i.e., they have the same keys and values, regardless of the order of keys).
//  Input: 
// obj1 = { a: 1, b: 2 };
// obj2 = { b: 2, a: 1 };

// Output: true

obj118 = { a: 1, b: 2 };
 obj218 = { b: 2, a: 1 };

 function solve18(obj1 , obj2){
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if(keys1.length!=keys2.length) return false;

    for (let i = 0; i < keys1.length; i++) {
        let key = keys1[i];
        if (obj1[key] != obj2[key]) return false;
    }
    
    return true;
 }

 solve18(obj118 , obj218)


 // Question 19
//👉 Write a function to find the keys of an object that have the maximum value.

// Example:

// let obj = { a: 10, b: 30, c: 20, d: 30 };


// Output:

// ["b", "d"]

obj19 = { a: 10, b: 30, c: 20, d: 30 };

const solve19 = (obj)=>{
   let keys = Object.keys(obj);
   let max = 0;
   let ans = [];
   for(let i=0; i<keys.length; i++)
   {
    if (obj[keys[i]] > max) {
        max = obj[keys[i]];
        ans = [keys[i]];  // reset when new max found
     } else if (obj[keys[i]] === max) {
        ans.push(keys[i]);
     }
   }
}
solve19(obj19)

// Question 20

// Write a function to merge two objects.

// If a key exists in both objects, the value should be summed.

// Otherwise, just keep the existing key-value.

// Example:

// Input: obj1 = { a: 10, b: 20, c: 30 }
//        obj2 = { a: 5, c: 15, d: 40 }

// Output: { a: 15, b: 20, c: 45, d: 40 }


obj120 = { a: 10, b: 20, c: 30 }
obj220 = { a: 5, c: 15, d: 40 }

const solve20 = (obj1 , obj2)=>{
    const keys = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    let ans = {};
    for(let i=0; i<keys.length; i++)
    {
        if(obj2[keys[i]])
        {
            obj1[keys[i]] = obj1[keys[i]]+obj2[keys[i]];
        }
       
        
    }
    for(let i=0; i<keys2.length; i++)
    {
        if(!obj1[keys2[i]]){
            obj1[keys2[i]] = obj2[keys2[i]]
        }
    }
    // return {...obj1 , ...obj2}
    console.log(obj1);
    
}

solve20(obj120 , obj220)


