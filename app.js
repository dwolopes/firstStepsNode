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
    console.log(note)
  } else {
    console.log('Error: There was a error on adding your note. Try it again =)')
  }
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'read') {
  notes.getNote(argv.title)
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
