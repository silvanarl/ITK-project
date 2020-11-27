import React from 'react';
import './initiativesCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Status from './Status'

const InitiativesCard = ({ele}) => {
    return (
        <div className="individual-card" key={ele.id}>
            {console.log(ele)}
            <span className="number">{ele.application_number}</span>
            <Link to={`/home/initiative:${ele.id}`}><span className="name">{ele.name}</span></Link>
            <p className="description">{ele.description}</p>
            <span>Tags de la iniciativa:</span>
            <div className="tags-box">{ele.tags.map((tag, index) =>(
                <span className="tag-card" key={index}>{tag}</span>
            ))}</div>
            <div className="change-box"><span className="change">{ele.type_of_change}</span></div>
        </div>
    )
};
InitiativesCard.propTypes = {
    ele: PropTypes.object.isRequired,
};

export default InitiativesCard;