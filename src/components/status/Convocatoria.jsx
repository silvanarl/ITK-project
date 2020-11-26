import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { updateStatusDb } from '../../API/crud';

const Convocatoria = (props) => {
    const {init, initID} = props;
    console.log(initID);
    const [initStatus, setInitStatus] = useState(init);
    const updateStatus = (e) => {
        const { name, value } = e.target;
        const newStatus = e.target.value;
        updateStatusDb(initID, newStatus);
        setInitStatus({ ...init, [name]: value });
    }
    return (
        <div>
            <span>Información de la iniciativa:</span>
            <span>Esta iniciativa actualmente se encuentra en {initStatus.status}</span>
            <div>
                <label htmlFor="">Puedes modificar el estado de esta iniciativa: </label>
                    <select onChange={(e)=> updateStatus(e)} name="status" id="">
                        <option value="Convocatoria a workshop">Convocatoria a Workshop</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Resumen workshop">Resumen workshop</option>
                        <option value="Comite ERCP">Comité ERCP</option>
                    </select>
            </div>
            <span>Nº de Solicitud: {init.application_number}</span>
            <span>Tipo de Cambio: {init.type_of_change}</span>
            <span>Nombre de la iniciativa: {init.name}</span>
            <span>Fecha aproximada de lanzamiento: {init.release_date}</span>
            <span>Líder: {init.leader}</span>
            <span>Abogados asignados: {init.lawyers}</span>
            <p>Objetivo:{init.target}</p>
            <p>Descripción:{init.description}</p>
            <p>Mercado objetivo:{init.target_market}</p>
            <p>Proceso operativo asociado:{init.associated_operational_process}</p>
            <span>Tags: {init.tags}</span>
            {console.log(initStatus)}


        </div>
    )
};

Convocatoria.propTypes = {
    init: PropTypes.object.isRequired,
    initID: PropTypes.string.isRequired
};

export default Convocatoria;
