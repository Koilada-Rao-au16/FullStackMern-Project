const Mongoose  = require("mongoose");

const DB = process.env.DATABASE

Mongoose.connect(DB).then(() => {
    console.log('server connected')
}).catch((err) => {
    console.log('no connection')
})