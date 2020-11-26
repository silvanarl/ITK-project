import React from 'react';
import Search from './general/Search';
import InitiativesCard from './InitiativesCard';
import PropTypes from 'prop-types';

const Initiatives = ({allInitiatives}) => {
    return (
        <div>
            Soy un componente!
            <Search />
            <InitiativesCard allInitiatives={allInitiatives} />
        </div>
    )
};

Initiatives.propTypes = {
    allInitiatives: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Initiatives;
