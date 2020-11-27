import React from 'react';
import PropTypes from 'prop-types';
import {createComment } from '../../API/crud';

const Commits = (props) => {
    const {
        commits,
        setCommits,
        initialStateComment,
        commitsBox,
        initID
        } = props;
    
        const catchComment = (e) => {
            const { name, value } = e.target;
            console.log(e.target.value);
            setCommits({ ...commits, [name]: value });
        };
        const sendComment = (obj) => {
            if (obj.content !== '') {
              createComment(obj, 'commits');
              setCommits({ ...initialStateComment });
            }
            console.log(' no content');
          };
    return (
        <div>
            <label htmlFor="">Escribe un comentario</label>
            <textarea 
            name="content" 
            value={commits.content}
            id="" 
            cols="30" 
            rows="5"
            placeholder="Escribe una nota"
            onChange={(e)=>catchComment(e)}
            >
            </textarea>
            <button onClick={()=>sendComment(commits)}>Enviar</button>
            <div>
            {commitsBox.map((element) => {
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

Commits.propTypes = {
    commits: PropTypes.object.isRequired,
    commitsBox: PropTypes.arrayOf(PropTypes.object).isRequired,
    setCommits: PropTypes.func.isRequired,
    initialStateComment: PropTypes.object.isRequired,
    initID: PropTypes.string.isRequired
};
export default Commits;