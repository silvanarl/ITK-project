import React from 'react';
import './initiativesCard.css';
import PropTypes from 'prop-types';

const InitiativesCard = ({allInitiatives}) => {
    return (
        <div className="container-cards">
                {allInitiatives.map((ele) => (
                    <div className="individual-card" key={ele.id}>
                        <span>{ele.application_number}</span>
                        <span>{ele.name}</span>
                        <p>{ele.description}</p>
                        <div>{ele.tags.map((tag, index) =>(
                            <span className="tag-card" key={index}>{tag}</span>
                        ))}</div>
                        <div><span>{ele.type_of_change}</span></div>
                    </div>
                ))}
        </div>
    )
};
InitiativesCard.propTypes = {
    allInitiatives: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InitiativesCard;