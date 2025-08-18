const { write, writeFile } = require('fs');
const fs = require('fs/promises')
const path = require('path')
const filepath = path.join(__dirname,'..','database','todos.json')
console.log(filepath);

class Tasks {

    static getTodos() {
        return new Promise(async (resolve, reject) => {
            try{
                let data = await fs.readFile(filepath)
                resolve(JSON.parse(data))
            } catch(err) {
                reject(err)
            }
        })
    }

    static addTask(task) {
        return new Promise(async (resolve, reject) => {
            try{

                //1) Read the Data
                let data = await fs.readFile(filepath)
                let tasks = JSON.parse(data)

                // 2) Manuplate the Data
                tasks.unshift(task)                

                // 3)Write in the todos.json
                await fs.writeFile(filepath, JSON.stringify(tasks))
                
                resolve("Success")
                
            } catch(err) {
                reject(err)
            }
        })
    }

    static deleteTask(task) {
        return new Promise(async(resolve, reject) => {
            try{

                // 1) Read the todos.json
                let data = await fs.readFile(filepath)
                let tasks = JSON.parse(data)

                // 2) Delete the task in todos.json
                tasks = tasks.filter(t => t != task)

                await fs.writeFile(filepath, JSON.stringify(tasks))

                resolve("Deleted")

            } catch(err) {
                console.log(err);
            }
        })
    }

    static increaseTask(task) {
        return new Promise(async (resolve, reject) => {
            try{
                let data = await fs.readFile(filepath)
                let tasks = JSON.parse(data)

                let indx = tasks.indexOf(task)
                if(indx > 0 && indx <= tasks.length - 1) {
                    let temp = tasks[indx]
                    tasks[indx] = tasks[indx - 1]
                    tasks[indx - 1] = temp;
                }

                await fs.writeFile(filepath, JSON.stringify(tasks))
                resolve("Increased")


            } catch(err) {

            }
        })
    }

    static decreaseTask(task) {
        return new Promise(async (resolve, reject) => {
            let data = await fs.readFile(filepath)
            let tasks = JSON.parse(data)

            let indx = tasks.indexOf(task)
            if(indx >= 0 && indx < tasks.length - 1) {
                let temp = tasks[indx]
                tasks[indx] = tasks[indx + 1]
                tasks[indx + 1] = temp;
            }

            await fs.writeFile(filepath, JSON.stringify(tasks))
            resolve("Decreased")
        })
    }


}

module.exports = Tasks