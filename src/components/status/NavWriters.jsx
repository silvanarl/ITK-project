import React from 'react';
import PropTypes from 'prop-types';

const NavWriters = (props) => {
    const { setView } = props;
    return (
        <div className="cho-btn-status">
            <button onClick={() => setView('anotaciones')} className="workshop-button" type="button"><img className="icon-button" src="https://firebasestorage.googleapis.com/v0/b/interbank-project.appspot.com/o/assets%2Ficons%2Fnotes.png?alt=media&token=03bd724a-5198-4a47-ad77-b4fd69aa58d8" alt="Notes icon"/>Anotaciones</button>
            <button onClick={() => setView('comentarios')} className="workshop-button" type="button"><img className="icon-button" src="https://firebasestorage.googleapis.com/v0/b/interbank-project.appspot.com/o/assets%2Ficons%2Fcomments.png?alt=media&token=ffaf8dc3-4e7f-4beb-a967-37df192daccd" alt="Comments icon"/>Comentarios</button>
        </div>
    )
};

NavWriters.propTypes = {
    setView: PropTypes.func.isRequired,
}
export default NavWriters;
