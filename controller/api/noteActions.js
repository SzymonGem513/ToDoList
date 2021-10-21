const Note = require('../../db/models/note');

class NoteActions{


    getAllNotes(req, res){
        res.send('API działa!');
    }

    getNote(req, res){
        res.send('Info o notatce')
    }

    saveNote(req, res) {
        // const newNote = new Note({
        //     title: 'zakupy',
        //     body: 'mleko, jajka, woda, ser'
        // });

        // newNote.save().then(() => {
        //     console.log('notatka została zapisana!');
        // });

        const title = req.body.title;
        const body = req.body.body;
        res.send(`Notatka została stworzona. Tytuł: ${title}, treść ${body}.`);
    }

    updateNote(req, res){
        res.send('Notatka zaktualizowana');
    }

    deleteNote(req, res){
        const id = req.params.id;
        res.send(`Notatka usunięta. ID ${id}`);
    }

}

module.exports = new NoteActions();