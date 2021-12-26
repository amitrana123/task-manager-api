const sgMail = require('@sendgrid/mail')
//const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'amitrana123@gmail.com',
//     from: 'amitrana123@gmail.com',
//     subject: 'Test Subject',
//     text: 'This is sample text'
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amitrana123@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amitrana123@gmail.com',
        subject: 'Sorry to see you are leaving us',
        text: `Sorry to see you are leaving ${name}. Please tell us what went wrong.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}