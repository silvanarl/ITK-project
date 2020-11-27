import React from 'react';
import PropTypes from 'prop-types';

const NavSummary = (props) => {
    const { setView } = props;
    return (
        <div>
            <button onClick={() => setView('summary-comments')} className="workshop-button" type="button">Comentarios</button>
            <button onClick={() => setView('commits')} className="workshop-button" type="button">Compromisos</button>
        </div>
    )
};

NavSummary.propTypes = {
    setView: PropTypes.func.isRequired,
}
export default NavSummary;