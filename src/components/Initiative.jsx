import React,  { useState } from 'react';
import PropTypes from 'prop-types';

const Iniative = (props) => {
    const { sheets } = props;
    console.log(sheets);
    let initialState;

    if(sheets[0]){
        console.log(sheets[0].data);
        console.log('lider', sheets[0].data[4].__EMPTY_9);
        console.log('description', sheets[0].data[13].__EMPTY_2);
        console.log('objetivo', sheets[0].data[11].__EMPTY_2);
        initialState = {
            id: 1083,
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
    }
    const [initiative] = useState(initialState);
    return (
        <div>
            <label htmlFor="">Agregar enlace a ppt de la inciativa:</label>
            <input type="text"/>
            <label htmlFor="">Agregar enlace a pdf de la inciativa:</label>
            <input type="text"/>

            <div>
                <h3>Información de la iniciativa:</h3>
                {initiative}
            </div>
        </div>
    )
};

Iniative.propTypes = {
   sheets: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
export default Iniative;
