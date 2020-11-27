import React from 'react';
import PropTypes from 'prop-types';
import {createComment } from '../../API/crud';
import './writecomments.css';


const WriteComments = (props) => {
    const {notes, setNotes, initialStateComment} = props;

    const catchComment = (e) => {
        const { name, value } = e.target;
        setNotes({ ...notes, [name]: value });
    };

    const sendComment = (obj) => {
        if (obj.content !== '') {
          createComment(obj, 'notes');
          setNotes({ ...initialStateComment });
        }
        console.log(' no content');
      };
    return (
        <div className="notes-container">
            <label className="form-title" htmlFor="">Anotaciones</label>
            <form className="f-textarea" action="">
                <textarea 
                name="content" 
                value={notes.content}
                id="" 
                cols="30" 
                rows="5"
                placeholder="Escribe una nota"
                onChange={catchComment}
                className="textarea"
                >
                </textarea>
                <button className="send-btn" onClick={() =>sendComment(notes)}>Enviar</button>
            </form>
        </div>
    )
};

WriteComments.propTypes = {
    notes: PropTypes.object.isRequired,
    setNotes: PropTypes.func.isRequired,
    initialStateComment: PropTypes.object.isRequired,
};

export default WriteComments;