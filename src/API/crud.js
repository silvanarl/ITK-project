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
            leader: doc.data().leader,
            tags: doc.data().tags,
            application_number: doc.data().application_number,
            type_of_change: doc.data().type_of_change,
            release_date:doc.data().release_date,
            lawyers:doc.data().lawyers,
            target: doc.data().target,
            target_market:doc.data().target_market,
            associated_operational_process: doc.data().associated_operational_process
          }
        arrInitiatives.push(objInitiative);
      });
      callback(arrInitiatives);
    });

export const getADocument = (docID, collectionName) => {
      const docRef = db.collection(collectionName).doc(docID);
      console.log('docref', docRef.get());
      return docRef.get();
      
};
  
export const updateStatusDb = (id, newStatus) => {
  db.collection('initiatives').doc(id).update({
    status: newStatus,
  });
};

export const createComment = (obj, collectionName) =>
    db
    .collection(collectionName)
    .doc()
    .set(obj)
    .then(() => {
      console.log('se envio el comentario');
    })
    .catch((error) => {
      console.log('Ocurrió un error al enviar tu comentario', error);
  });