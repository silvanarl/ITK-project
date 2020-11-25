import React, { useState } from 'react';
import './status.css';
// import PropTypes from 'prop-types';
import StatusNav from './StatusNav';
import Convocatoria from './status/Convocatoria';
import Workshop from './status/Workshop';
import Comite from './status/Comite';
import Summary from './status/Summary';
// import firebase from '../firebase.config';
// import { getComments } from '../API/crud';

export default function Status() {
  const [view, setView] = useState('');
//   const initialComment = {
//     id: ccID,
//     content: '',
//     user: localStorage.getItem('user'),
//     date: firebase.firestore.Timestamp.fromDate(new Date()),
//   };
//   Activity.propTypes = {
//     ccID: PropTypes.string.isRequired,
//   };
//   const [comment, setComment] = useState(initialComment);
//   const [commentBox, setCommentBox] = useState([]);

//   useEffect(() => {
//     getComments(setCommentBox, ccID);
//   }, []);

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