// ?

const { response } = require("express");
const { errors } = require("undici");

// const { fetch } = require('undici');
// let data = fetch('http://localhost:3000', {mode:'cors'})
// // console.log(data);
// data.then((response) => {
//     console.log(response);

//     let finalData = response.json()
//     console.log(finalData);

//     finalData.then((result) => {
//         console.log(result);
//     })
// })

// ?

// let data = fetch(' http://localhost:5000', {mode:'cors'})
// // console.log(data);

// data.then((response) => {
//     // console.log(response);

//     let finalData = response.json()

//     finalData.then((result) => {
//         console.log(result);
//     })
// })


// fetch('http://reqres.in/api/users/2')
// .then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))


// fetch('http://reqres.in/api/users/1')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Fetch error:', error));

// ?

// fetch('http://reqres.in/api/users', { mode: 'cors' })
//   .then(response => {
//     // console.log(response);
//     return response.json()
//   }).then((data) => {
//     // console.log(data.data);
//     let finalData = data.data
//     console.log(finalData);

//     let ul = document.getElementById('ul')
//     console.log(ul);
//     finalData.map((ele) => {
//         ul.innerHTML += `<li>${ele.first_name}</li>`
//     }) 
// })
//   .catch(error => console.error('Error:', error));

//   ?

// fetch('http://localhost:3000', {mode:'cors'})
//   .then(response => response.json())
//   .then(data => {
//     // console.log(data)
//     console.log(data.data.email);
// })
//   .catch(error => console.error('Error:', error));

// ?

// let fetchApi = async () => {
//     try{
//         let res = await fetch('http://localhost:3000', {mode:'cors'})
//         // console.log(res);
//         let finalData = await res.json()
//     }catch(error){
//         console.log(error);
//     }
// }
// fetchApi()

// ?

// fetch('http://localhost:3000', {mode:'cors'})
// .then(response => {
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
// })
// .then(data => {
//     console.log('Data received:', data);
// })
// .catch(error => {
//     console.error('Fetch error:', error);
// });

// ? (3-6-2024)

let data = fetch('http://localhost:3000', {mode:'cors'})
data.then((response) => {
    response.json();
    response.then((data) => {
        console.log(data);
    })
}).catch(error => {
    console.error(error);
})