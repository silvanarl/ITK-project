import React from 'react';
import './statusNav.css';

export default function StatusNav(props) {
  const { setView } = props;
  return (
    <ul className="status-nav">
      <li role="presentation" onClick={() => setView('convocatoria')}>
        Convocatoria workshop
      </li>
      <li role="presentation" onClick={() => setView('workshop')}>
      Workshop
      </li>
      <li role="presentation" onClick={() => setView('summary')}>
        Resumen workshop
      </li>
      <li role="presentation" onClick={() => setView('comite')}>
        Comité ERCP
      </li>
    </ul>
  );
}