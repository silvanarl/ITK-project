import React from 'react';
import PropTypes from 'prop-types';

const NavWriters = (props) => {
    const { setView } = props;
    return (
        <div>
            <button onClick={() => setView('anotaciones')} className="workshop-button" type="button">Anotaciones</button>
            <button onClick={() => setView('comentarios')} className="workshop-button" type="button">Comentarios</button>
        </div>
    )
};

NavWriters.propTypes = {
    setView: PropTypes.func.isRequired,
}
export default NavWriters;
