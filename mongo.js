const mongoose = require('mongoose')

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://new-user-1234:${password}@cluster0.exvxs.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const schema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', schema)

const person = new Person({
  name: name,
  number: number,
})

if (process.argv.length === 3) {
  console.log('phonebook:')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}

if (process.argv.length === 5) {
  person.save().then(
    console.log(`added ${name} number ${number} to phonebook`),
    mongoose.connection.close()
  )
}