const mongoose = require('mongoose');
const database = process.env.DB_HOST
const port = process.env.DB_PORT
console.log(database)
console.log(port)
const mongoURI = `mongodb+srv://rajakyash23:5po6nmCGVR4PdhF4@quizquest.jif67.mongodb.net/quizquest`

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