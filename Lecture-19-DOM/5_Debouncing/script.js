let body = document.querySelector('body')

function scrollEvent() {
    console.log("Event function");
    
}


window.addEventListener('scroll', debouncing(scrollEvent, 1000))


function debouncing(fun, delay) {
    let id;
    return function () {
        clearInterval(id)
        id = setTimeout(() => {
            fun()
        }, 1000)
    }
}