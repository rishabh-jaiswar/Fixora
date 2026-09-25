
// let data=[
// {username:"A",userpassword:"A"},
// {username:"B",userpassword:"B"},
// {username:"C",userpassword:"C"},
// {username:"D",userpassword:"D"}
// ];
//  console.log(Object.entries(data));
//  console.log(Object.keys(data));
//  console.log(Object.values(data));
//  console.log((data.length));
// // console.log(Object.entries(data[2]));
// // FOR LOOP

// // for(let w=0;w<data.length;w++){
// //     console.log(Object.entries(data[w]));
// //  };

//  //EXTENTED FOR LOOP (very useful for arrays)

// //  console.log("...........for in loop...........");

// //  for(let y in data){
// //     console.log(Object.entries(data[y]));
// //  }

//  console.log("...........for each loop...........");// forEach is a arrayMethod  // foreach read each elements and call callback function
//   let n=[1,2,3,4,5];
//   function squareNumber(value){
//     console.log(value*value);

//   }
// //console.log(squareNumber(n));
//   n.forEach(squareNumber);
// //   x.forEach(function(x)) {  //  Takes parameter known as function which is called as callback function

// //   }

// function squareNumber1(value){
//      return (value*value);

//   }
//   let result= n.map(squareNumber1); //array method
//   console.log(result);
 


//  console.log("...........for each loop for object...........");

// //  data.forEach(function(value){
// //     console.log(value);
// //  });

//  function userdetails(value){
//   return value;
//  }
//  let result1= data.map(userdetails);
//  console.log(result1);



const candidates = [
    {
        candidateName: "Rahul Sharma",
        city: "Mumbai",
        contact: "9876543210",
        username: "rahul.sharma",
        password: "Rahul@123"
    },
    {
        candidateName: "Priya Patil",
        city: "Pune",
        contact: "9876501234",
        username: "priya.patil",
        password: "Priya@456"
    },
    {
        candidateName: "Amit Joshi",
        city: "Mumbai",
        contact: "9988776655",
        username: "amit.joshi",
        password: "Amit@789"
    },
    {
        candidateName: "Neha Kulkarni",
        city: "Ahmedabad",
        contact: "9123456789",
        username: "neha.kulkarni",
        password: "Neha@321"
    },
    {
        candidateName: "Rohit Mehta",
        city: "Pune",
        contact: "9012345678",
        username: "rohit.mehta",
        password: "Rohit@111"
    },
    {
        candidateName: "Sneha Deshmukh",
        city: "Mumbai",
        contact: "9098765432",
        username: "sneha.deshmukh",
        password: "Sneha@222"
    },
    {
        candidateName: "Vikas Shah",
        city: "Delhi",
        contact: "9898989898",
        username: "vikas.shah",
        password: "Vikas@333"
    },
    {
        candidateName: "Pooja Verma",
        city: "Ahmedabad",
        contact: "9765432109",
        username: "pooja.verma",
        password: "Pooja@444"
    },
    {
        candidateName: "Karan Singh",
        city: "Delhi",
        contact: "9345678901",
        username: "rahul.sharma",
        password: "Karan@555"
    },
    {
        candidateName: "Meena Rao",
        city: "Pune",
        contact: "9567890123",
        username: "meena.rao",
        password: "Meena@666"
    }
];

//Find method
// let result=candidates.find(function(value){
//   return value.city==="Mumbai";
// });
// console.log(result);


// arrow function
// let result=candidates.filter((value)=>value.city==="Mumbai");
// console.log(result);

// using for loop with break instead of find method 
// for(let x=0; x<candidates.length; x++){
//   if(candidates[x].city==="mumbai"){
//     console.log(Object.entries(candidates[x]));
//   break;
//   }
    
// }

// using for loop with continue instead of filter method
// for(let x=0; x<candidates.length; x++){
//   if(candidates[x].city!=="Mumbai"){
//   continue;
//   }
//   console.log(Object.entries(candidates[x]));
    
// }

let num=6545468798;
let n=num;// initialization
let sum=0;
while(n!=0){  //conditon
  sum=sum+(n%10)  //execution
  n=Math.floor(n/10)//updation
}
console.log(sum);

