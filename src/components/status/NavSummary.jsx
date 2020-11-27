import React from 'react';
import PropTypes from 'prop-types';
import commentIcon from '../../assets/SVG/IconoComentar.svg';
import commitIcon from '../../assets/SVG/IconoCompromiso.svg';

const NavSummary = (props) => {
    const { setView } = props;
    return (
        <div className="cho-btn-status">
            <button 
                onClick={() => setView('summary-comments')} 
                className="workshop-button" 
                type="button"
            >
                <img src={commentIcon} className="icon-works" alt=""/>
                Comentarios
            </button>
            <button 
                onClick={() => setView('commits')} 
                className="workshop-button" 
                type="button"
            >
                <img src={commitIcon} className="icon-works" alt=""/>
                Compromisos
            </button>
        </div>
    )
};

NavSummary.propTypes = {
    setView: PropTypes.func.isRequired,
}
export default NavSummary;