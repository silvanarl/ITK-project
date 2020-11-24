import React,  { useState } from 'react';
import PropTypes from 'prop-types';
import { sendInitiative } from '../API/crud';

const Iniative = (props) => {
    const { sheets } = props;
    console.log(sheets);
    const initialState = {
        aplication_number: '',
        status: '',
        leader: sheets[0].data[4].__EMPTY_9,
        name: sheets[0].data[3].__EMPTY_11,
        relelase_date: '2021',
        request_area: sheets[0].data[4].__EMPTY_32,
        responsible_manager: sheets[0].data[5].__EMPTY_10,
        target: sheets[0].data[11].__EMPTY_2,
        description: sheets[0].data[13].__EMPTY_2,
        target_market: sheets[0].data[15].__EMPTY_2,
        associated_operational_process: sheets[0].data[17].__EMPTY_2,
        ppt_url:'',
        pdf_url:'',
        lawyers: [],
        comments: [],
        notes: [],
    };
    const [initiative, setInitiative] = useState(initialState);  

    const updateUrl = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        setInitiative({ ...initiative, [name]: value });
    };
    const sendToDb= (obj) => {
        sendInitiative(obj);
    };
    return (
        <div>
            <h3>Información de la iniciativa:</h3>
            <label htmlFor="">Agregar enlace a ppt de la inciativa:</label>
            <input type="text" name="ppt_url" onChange={(e)=> updateUrl(e)}/>
            <label htmlFor="">Agregar enlace a pdf de la inciativa:</label>
            <input type="text" name="pdf_url" onChange={(e)=> updateUrl(e)}/>
            <button onClick={() => (sendToDb(initiative))} type="button">Continuar</button>
        </div>
    )
};

Iniative.propTypes = {
   sheets: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
export default Iniative;
