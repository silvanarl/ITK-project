import React,  { useState} from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './formInitiative.css';
import { sendInitiative } from '../API/crud';
import useModal from '../hooks/useModal';
import Modal from './Modal';

const FormInitiative = (props) => {
    const { sheets } = props;
    const history = useHistory();
    console.log(sheets);
    const initialState = {
        application_number: '',
        status: 'Convocatoria a workshop',
        leader: sheets[0].data[4].__EMPTY_9,
        name: sheets[0].data[3].__EMPTY_11,
        release_date: '',
        request_area: sheets[0].data[4].__EMPTY_32,
        responsible_manager: sheets[0].data[5].__EMPTY_10,
        target: sheets[0].data[11].__EMPTY_2,
        description: sheets[0].data[13].__EMPTY_2,
        target_market: sheets[0].data[15].__EMPTY_2,
        associated_operational_process: sheets[0].data[17].__EMPTY_2,
        ppt_url:'',
        pdf_url:'',
        lawyers: [],
        tags:[],
        comments: [],
        notes: [],
        type_of_change:''
    };
    const [initiative, setInitiative] = useState(initialState);  
    const { isShowing, toggleModal } = useModal();

    const updateValue = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        setInitiative({ ...initiative, [name]: value });
    };   
    const comma = ',';
    
    const separateString = (string, separator) => string.split(separator);

    const updateArray = (e) => {
        const { name } = e.target;
        const valueString = e.target.value;
        const newValue = separateString(valueString, comma);
        setInitiative({ ...initiative, [name]: newValue });
    };

    const returnHome = () => history.push('/home/initiatives');

    const sendToDb= () => {
        sendInitiative(initiative);
        setInitiative({...initialState});

        returnHome();
    };
    return (
        <div className="container-initiative">
            <h3 className="form-title">Información de la iniciativa</h3>
            <form action="" name="formInitiative">
            <div className="double-col short">
                    <div className="item">
                        <label htmlFor="">Nº de solicitud</label>
                        <input className="form-input" type="text" name="application_number" onChange={(e)=> updateValue(e)} />
                    </div>
                    <div className="item">
                        <label htmlFor="">Tipo de iniciativa</label>
                        <select onChange={(e)=> updateValue(e)} name="type_of_change" id="">
                            <option className="select-btn" value="Cambio menor">Cambio Menor</option>
                            <option className="select-btn" value="Cambio importante">Cambio Importante</option>
                            <option className="select-btn" value="Nuevo producto">Nuevo Producto</option>
                        </select>
                    </div>
                </div>
                <div className="item">
                    <label htmlFor="">Nombre de la iniciativa</label>
                    <input className="form-input large" type="text" name="name" value={initiative.name} onChange={(e)=> updateValue(e)} />
                </div>
                <div className="double-col">
                    <div className="item">
                        <label htmlFor="">Fecha aproximada de Lanzamiento: </label>
                        <input className="form-input" type="text" name="release_date" onChange={(e)=> updateValue(e)} />
                    </div>
                    <div className="item">
                        <label htmlFor="">Líder / Responsable: </label>
                        <input className="form-input" type="text" name="leader" value={initiative.leader} onChange={(e)=> updateValue(e)} />
                    </div>
                </div>
                <div className="item">
                    <label htmlFor="">Asignar abogados a esta iniciativa: </label>
                    <input className="form-input large" placeholder="Ejemplo: Juana López, Mario Moncada" type="text" name="lawyers" onChange={(e)=> updateArray(e)}/>
                </div>
                <div className="item">
                    <label htmlFor="">Agregar tags a esta iniciativa: </label>
                    <input className="form-input large" placeholder="Ejemplo: pagos móviles, tarjetas de crédito" type="text" name="tags" onChange={(e)=> updateArray(e)}/>
                </div>
                <h3 className="form-title">Documentos de la iniciativa</h3>
                <div className="double-col">
                    <div className="item">
                        <label htmlFor="">Agregar enlace a ppt de la iniciativa: </label>
                        <input className="form-input" placeholder="Ejemplo: https://" type="text" name="ppt_url" onChange={(e)=> updateValue(e)}/>
                    </div>
                    <div className="item">
                        <label htmlFor="">Agregar enlace a pdf de la iniciativa: </label>
                        <input className="form-input" placeholder="Ejemplo: https://" type="text" name="pdf_url" onChange={(e)=> updateValue(e)}/>
                    </div>
                </div>
                <button className="btn" onClick={(e)=>sendToDb(e)} type="button">Subir Iniciativa</button>
            </form>
          <Modal hide={toggleModal} isShowing={isShowing} />
        </div>
    )
};

FormInitiative.propTypes = {
   sheets: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
export default FormInitiative;
