let btn = document.querySelector('.btn')
let factList = document.querySelector('.factList')


btn.addEventListener('click', throttling((ev) => {

    fetch('https://catfact.ninja/fact')
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res);
        factList.innerText = ""
        let li = document.createElement('li')
        li.innerText = res.fact
        factList.appendChild(li)
    })
    
}, 2000))


//Github free API



