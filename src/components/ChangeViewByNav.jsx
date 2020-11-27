import React from 'react';
import PropTypes from 'prop-types';
//import InitiativesCard from './Initiatives';
import GetJsonXlxs from './GetJsonXlxs';
import Indicators from './Indicators';
import Search from './Search';

const ChangeView = ({view, allInitiatives}) => {
  //console.log("changr" , allInitiatives)
    return (
      <div className="container-status">
        {/* <div className="details-info-title">Nombre de la iniciativa</div> */}
        {view === 'upload-initiative' ? (
          <GetJsonXlxs />
        ) : view === 'initiatives' ? (
          <Search allInitiatives={allInitiatives} /> 
        ) : view === 'indicators' ? (
          <Indicators allInitiatives={allInitiatives}/>
        ) : (
          <GetJsonXlxs />
        )}
      </div>
    );
};

ChangeView.propTypes = {
    view: PropTypes.string.isRequired,
    allInitiatives: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ChangeView;
