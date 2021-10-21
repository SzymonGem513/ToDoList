const Note = require('../../db/models/note');

module.exports = {
    saveNote(req, res) {

        const newNote = new Note({
            title: 'zakupy',
            body: 'mleko, jajka, woda, ser'
        });

        newNote.save().then(() => {
            console.log('notatka została zapisana!');
        });


        res.send('Serwer is UP!');
    }
}