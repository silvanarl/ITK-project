import React from 'react';
import PropTypes from 'prop-types';
import {createComment } from '../../API/crud';

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
        <div>
            <label htmlFor="">Escribe un comentario</label>
            <form action="">
                <textarea 
                name="content" 
                value={notes.content}
                id="" 
                cols="30" 
                rows="5"
                placeholder="Escribe una nota"
                onChange={catchComment}
                >
                </textarea>
                <button onClick={() =>sendComment(notes)}>Enviar</button>
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