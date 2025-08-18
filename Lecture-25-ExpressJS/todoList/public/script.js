const inp = document.querySelector('.inp')
const btn = document.querySelector('.btn')
const taskList = document.querySelector('.taskList')


function updatetask(todos) {
    taskList.innerText = ""
    todos.forEach(e => {
        let li = document.createElement('li')
        li.innerHTML = `
                <span>${e}</span>
                <div>
                    <button class="upBtn">⬆</button>
                    <button class="downBtn">⬇</button>
                    <button class="deleteBtn">❌</button>
                </div>
            `;
        // li.innerText = e;
        taskList.appendChild(li)
    })
}

taskList.addEventListener('click',async (ev) => {
    let item = ev.target
    if(item.classList.contains('upBtn')) {
        let {data} = await axios.get(`/increase?task=${item.parentElement.previousElementSibling.innerText}`)
        updatetask(data)
    } else if(item.classList.contains('downBtn')) {
        let {data} = await axios.get(`/decrease?task=${item.parentElement.previousElementSibling.innerText}`)
        updatetask(data)
    } else if(item.classList.contains('deleteBtn')) {
        let {data} = await axios.get(`/delete?task=${item.parentElement.previousElementSibling.innerText}`)
        updatetask(data)
    }
});

btn.addEventListener('click', async (ev) => {
    ev.preventDefault()

    try{
        let {data} = await axios.get(`/addtask?task=${inp.value}`)
        updatetask(data)
        inp.value = ""
    } catch(err) {
        console.log(err);
    }
    
})

async function initialTask() {
    try{
        let {data} = await axios.get('/todos')
        updatetask(data)
    }catch({response}) {
        let {data} = response;
        alert(data.msg);
    }
}

initialTask()