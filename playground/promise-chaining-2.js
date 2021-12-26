require('../src/db/mongoose')
const Task = require('../src/models/task')

//61aea688692889ba8fa52b5d

// Task.findByIdAndDelete('61aeb15868be02c94cdc41ed').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: true })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: true})
    return count
}

deleteTaskAndCount('61aeaef1af595144d908b903').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
