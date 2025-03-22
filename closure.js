// //Basic Example
// function x(){
// let  a=7
// function y(){
//     console.log(a);
// }
// y()
// }
// x()

// const counter=(function(){
//     let privateVar=0
//     function changeBy(val){
//         privateVar+=val
//     }
//     return{
//         increment(){
//             changeBy(1);
//         },
//         decrement(){
// changeBy(-1)
//         },
//         value(){
//             return privateVar
//         }
//     }
// })()

// console.log(counter.value()); // 0.

// counter.increment();
// counter.increment();
// console.log(counter.value()); // 2.

// counter.decrement();
// console.log(counter.value()); // 1.


let object = { 
    name: "Hello", 
    age: 20, 
    gender: "Male", 
  }; 
  
  console.log(object); 
  
  let renameObjectkey=(object)=>{
  object.firstname=object.name
  delete object.name
  }
  renameObjectkey(object);
  console.log(object);

  