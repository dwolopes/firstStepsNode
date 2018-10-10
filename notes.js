
let addNote = (title, body) => {
  console.log('adding notes', title, body)
}

let getAll = () => {
  console.log('Getting all notes')
}

let getNote = (title) => {
  console.log('Reading note', title)
}

let removeNote = (title) => {
  console.log('Removing note', title)
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
