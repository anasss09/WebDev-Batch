const btn = document.querySelector('.btn')
const ul = document.querySelector('.ul')

function getData (url) {
    return new Promise((resolve, reject) => {

        //Step 1: Create the XML HTTP Request Object
        let xml = new XMLHttpRequest()

        //Step 2: SetUp the request
        xml.open('GET', url)


        //Step 3: Success hone pr request krna
        xml.onload = (res) => {
            let data = JSON.parse(res.target.response);
            // console.log(data);
            // console.log(data.fact);
            resolve(data)
            

        }


        //Step 4: Failure hone pr Error dena
        xml.onerror = (err) => {
            reject(err);
            
        }

         xml.send() //To send request we have to do this
    })
}


//Step 5: Event lgana 
btn.addEventListener('click', () => {
   getData('https://randomuser.me/api/')
   .then((data) => {
        ul.innerText = ""
        let user = data.results[0]
        // console.log(user);
        for(let [key, value] of Object.entries(user.login)) {
            let li = document.createElement('li')
            li.innerText = `${key} : ${value}`
            ul.appendChild(li)
        }
        
   })
   .catch((err) => {
        console.log(err);
        
   })
    
})