import React from 'react';
import PropTypes from 'prop-types';

const Indicators = ({allInitiatives}) => {
    console.log(allInitiatives.length)
    return (
        <div>
           
        </div>
    )
};
Indicators.propTypes = {
    allInitiatives: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Indicators;