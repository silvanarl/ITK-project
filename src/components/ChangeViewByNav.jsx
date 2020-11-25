import React, { useState } from 'react';
import Home from '../views/Home';
import { Navbar } from './general/Navbar';
import FormInitiative from './FormInitiative';

const ChangeView = () => {
    const [view, setView] = useState('');
  
    return (
      <div className="container-status">
        {/* <div className="details-info-title">Nombre de la iniciativa</div> */}
        <Navbar setView={setView} />
        {view === 'upload-initiative' ? (
          <Home />
        ) : view === 'initiatives' ? (
          <FormInitiative />
        ) : view === 'logout' ? (
          <FormInitiative />
        ) : (
          <Home />
        )}
      </div>
    );
};

export default ChangeView;
