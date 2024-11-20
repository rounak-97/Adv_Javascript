// for-loop
// let a = [1,2,3,4,5,6,7,7,8,9,10]
// let t = []
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
//     t.push(a[i]*2)
// }
// console.log(t)

// for-in loop
// let a = [1,2,3,4,5,6,7,7,8,9,10]
// for(i in a){
//     // to print the index number
//     // console.log(i)
//     // to print the value
//     console.log(a[i])
// }


// // for-of loop
// let a = [1,2,3,4,5,6,7,7,8,9,10]
// for (i of a){
//     console.log(i)
// }

// for-loop (reverse order) 
// let a = [1,2,3,4,5,6,7,7,8,9,10]
// for(i=a.length-1;i>=0;i--){
//     console.log(a[i])
// }


// forEach loop
let a = [1,2,3,4,5,6,7,7,8,9,10]
a.forEach((item)=>{   // '=>' is a fat arrow , used to define a single-line condition
    console.log(item)
})
