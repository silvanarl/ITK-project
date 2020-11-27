import React from 'react';
import PropTypes from 'prop-types';
import {createComment } from '../../API/crud';


const Comments = (props) => {
    const {comments, setComments, commentsBox, initialStateComment } = props;
    const catchComment = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        setComments({ ...comments, [name]: value });
    };

    const sendComment = (obj) => {
        if (obj.content !== '') {
          createComment(obj, 'comments');
          setComments({ ...initialStateComment });
        }
        console.log(' no content');
      };
    return (
        <div>
            <label htmlFor="">Escribe un comentario</label>
                <textarea 
                name="content" 
                value={comments.content}
                id="" 
                cols="30" 
                rows="5"
                placeholder="Escribe una nota"
                onChange={(e)=>catchComment(e)}
                >
                </textarea>
                <button onClick={()=>sendComment(comments)}>Enviar</button>
            <div>
                {console.log(commentsBox)}
                {commentsBox.map((comment) => (
                    <div key={comment.id}>
                        <span>{comment.user}</span>
                        <span>{comment.content}</span>
                     {/* <span>{note.date}</span> */}
                    </div>
                ))}
            </div>
        </div>
    )
};

Comments.propTypes = {
    comments: PropTypes.object.isRequired,
    commentsBox: PropTypes.arrayOf(PropTypes.object).isRequired,
    setComments: PropTypes.func.isRequired,
    setCommentsBox: PropTypes.func.isRequired,
    initialStateComment: PropTypes.object.isRequired,
};

export default Comments;