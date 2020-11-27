import React from 'react';
import PropTypes from 'prop-types';
import WriteComments from './WriteComments';
import BoxComments from './BoxComments';

const Notes = (props) => {
    const {notes, setNotes, notesBox, setNotesBox, initialStateComment } = props;
    return (
        <div>
            <WriteComments 
            notes={notes} 
            setNotes={setNotes} 
            initialStateComment={initialStateComment} 
            />
            <BoxComments 
            notesBox={notesBox} 
            setNotesBox={setNotesBox} 
            />
        </div>
    )
};

Notes.propTypes = {
    notes: PropTypes.object.isRequired,
    notesBox: PropTypes.arrayOf(PropTypes.object).isRequired,
    setNotes: PropTypes.func.isRequired,
    setNotesBox: PropTypes.func.isRequired,
    initialStateComment: PropTypes.object.isRequired,
};

export default Notes;