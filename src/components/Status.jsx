import React, { useState } from 'react';
import './status.css';
// import PropTypes from 'prop-types';
import StatusNav from './StatusNav';
import Convocatoria from './status/Convocatoria';
import Workshop from './status/Workshop';
import Comite from './status/Comite';
import Summary from './status/Summary';

export default function Status() {
  const [view, setView] = useState('');

  return (
    <div className="container-status">
      <div className="details-info-title">Nombre de la iniciativa</div>
      <StatusNav setView={setView} />
      {view === 'convocatoria' ? (
        <Convocatoria />
      ) : view === 'workshop' ? (
        <Workshop />
      ) : view === 'summary' ? (
        <Summary />
      ) : view === 'comite' ? (
        <Comite />
      ) : (
        <Convocatoria />
      )}
    </div>
  );
}