const express = require('express');
require('./db/mongoose')
//const User = require('./models/user')
//const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT

// app.use((req, res, next) => {
//     //console.log(req.method, req.path)
//     //next()
//     if (req.method === 'GET') {
//         res.send('GET methos are disabled')
//     } else {
//         next()
//     }
// })


// app.use((req, res, next) => {
//     res.status(503).send('under maintenance')
// })


// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a doc or docx file'))
//         }

//         cb(undefined, true)
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })


app.use(express.json());
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up and running on ' + port)
})

//const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken');


// const myFunction = async () => {
//     // const password = 'Red12345!'
//     // const hashedPassword = await bcrypt.hash(password, 8)

//     // console.log(password)
//     // console.log(hashedPassword)

//     // const isMatch = await bcrypt.compare('red12345!', hashedPassword)
//     // console.log(isMatch)

//     const token = jwt.sign({ _id: 'abc123' }, 'amitrana123', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'amitrana123')
//     console.log(data)
// }

// myFunction()

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('61c266ea73125f6cee1165ca')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     try {
//     const user = await User.findById('61c264f188e0cf1757529a1a')
//     await user.populate('tasks')
//     console.log(user.tasks)
//     } catch (e) {
//         console.log(e)
//     }

// }

// main()

