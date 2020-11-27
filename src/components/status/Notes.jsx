import React from 'react';
import PropTypes from 'prop-types';
import {createComment } from '../../API/crud';

const Notes = (props) => {
    const {notes, setNotes, notesBox, initialStateComment, initID } = props;
    
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
        console.log(obj);
      };

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
                {console.log(initID)}
            {notesBox.map((element) => {
                    switch (element.idInitiative) {
                        case initID:
                            return (
                                <div key={element.id}>
                                    <span>{element.user}</span>
                                    <span>{element.content}</span>
                                </div>
                        )
                        default:
                    }
                })}
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
    initID: PropTypes.string.isRequired
};

export default Notes;