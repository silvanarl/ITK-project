import React, {useState, useEffect} from 'react';
import firebase from '../../firebase.config';
import PropTypes from 'prop-types';
import {
    createComment,
    getComments
    } from '../../API/crud';


const Comite = ({init, initID}) => {
    console.log(init)
    const initialStateComment = {
        idInitiative: initID,
        content: '',
        user: localStorage.getItem('user'),
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    const [comiteComment, setComiteComment] =useState(initialStateComment);
    const [comiteCommentBox, setComiteCommentBox] =useState([]);

    const catchComment = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        setComiteComment({ ...comiteComment, [name]: value });
    };

    const sendComment = (obj) => {
        if (obj.content !== '') {
          createComment(obj, 'comiteComments');
          setComiteComment({ ...initialStateComment });
        }
        console.log(' no content');
      };
    useEffect(() => {
        getComments(setComiteCommentBox, 'comiteComments');
      }, []);
    return (
        <div>
            <label htmlFor="">Escribe un comentario</label>
            <textarea 
            name="content" 
            value={comiteComment.content}
            id="" 
            cols="30" 
            rows="5"
            placeholder="Escribe una nota"
            onChange={(e)=>catchComment(e)}
            >
            </textarea>
            <button onClick={()=>sendComment(comiteComment)}>Enviar</button>
            <div>
                {comiteCommentBox.map((element) => {
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

Comite.propTypes = {
    init: PropTypes.object.isRequired,
    initID: PropTypes.string.isRequired
};
export default Comite;
