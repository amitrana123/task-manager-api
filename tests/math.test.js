const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
})


test('Should calculate total without tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.50)
})

test('Should convert 32 F to 0 C', () => {
    const tempature = fahrenheitToCelsius(32)
    expect(tempature).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
    const tempature = celsiusToFahrenheit(0)
    expect(tempature).toBe(32)
})


// test('Async Demo', (done) => {
//     setTimeout(() => {
//         expect(2).toBe(1)
//         done()
//     }, 2000)
    
// })

// test('Add two no', (done) => {
//     add(2, 3).then((sum) => {
//         expect(sum).toBe(5)
//         done()
//     })
// })

test('Add two no using async await', async () => {
    const sum = await add(2, 3)
    expect(sum).toBe(5)
})
