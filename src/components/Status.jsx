import React, { useState, useEffect } from 'react';
import './status.css';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import StatusNav from './StatusNav';
import Convocatoria from './status/Convocatoria';
import {Workshop} from './status/Workshop';
import Comite from './status/Comite';
import Summary from './status/Summary';
import { getADocument } from '../API/crud';

export default function Status() {
  const [view, setView] = useState('');
  const { id } = useParams();
  const [init, setInit] = useState({});
  const initID = id.split('').slice(1).join('');
  console.log(initID);
  useEffect(() => {
    getADocument(initID, 'initiatives')
    .then((doc) => {
      if (doc.exists) {
        setInit(() => doc.data());
        // console.log('Document data:', doc.data());
      } else {
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
  }, [id]);

  return (
    <div className="container-status" id="status">
      <div className="details-info-title">{init.name}</div>
      <StatusNav setView={setView} />
      {view === 'convocatoria' ? (
        <Convocatoria obj={init} initID={initID} />
      ) : view === 'workshop' ? (
        <Workshop init={init} initID={initID} />
      ) : view === 'summary' ? (
        <Summary init={init} initID={initID} />
      ) : view === 'comite' ? (
        <Comite init={init} initID={initID} />
      ) : (
        <Convocatoria init={init} initID={initID} />
      )}
    </div>
  );
}