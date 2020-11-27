import PropTypes from 'prop-types';
import React from 'react'
import {useState } from 'react'
//import SearchInput, {createFilter} from 'react-value-input'
import InitiativesCard from './InitiativesCard';
//

const Search = ({allInitiatives}) => {
  
    const [result, setResult ] = useState (allInitiatives)
    const [value , setValue] = useState ('')


     const searchInitiative = ( ) => {
         
const filtered = allInitiatives.filter(iniciativa => 
    iniciativa.tags.includes(value.toLowerCase()))
     setResult(filtered)
     };
     
    return (
        <div className="bg-input-value">
            <div className="container-input-value">
                {/* <img className="icon-value" src={loupe} alt=""/> */}
                <input 
                    type="text" 
                    onChange={(e) => setValue (e.target.value)}
                    className="input-value"
                />,
                <button className = "busqueda" 
                onClick= {searchInitiative}> buscaar </button>
            
            </div>
            <div className="container-cards">
          
          soy un componente
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