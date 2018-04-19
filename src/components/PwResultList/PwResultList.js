import React from 'react';
import './PwResultList.css';
import PwResultItem from '../PwResultItem/PwResultItem';
import PropTypes from 'prop-types';

class PwResultList extends React.Component {
  render () {
    if (!this.props.items.length) {
      return null;
    }

    const context = this.props.context;
    const request = this.props.request;
    
    let itemsUI = this.props.items.map(item => <PwResultItem key={item.cacheId} data={item}></PwResultItem>);
    if(itemsUI.length === 0) {
      itemsUI = this.props.sinResultados();
    }

    return (
      <section>
        <h1>Resultados de busqueda en {context.title}, usando "{request.searchTerms}"</h1>
        {itemsUI}
      </section>
    )
  }
}

PwResultList.propTypes = {
  items: PropTypes.array.isRequired
};



export default PwResultList;