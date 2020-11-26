import React from 'react';
import './initiativesCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const InitiativesCard = ({allInitiatives}) => {

    // const returnStatus = () => {
    //     console.log('status');
    //     // <Status view={view} allInitiatives={allInitiatives} />
    // }
    return (
                    <div className="individual-card" key={ele.id}>
                        <span className="number">{ele.application_number}</span>
                        <Link to={`/home/initiative:${ele.id}`}><span className="name">{ele.name}</span></Link>
                        <p className="description">{ele.description}</p>
                        <div className="tags-box">{ele.tags.map((tag, index) =>(
                            <span className="tag-card" key={index}>{tag}</span>
                        ))}</div>
                        <div className="change-box"><span className="change">{ele.type_of_change}</span></div>
                    </div>
    )
};
InitiativesCard.propTypes = {
    ele: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InitiativesCard;
