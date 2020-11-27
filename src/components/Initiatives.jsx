import React from 'react';
import Search from './general/Search';
import InitiativesCard from './InitiativesCard';
import PropTypes from 'prop-types';

const Initiatives = ({allInitiatives}) => {
    return (
        <div>
            <h2 className="title">Iniciativas</h2>
            <p className="description">Busca iniciativas por palabras clave</p>
            <Search />
            <div className="break"></div>
            <InitiativesCard allInitiatives={allInitiatives} />
        </div>
    )
};

Initiatives.propTypes = {
    allInitiatives: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Initiatives;
