const mongoose = require('mongoose');
const database = process.env.MONGO_URI
const port = process.env.DB_PORT
console.log(database)
console.log(port)
const mongoURI = `${database}`

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