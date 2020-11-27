import React from 'react';
import PropTypes from 'prop-types';
import {createComment } from '../../API/crud';
import './notes.css'

const Comments = (props) => {
    const {comments, setComments, commentsBox, initialStateComment, initID } = props;
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
            <label className='form-title' htmlFor="">Escribe un comentario</label>
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
                {commentsBox.map((comment) => {
                    switch (comment.idInitiative) {
                        case initID:
                            return (
                                <div className='mes-box'key={comment.id}>
                                        <span className='mes-user'>{comment.user}</span>
                                        <span className='mes-content'>{comment.content}</span>
                                    </div>
                        )
                        default:
                    }
                })}
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
    initID: PropTypes.string.isRequired
};

export default Comments;