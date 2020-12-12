const util = require("util");
const fs = require("fs");
const uuidv1 = require("uuid/v1");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
  read() {
    return readFileAsync("db/db.json", "utf8");
  }
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }
  getNotes() {
    return this.read().then((notes) => {
      let parseNotes;
      try {
        parseNotes = [].concat(JSON.parse(notes));
      } catch {
        parseNotes = [];
      }
      return parseNotes;
    });
  }
  addNote(note) {
    const { title, text } = note;
    if (!title || !text) {
      throw new Error("Title and text cannot be blank");
    }
    const newNote = { title, text, id: uuidv1() };
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }
  removeNote(id) {
    return this.getNotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filteredNotes) => this.write(filteredNotes));
  }
}

module.exports = new Notes();
// const fs = require("fs");
// const uuidv1 = require("uuid/v1");

// class Notes {
//   getNotes() {
//     fs.readFile("./db/db.json", "utf8", (err, response) => {
//       if (err) throw err;
//       let allNotes;
//       try {
//         allNotes = [].concat(JSON.parse(response));
//       } catch (err) {
//         allNotes = [];
//       }
//       console.log(allNotes);
//       return allNotes;
//     });
//   }
//   writeNotes(note) {
//     return writeFile("db/db.json", JSON.stringify(note));
//   }
//   addNote(note) {
//     console.log(note);
//     const newNote = { ...note, id: uuidv1() };
//     return this.getNotes()
//       .then((notes) => [...notes, newNote])
//       .then((updatedNotes) => this.writeNotes(updatedNotes))
//       .then(() => newNote);
//   }
// }
  
//   module.exports = new Notes();
