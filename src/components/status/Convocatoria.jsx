import React from 'react';
import PropTypes from 'prop-types';
// import { updateStatusDb } from '../../API/crud';
import './convocatoria.css'

const Convocatoria = (props) => {
    const {init} = props;

    return (
        <div>
            <h3 className="form-title">Información de la iniciativa</h3>
            <p className="state-info-p">Esta iniciativa actualmente se encuentra en {initStatus.status}</p>
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
        </div>
    )
};

Convocatoria.propTypes = {
    init: PropTypes.object.isRequired,
    initID: PropTypes.string.isRequired
};

export default Convocatoria;
