import PropTypes from 'prop-types';
import React from 'react'
import {useState } from 'react'
import InitiativesCard from './InitiativesCard';
import './general/search.css';


const Search = ({allInitiatives}) => {
  
    const [result, setResult ] = useState (allInitiatives)
    const [value , setValue] = useState ('')


    const searchInitiative = ( ) => {
         
        const filtered = allInitiatives.filter(iniciativa => 
            iniciativa.tags.includes(value.toLowerCase()))
            setResult(filtered)
            };
    const bolo = () => {
        
       setResult(allInitiatives) 
  
    } 
        return (
            <div className="bg-input-value">
                <h2 className="title">Iniciativas</h2>
                <p className="description">Buscar iniciaticas por palabra clave</p>
                <div className="container-input-value">
                    {/* <img className="icon-value" src={loupe} alt=""/> */}
                    <input 
                        type="text" 
                        onChange={(e) => setValue (e.target.value)}
                        className="input-value"
                        placeholder = 'Bucar Iniciativas'
                    />
                    <div className="container-button-search">
                      <button className = "search-btn" 
                      onClick= {searchInitiative} ><img src="https://firebasestorage.googleapis.com/v0/b/interbank-project.appspot.com/o/assets%2Ficons%2Fsearch%20icon.png?alt=media&token=d4d85db7-212e-4ee5-8533-2ae4916a8876" alt="Search icon"/></button>
                      <button className = "all-search-button" 
                      onClick= {bolo}> Todas las Iniciativas </button>
                    </div>
                </div>
                <div className="container-cards">
                {result.map((ele) => ( 
                <InitiativesCard ele ={ele} key={ele.id}/>
                ))}
            </div>
            </div>
        )
};
Search.propTypes = {
    allInitiatives: PropTypes.arrayOf(PropTypes.object)
}
export default Search;