import React, { Component } from 'react';
import './App.css';
import config from './config.js';
import PwFormSearch from './components/PwFormSearch/PwFormSearch';
import PwResultList from './components/PwResultList/PwResultList';

class App extends Component {
  constructor(props) {
    super(props)
    this.urlApi = `${config.cseUrl}?key=${config.cseApiKey}&cx=${config.cseId}`;
    this.state = {
      context: {},
      items: [],
      request: {}
    }
  }

  handleOnSuccess = (data) => {
    this.setState({
      context: data.context,
      items: data.items || [],
      request: data.queries.request[0]
    });
  }

  handleOnFailure = (res) =>{
    console.log(res);
    alert('Ocurrio un error, revisa la consola');
  }

  sinResultados () {
    // react utiliza React.createElement(component, props, ...children), el ultimo parametro es un spread operator,
    // el cual todos los demas parametros despues de props, los agrega en un arregllo llamado "children"
    // React.createElement('h2', null, 'Sin Resultados')
    return <h2>Sin resultados</h2>
  }

  render() {
    return (
      <div className="app">
        <h1>Learning React and CSE</h1>
        <PwFormSearch
          action={this.urlApi}
          onSuccess={this.handleOnSuccess}
          onFailure={this.handleOnFailure}>
        </PwFormSearch>
        <PwResultList
          items={this.state.items}
          context={this.state.context}
          request={this.state.request}
          sinResultados={this.sinResultados}
          >
        </PwResultList>
      </div>
    );
  }
}

export default App;
