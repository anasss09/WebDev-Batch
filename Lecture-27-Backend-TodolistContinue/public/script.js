const inp = document.querySelector('.inp')
const form = document.querySelector('.form-todo')
const taskList = document.querySelector('.taskList')

async function initialTask() {
    try{
        let {data} = await axios.get('/todos')
        addTodos(data)
    } catch(err) {
        console.log(err);
    }
}
initialTask()



form.addEventListener('submit',async (ev) => {
    ev.preventDefault()
    let task = inp.value
    
    try{
        let {data} = await axios.post('/todos', {task})
        addTodos(data)
        
    }catch(err) {
        console.log(err);
    }
})

function addTodos(task) {
    taskList.innerText = ""
    task.forEach((t) => {
        let li = document.createElement('li')
        li.classList.add('taskContent')
        li.innerHTML = `<div class="taskItem">${t} </div>
                <div class="btngrp">
                    <button class="upBtn Tbtn">⬆</button>
                    <button class="downBtn Tbtn">⬇</button>
                    <button class="deleteBtn Tbtn">⤫</button>
                </div>`;
        taskList.appendChild(li)
    })
    inp.value = ""
}

taskList.addEventListener('click', async (ev) => {
    let item = ev.target

    if(item.classList.contains('upBtn')) {
        try{
            let task = item.parentElement.previousElementSibling.innerText
            let {data} = await axios.get(`/inreaseTask?task=${task}`)
            addTodos(data);
        } catch(err) {
            console.log(err);
        }

    } else if(item.classList.contains('downBtn')) {

        try{
            let task = item.parentElement.previousElementSibling.innerText
            let {data} = await axios.get(`/decreaseTask?task=${task}`)
            addTodos(data);
        } catch(err) {
            console.log(err);
        }

    } else if(item.classList.contains('deleteBtn')) {

        try{
            let task = item.parentElement.previousElementSibling.innerText
            let {data} = await axios.get(`/deleteTask?task=${task}`)
            addTodos(data);
        } catch(err) {
            console.log(err);
        }
    }
})

