import React from 'react';
import PropTypes from 'prop-types';
import {createComment } from '../../API/crud';
import './notes.css'

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
        <div className='space-top'>
            <label className='form-title space-top'htmlFor="">Escribe tu compromiso</label>
            <textarea 
            className='textarea'
            name="content" 
            value={commits.content}
            id="" 
            cols="30" 
            rows="5"
            placeholder="Escribe una nota"
            onChange={(e)=>catchComment(e)}
            >
            </textarea>
            <button className='send-btn' onClick={()=>sendComment(commits)}>Enviar</button>
            <div>
            {commitsBox.map((element) => {
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

Commits.propTypes = {
    commits: PropTypes.object.isRequired,
    commitsBox: PropTypes.arrayOf(PropTypes.object).isRequired,
    setCommits: PropTypes.func.isRequired,
    initialStateComment: PropTypes.object.isRequired,
    initID: PropTypes.string.isRequired
};
export default Commits;