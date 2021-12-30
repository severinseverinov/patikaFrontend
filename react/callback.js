// setTimeout(()=>
//     {
//         console.log("Merhaba");
//     },3000
// );

// setInterval(()=>{
//     console.log("Ben her saniye çalışacağım.");
// },2000);

fetch("https://jsonplaceholder.typicode.com/users")
.then(item=>console.log(item));