import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './workshop.css';
import NavWriters from './NavWriters';
import Notes from './Notes';
import Comments from './Comments';
import firebase from '../../firebase.config';
import {getComments} from '../../API/crud';

export const Workshop = (props) => {
    const {init, initID} = props;
    const [view, setView] = useState('');

    const initialStateComment = {
        idInitiative: initID,
        content: '',
        user: localStorage.getItem('user'),
        date: firebase.firestore.Timestamp.fromDate(new Date()),

    };
    const [notes, setNotes] =useState(initialStateComment);
    const [notesBox, setNotesBox] =useState([]);
    const [comments, setComments] =useState(initialStateComment);
    const [commentsBox, setCommentsBox] =useState([]);

    useEffect(() => {
        getComments(setCommentsBox, 'comments');
        getComments(setNotesBox, 'notes');
      }, []);

    return (
        <div>
            <span>{init.status}</span>
            <NavWriters setView={setView} />
            {view === 'anotaciones' ? (
                <Notes 
                    notes={notes} 
                    setNotes={setNotes} 
                    initialStateComment={initialStateComment} 
                    notesBox={notesBox}
                    setNotesBox={setNotesBox}
                />
            ) : view === 'comentarios' ? (
                <Comments 
                    comments={comments}
                    setComments={setComments}
                    initialStateComment={initialStateComment} 
                    commentsBox={commentsBox}
                    setCommentsBox={setCommentsBox}
                />
            )  : (null)}
        </div>
    )
};

Workshop.propTypes = {
    init: PropTypes.object.isRequired,
    initID: PropTypes.string.isRequired
};


