import PropTypes from 'prop-types';
import React from 'react'
//import {useState } from 'react'
//import SearchInput, {createFilter} from 'react-search-input'


const Search = ({ allInitiatives}) => {
    console.log(allInitiatives.tags)
    //const [value, setValue ] = useState ('') 
//    const searchMovie = (array, string) => {
//         let result = [];
//         for (let index = 0; index < array.length; index++) {
//             const element = array[index];
//             if(element.title.toLowerCase().startsWith(string)){
//                 result.push(element)
//             }
//         }
//         return result;
//     };
//     const inputSearch = (event) => {
//         setPopMovie(searchMovie(initialPopMovie, event.target.value));
//     };
    Search.propTypes = {
        allInitiatives: PropTypes.arrayOf(PropTypes.object).isRequired,
    }
    return (
        <div className="bg-input-search">
            <div className="container-input-search">
                {/* <img className="icon-search" src={loupe} alt=""/> */}
                <input 
                    type="text" 
                    onChange={(e) => console.log(e.target.value)}
                    className="input-search"
                />
            </div>
        </div>
    )
};

export default Search;




// const KEYS_TO_FILTERS = ['user.name', 'subject']

// class Search extends Component {
    
//   constructor (props) {
//     super(props)
    
//   console.log(props)
//     this.state = {
//       searchTerm: ''
//     }
//     this.searchUpdated = this.searchUpdated.bind(this)

  
  
  /*render () {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredEmails.map(email => {
          return (
            <div className="mail" key={email.id}>
              <div className="from">{email.user.name}</div>
              <div className="subject">{email.subject}</div>
            </div>
          )
        })}
      </div>
    )
  }

 /* searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default Search 
*/