import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import emails from './emails'
import './search.css'

const KEYS_TO_FILTERS = ['user.name', 'subject']

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  render () {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div className="search-box">
        <SearchInput  onChange={this.searchUpdated} />
        {filteredEmails.map(email => {
          return (
            <div className="mail" key={email.id}>
              <div className="from">{email.user.name}</div>
              <div className="subject">{email.subject}</div>
            </div>
          )
        })}
        <button className="search-btn">
          <img src="https://firebasestorage.googleapis.com/v0/b/interbank-project.appspot.com/o/assets%2Ficons%2Fsearch%20icon.png?alt=media&token=d4d85db7-212e-4ee5-8533-2ae4916a8876" alt="Search icon"/>
        </button>
      </div>
    )
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default Search 