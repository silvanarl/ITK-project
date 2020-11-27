import React from 'react';
import PropTypes from 'prop-types';
import './indicator.css';

const Indicators = ({allInitiatives}) => {
    return (
        <div>
           <h1 className ="text1"> Indicadores </h1>

           <div className="text2">  
           <h2>Nùmero total de iniciativas {allInitiatives.length}</h2> 
           {/* <h2> Nùmero de iniciativas por abogados </h2>
           <h2>Nùmero de iniciativas segùn tipo de cambio</h2>

           <label htmlFor="sele">
                <select className = 'tipo'>
                <option value="value1">Menor</option> 
                <option value="value2">Mnor</option>
                </select>
            </label> */}
           </div>
        </div>
    )
};
Indicators.propTypes = {
    allInitiatives: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Indicators;