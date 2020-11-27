import React from 'react';
import PropTypes from 'prop-types';
import {createComment } from '../../API/crud';
// import WriteNotes from './WriteNotes';
// import BoxNotes from './BoxNotes';

const Notes = (props) => {
    const {notes, setNotes, notesBox, initialStateComment } = props;
    
    const catchComment = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        setNotes({ ...notes, [name]: value });
    };

    const sendComment = (obj) => {
        if (obj.content !== '') {
          createComment(obj, 'notes');
          setNotes({ ...initialStateComment });
        }
        console.log(' no content');
      };
      {console.log('esto desta en notes')}

    return (
        <div>
            <label htmlFor="">Escribe un comentario</label>
            <textarea 
            name="content" 
            value={notes.content}
            id="" 
            cols="30" 
            rows="5"
            placeholder="Escribe una nota"
            onChange={(e)=>catchComment(e)}
            >
            </textarea>
            <button onClick={()=>sendComment(notes)}>Enviar</button>
            <div>
                {notesBox.map((note) => (
                    <div key={note.id}>
                    <span>{note.user}</span>
                    <span>{note.content}</span>
                    {/* <span>{note.date}</span> */}
                    </div>
                ))}
            </div>

        </div>
    )
};

Notes.propTypes = {
    notes: PropTypes.object.isRequired,
    notesBox: PropTypes.arrayOf(PropTypes.object).isRequired,
    setNotes: PropTypes.func.isRequired,
    setNotesBox: PropTypes.func.isRequired,
    initialStateComment: PropTypes.object.isRequired,
};

export default Notes;