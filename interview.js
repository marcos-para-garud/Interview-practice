console.log("a")

setTimeout(()=>{
    console.log("b");
    
} , 0)

Promise.resolve()
.then(()=>{
    console.log("c");
    
})

console.log("d");

//output 
// a
// b
// d
// c




const solve = async()=>{
 try {
    const response = await axios.fetch(url);
    console.log(response.data);
    
 } catch (error) {
    console.log(" error fetching data");
    
 }
}


let a = [1,2,3];
let b = [2,3,4];

//console.log([...a , ...b]);

let set = new Set();
let ans = [];
let arr = [...a , ...b];

const solve1 = (arr)=>{
    for(let i=0; i<arr.length; i++)
    {
        set.add(arr[i]);
    }
  

        console.log(ans[set]);


}

solve1(arr)

