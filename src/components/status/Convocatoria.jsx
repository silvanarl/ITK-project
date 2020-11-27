import React from 'react';
import PropTypes from 'prop-types';

const Convocatoria = (props) => {
    const {init} = props;

    return (
        <div>
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
        </div>
    )
};

Convocatoria.propTypes = {
    init: PropTypes.object.isRequired,
    initID: PropTypes.string.isRequired
};

export default Convocatoria;
