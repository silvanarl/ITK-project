import firebase from '../firebase.config';

const db = firebase.firestore();

export const sendInitiative = (obj) => db
    .collection('initiatives').doc().set(Object.assign({}, obj))
    .then(() => {
    console.log('enviado con éxito', obj);
    })
    .catch((error) => {
    console.log('Ocurrió un error al enviar', error);
    });