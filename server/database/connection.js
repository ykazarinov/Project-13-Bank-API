const mongoose = require('mongoose')
// const databaseUrl = process.env.DB_URL
const databaseUrl = "mongodb+srv://admin:GyccV8HSloqpIU3z@cluster0.hgxapfo.mongodb.net/argentbank?retryWrites=true&w=majority"
// 'mongodb+srv://admin:GyccV8HSloqpIU3z@cluster0.hgxapfo.mongodb.net/argentbank?retryWrites=true&w=majority'
//  || 'mongodb://localhost/argentBankDB'
//test

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
  /// test
}
