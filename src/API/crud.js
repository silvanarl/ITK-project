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

    export const getAllInitiatives = (callback) =>
    db
    .collection('initiatives')
    .onSnapshot((querySnapshot) => {
      const arrInitiatives = [];
      querySnapshot.forEach((doc) => {
          const objInitiative = {
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            request_area: doc.data().request_area,
            leader: doc.data().leader
          }
        arrInitiatives.push(objInitiative);
      });
      callback(arrInitiatives);
    });
