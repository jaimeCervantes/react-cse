import React from 'react';
import PwButton from "../PwButton";
import PropTypes from 'prop-types';
import './PwFormSearch.css';

class PwFormSearch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    // Avoid to send a request when we have empty string
    if(!this.state.searchTerm.trim()) {
      return;
    }

    fetch(`${this.props.action}&q=${this.state.searchTerm}`)
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        return response;
      }
    })
    .then(data => {
      this.props.onSuccess(data);
    })
    .catch(res => {
      this.props.onFailure(res);
    })
  }

  handleSearchTermChange (e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  render() {
    return (
      <form action="{this.state.action}" onSubmit={this.handleSubmit}>
        <label>
          <input type="search" 
          value={this.state.searchTerm} 
          onChange={this.handleSearchTermChange}
          placeholder="Buscar..."/>
          <PwButton> Buscar</PwButton>
        </label>
      </form>
    );
  }
}

PwFormSearch.propTypes = {
  action: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired
};

export default PwFormSearch;