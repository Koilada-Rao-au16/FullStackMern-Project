const dotenv = require('dotenv')
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
require('./db/connection')


const PORT = process.env.PORT


// mongoose.connect(DB)
//     // useNewUrlParser: true,
//     // useCreateIndex: true,
//     // useUnifiedTopology: true,
//     // useFindAndModify:false
// .then(() => {
//     console.log(`connection successful`)
// }).catch((err) => {
//     console.log(`no connection`)
// })

const middleware = (req, res, next) => {
    console.log('hello middleware welcome for validate')
    next()
}

app.get('/', (req, res) => {
    res.send('Hello world..')
})

app.get('/about',middleware, (req, res) => {
    res.send('it is from about route')
})

app.get('/contact', (req, res) => {
    res.send('it is from contact route')
})

app.get('/signin', (req, res) => {
    res.send('it is from signin route')
})

app.get('/signup', (req, res) => {
    res.send('it is from signup route')
})


app.listen(PORT, () => {
    console.log(`server is runnig at port ${PORT}`)
})

