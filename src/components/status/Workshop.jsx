import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './workshop.css';
import NavWriters from './NavWriters';
import Notes from './Notes';
import Comments from './Comments';
import firebase from '../../firebase.config';

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
    console.log(init);
    console.log(initID);
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
                    commentsBox={commentsBox}
                    setCommentsBox={setCommentsBox}
                    initialStateComment={initialStateComment} 
                />
            )  : (null)}
        </div>
    )
};

Workshop.propTypes = {
    init: PropTypes.object.isRequired,
    initID: PropTypes.string.isRequired
};


