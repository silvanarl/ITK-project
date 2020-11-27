import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { updateStatusDb } from '../../API/crud';
import './convocatoria.css'
=======
>>>>>>> d7e63008b334a621c4aef0f1036c9e7afbfe462b

const Convocatoria = (props) => {
    const {init} = props;

    return (
        <div>
<<<<<<< HEAD
            <h3 className="form-title">Información de la iniciativa</h3>
            <p className="state-info-p">Esta iniciativa actualmente se encuentra en {initStatus.status}</p>
            <div className="item">
                <label htmlFor="">Puedes modificar el estado de esta iniciativa: </label>
                    <select className="select-state" onChange={(e)=> updateStatus(e)} name="status" id="">
                        <option value="Convocatoria a workshop">Convocatoria a Workshop</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Resumen workshop">Resumen workshop</option>
                        <option value="Comite ERCP">Comité ERCP</option>
                    </select>
            </div>
            <div className="double-col">
                <p className="item-show">Nº de Solicitud<span className="info-data">{init.application_number}</span></p>
                <p className="item-show">Tipo de cambio<span className="info-data">{init.type_of_change}</span></p>
            </div>
            <p className="item-show">Nombre de la iniciativa<span className="info-data">{init.name}</span></p>
            <div className="double-col">
                <p className="item-show">Fecha aproximada de lanzamiento<span className="info-data">{init.release_date}</span></p>
                <p className="item-show">Líder / Responsable<span className="info-data capitalize">{init.leader}</span></p>
            </div>
            <p className="item-show">Abogados asignados<span className="info-data capitalize">{init.lawyers}</span></p>
            <p className="item-show">Objetivo<span className="info-data">{init.target}</span></p>
            <p className="item-show">Descripción<span className="info-data">{init.description}</span></p>
            <p className="item-show">Mercado objetivo<span className="info-data">{init.target_market}</span></p>
            <p className="item-show">Proceso operativo asociado<span className="info-data">{init.associated_operational_process}</span></p>
            <p className="item-show">Tags<span className="info-data">{init.tags}</span></p>
            {console.log(initStatus)}
=======
            <span>Información de la iniciativa:</span>
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
>>>>>>> d7e63008b334a621c4aef0f1036c9e7afbfe462b
        </div>
    )
};

Convocatoria.propTypes = {
    init: PropTypes.object.isRequired,
    initID: PropTypes.string.isRequired
};

export default Convocatoria;
