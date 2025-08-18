let parent = document.querySelector('.parent')
let child = document.querySelector('.ch')

parent.addEventListener('click', (ev) => {
    if(ev.target.classList.contains('ch')) {
        console.log(ev.target);
    }
    
    
})