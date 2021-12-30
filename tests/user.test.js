const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Test',
    email: 'test@test.com',
    password: 'Test@1234',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user', async() => {
    const response = await request(app).post('/users').send({
        name: 'Amit Rana',
        email: 'amitrana123@gmail.com',
        password: 'Test@1234'
    }).expect(201)

    //Assert that DB has changed
    //const user = await User.findById(response.body.user_id)
    //expect(user).not.toBeNull()
})


test('Should login existing user', async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})


test('Should not login with bad credentials', async () => {
    await request(app).post('/users/login').send({
        email: 'dummy@dummy.com',
        password: 'dummypassword'
    }).expect(400)
})

test('Should get profile for user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})


test('Should not get profile for unauth user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete account of authorizeduser', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not delete account of unauthorized user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

