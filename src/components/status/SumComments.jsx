import React from 'react';
import PropTypes from 'prop-types';
import { createComment } from '../../API/crud';

const SumComments = (props) => {
    const {commentSum,
    setCommentSum,
    initialStateComment,
    commentSumBox,
    initID
    } = props;

    const catchComment = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        setCommentSum({ ...commentSum, [name]: value });
    };
    const sendComment = (obj) => {
        if (obj.content !== '') {
          createComment(obj, 'summaryComments');
          setCommentSum({ ...initialStateComment });
        }
        console.log(' no content');
      };

    return (
        <div>
            <label htmlFor="">Escribe un comentario</label>
            <textarea 
            name="content" 
            value={commentSum.content}
            id="" 
            cols="30" 
            rows="5"
            placeholder="Escribe una nota"
            onChange={(e)=>catchComment(e)}
            >
            </textarea>
            <button onClick={()=>sendComment(commentSum)}>Enviar</button>
            <div>
                {commentSumBox.map((element) => {
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

SumComments.propTypes = {
    commentSum: PropTypes.object.isRequired,
    commentSumBox: PropTypes.arrayOf(PropTypes.object).isRequired,
    setCommentSum: PropTypes.func.isRequired,
    initialStateComment: PropTypes.object.isRequired,
    initID: PropTypes.string.isRequired
};
export default SumComments;