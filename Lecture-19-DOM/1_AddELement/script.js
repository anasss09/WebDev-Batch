let btn = document.querySelector('.btn')
let movieList = document.querySelector('.movieList')

let movies = [
    "Irom Man",
    "Bala", 
    "Conjuring",
    "The red Door",
    "Incidous"
]


// let i=0; 

// btn.addEventListener('click', () => {

//     if(i == movies.length) {
//         let url = 'https://i.imgflip.com/2/3q84ls.jpg'
//         movieList.innerHTML += `<li>
//             <img src="https://i.imgflip.com/2/3q84ls.jpg" />
//         </li>`
//         i++;
        

//     } else if(i < movies.length){
//         let li = document.createElement('li')
//         movieList.innerHTML += `<li>${movies[i]}</li>`
//         i++;
//     }

// })

let imgLinks = [
    "https://i.imgflip.com/2/3q84ls.jpg", 
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1025/600/400",
    "https://picsum.photos/id/1035/600/400",
    "https://picsum.photos/id/1045/600/400",
    "https://picsum.photos/id/1055/600/400"
]

let i=0; 

btn.addEventListener('click', () => {

    if(i == movies.length) {
        let url = imgLinks[ Math.floor( (Math.random() * imgLinks.length) )]
        let img= document.createElement('img')
        img.setAttribute('src', url)
        movieList.append(img)
        i++;
        

    } else if(i < movies.length){
        let li = document.createElement('li')
        li.innerText = movies[i]
        movieList.appendChild(li)
        i++;
    } 

    // else if(i > movies.length && i <= 10) {
    //     let url = imgLinks[ Math.floor( (Math.random() * imgLinks.length) )]
    //     let img= document.createElement('img')
    //     img.setAttribute('src', url)
    //     movieList.append(img)
    //     i++;
    
    // }

})


//Div span pr innerHtml chalta 
//input field pr .value chalta

// if visible is set remove it, otherwise add it
// div.classList.toggle("visible");

