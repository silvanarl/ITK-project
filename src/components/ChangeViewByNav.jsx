import React from 'react';
import PropTypes from 'prop-types';
import InitiativesCard from './Initiatives';
import GetJsonXlxs from './GetJsonXlxs';
import Indicators from './Indicators';

const ChangeView = ({view, allInitiatives}) => {
  
    return (
      <div className="container-status">
        {/* <div className="details-info-title">Nombre de la iniciativa</div> */}
        {view === 'upload-initiative' ? (
          <GetJsonXlxs />
        ) : view === 'initiatives' ? (
          <InitiativesCard allInitiatives={allInitiatives} />
        ) : view === 'indicators' ? (
          <Indicators />
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
