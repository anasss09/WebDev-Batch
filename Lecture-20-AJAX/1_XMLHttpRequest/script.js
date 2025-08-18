// const btn = document.querySelector('.btn')
// const Data = document.querySelector('.ul')

// //Step 1: Create the XML HTTP Request Object
// let xml = new XMLHttpRequest()

// //Step 2: SetUp the request
// // let url = 'https://dog-api.kinduff.com/api/facts'
// let url = 'https://official-joke-api.appspot.com/random_joke'
// xml.open('GET', url)


// // Step 3: Success hone pr request krna
// xml.onload = (res) => {
//     let data = JSON.parse(res.target.response);
//     // console.log(data);
//     // console.log(data.fact);
//     let li = document.createElement('li')
//     li.innerText = data.fact
//     Data.appendChild(li)

// }

// // // 3. Success hone par request ke kya krna h?
// // xml.onload = (res) => {
// //     let data = JSON.parse(res.target.response);
// //     // console.log(data);
// //     data.forEach((d)=>{
// //         // console.log(d.text)
// //         let li = document.createElement('li');
// //         li.innerText = d.text;
// //         ul.appendChild(li);
// //     })
// // }


// //Step 4: Failure hone pr Error dena
// xml.onerror = (err) => {
//     console.log(err);
    
// }


// //Step 5: Event lgana 
// btn.addEventListener('click', () => {
//     xml.send() //To send request we have to do this
    
// })





const btn = document.querySelector('.btn')
const ul = document.querySelector('.ul')

//Step 1: Create the XML HTTP Request Object
let xml = new XMLHttpRequest()

//Step 2: SetUp the request
// let url = 'https://dog-api.kinduff.com/api/facts'
// let url = 'https://official-joke-api.appspot.com/random_joke'
// let url = 'https://dog-api.kinduff.com/api/facts'
let url = 'https://randomuser.me/api/'
// let url = 'https://picsum.photos/id/237/info'
xml.open('GET', url)


// Step 3: Success hone pr request krna
xml.onload = (res) => {
    let data = JSON.parse(res.target.response);
    // console.log(res);
    let user =  data.results[0]
    console.log(user.login);

    for(let [key, value] of Object.entries(user.login)) {
        let li = document.createElement('li')
        li.innerText = `${key} : ${value}`
        ul.appendChild(li)
    }
    

//     //For Entire Objects
//     data.results.forEach(d => {
//     Object.entries(d).forEach(([key, value]) => {
//         // If value is an object, stringify it for display
//         let displayValue = (typeof value === 'object' && value !== null)
//             ? JSON.stringify(value)
//             : value;
//         console.log(key, displayValue);

//         let li = document.createElement('li');
//         li.innerText = `${key}: ${displayValue}`;
//         Data.appendChild(li);
//     });
// });

}



//Step 4: Failure hone pr Error dena
xml.onerror = (err) => {
    console.log(err);
    
}


//Step 5: Event lgana 
btn.addEventListener('click', () => {
    xml.send() //To send request we have to do this
    
})