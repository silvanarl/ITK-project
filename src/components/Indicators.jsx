import React from 'react';
import PropTypes from 'prop-types';
import './indicator.css';

const Indicators = ({allInitiatives}) => {
    return (
        <div>
            <div>
                <h1 className ="text1"> Indicadores </h1>
                <h2 className="hh"> {allInitiatives.length}</h2>  
                <div className="graphi">  
                
                </div> <br></br>
           </div>           <br></br>
           <h2 className="hh"> 5 </h2> 
           <div className='init'>
           
           </div >
           <p > 
           </p>
         
        </div>
    )
};
Indicators.propTypes = {
    allInitiatives: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Indicators;