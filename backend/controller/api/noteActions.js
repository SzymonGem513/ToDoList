const Note = require('../../db/models/note');

class NoteActions {


    async getAllNotes(req, res) {
        let data;
        try {
            data = await Note.find({});
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }

        res.status(200).json(data);
    }

    async getNote(req, res) {
        const id = req.params.id;
        let data;
        try {
            data = await Note.findOne({ _id: id });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }

        res.status(200).json(data);
    }

    async saveNote(req, res) {
        const title = req.body.title;
        const body = req.body.body;
        let note;

        try {
            note = new Note({ title, body })
            await note.save();
        } catch (err) {
            return res.status(422).json({ message: err.message });
        }

        res.status(201).json(note)
    }

    async updateNote(req, res) {
        const id = req.params.id;
        const title = req.body.title;
        const body = req.body.body;
        let note;

        try {
            note = await Note.findOne({ _id: id });
            note.title = title;
            note.body = body;
            await note.save()
        } catch {
            return res.status(500).json({ message: err.message });
        }

        res.status(201).json(note)
    }

    async deleteNote(req, res) {
        const id = req.params.id;

        try {
            await Note.deleteOne({ _id: id });
        } catch {
            return res.status(500).json({ message: err.message });
        }

        res.sendStatus(204);
    }

}

module.exports = new NoteActions();