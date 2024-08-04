const mongoose = require('mongoose');
const database = process.env.DB_HOST
console.log(database)
const mongoURI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`

const connectToMongo = async () => {
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(mongoURI) 
    console.log('Mongo connected karma')
}
catch(error) {
    console.log(error)
    process.exit() 
}
}
module.exports = connectToMongo;