import React from 'react';
import PropTypes from 'prop-types';
import {createComment } from '../../API/crud';
import './notes.css'

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
        <div className='notes-container'>
            <label className='form-title space-top' htmlFor="">Escribe un comentario</label>
            <textarea 
            className='textarea'
            name="content" 
            value={notes.content}
            id="" 
            cols="30" 
            rows="5"
            placeholder="Escribe una nota"
            onChange={(e)=>catchComment(e)}
            >
            </textarea>
            <button className='send-btn'onClick={()=>sendComment(notes)}>Enviar</button>
            <div>
                {console.log(initID)}
            {notesBox.map((element) => {
                    switch (element.idInitiative) {
                        case initID:
                            return (
                                    <div className='mes-box'key={element.id}>
                                        <span className='mes-user'>{element.user}</span>
                                        <span className='mes-content'>{element.content}</span>
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