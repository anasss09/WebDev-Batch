let btn = document.querySelector('.btn')
let apiList = document.querySelector('.apiList')


btn.addEventListener('click', () => {
    axios('https://randomuser.me/api/')
        .then(res => {
            let user = res.data.results[0]
            for(let [key, value] of Object.entries(user.login)) {
                let li = document.createElement('li')
                li.innerText = `${key} : ${value}`
                apiList.appendChild(li)
            }
            
        })
        .catch(err=> {
            console.log(err);
            
        })
})