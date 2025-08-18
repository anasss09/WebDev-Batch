let btn = document.querySelector('.Btn')

function throth() {
    console.log("Clicked");
    
}


btn.addEventListener('click', throttling(throth, 1000));


function throttling(fun, delay) {
    let initialTime = 0;
    return function () {
        console.log(new Date().getTime() - initialTime);
        
        if(new Date().getTime() - initialTime >= delay) {
            initialTime = new Date().getTime()
            fun()
        }
        else {
            console.log("Nhi krne Dunga");
            
        }
    }
}