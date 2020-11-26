import React from 'react';
import './initiativesCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//import Search from './Search'
//<Search  allInitiatives={allInitiatives}/> ,

const InitiativesCard = ({ele}) => {   

    //console.log(allInitiatives)
    return (
                    <div className="individual-card" key={ele.id}>
                        <span>{ele.application_number}</span>
                        <Link to={`/initiative:${ele.id}`}><span>{ele.name}</span></Link>
                        <p>{ele.description}</p>
                        <div>{ele.tags.map((tag, index) =>(
                            <span className="tag-card" key={index}>{tag}</span>
                        ))}</div>
                        <div><span>{ele.type_of_change}</span></div>
                    </div>
    )
};
InitiativesCard.propTypes = {
    ele: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InitiativesCard;
