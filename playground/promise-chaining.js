require('../src/db/mongoose')
const User = require('../src/models/user')

//61aea688692889ba8fa52b5d

// User.findByIdAndUpdate('61abfa8955ee50c44eac2d13', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age })
    const count = await User.countDocuments({ age: age })
    return count
}

updateAgeAndCount('61aea638692889ba8fa52b5b', 40).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})