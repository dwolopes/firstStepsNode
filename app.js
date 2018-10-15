console.log('Starting app.js')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv
let command = argv._[0]

console.log(command)

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body)
  if (_.hasIn(note, 'title')) {
    console.log('Note created')
    notes.logNote(note)
  } else {
    console.log('Error: There was a error on adding your note. Try it again =)')
  }
} else if (command === 'list') {
  let allNotes = notes.getAll()
  if (allNotes.length > 0) {
    allNotes.forEach((note, index) => {
      console.log(`Note Número ${index}`)
      notes.logNote(note);
    })
  } else {
    console.log('There is not no note in our database.')
  }
} else if (command === 'read') {
  let note = notes.getNote(argv.title)
  if (note) {
    console.log('Note Found')
    notes.logNote(note)
  } else {
    console.log('Error: We could find your note :( Check the title again')
  }
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title)
  if (noteRemoved) {
    console.log(`The note ${argv.title} was removed.`)
  } else {
    console.log('We could find this note to remove.')
  }
} else {
  console.log('Command not recognized.')
}
