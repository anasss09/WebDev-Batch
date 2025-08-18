let btn = document.querySelector('.btn')
let apiList = document.querySelector('.apiList')

function getData(url) {
    return new Promise((reslove, reject) => {
        fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            reslove(res);
            
        })
        .catch((err => {
            reject(err);
            
        })) 
    })
}

btn.addEventListener('click', () => {
    getData('https://randomuser.me/api/')
    .then((res) => {
        apiList.innerText = ""
        let user = res.results[0]
        for(let [key, value] of Object.entries(user.login)) {
            let li = document.createElement('li')
            li.innerText = `${key} : ${value}`
            apiList.appendChild(li)
        }
    })
    .catch((err) => {
        console.log(err);
        
    })
})


