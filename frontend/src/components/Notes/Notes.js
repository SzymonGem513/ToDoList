import React from "react";
import "./Notes.css";
import Note from './Note/Note'

class Notes extends React.Component {
    constructor(props){
        super(props);
        this.notes = [
            {
                id: '2323',
                title: 'tytuł notatki jakiś',
                body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam'
            },
            {
                id: '4532',
                title: 'What is Lorem Ipsum?',
                body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            }
        ];
    }

    render(){   
        return (
        <div>
            <p>Moje notatki:</p>

        {this.notes.map(note => 
        <Note
            title={note.title}
            body={note.body}
            id={note.id} />
        )}
        </div>
    );
        }
}

export default Notes;
