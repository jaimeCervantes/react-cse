import React from 'react';
import './Button.css'

class PwButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      disabled: props.disabled ? 'disabled' : ''
    }
  }

  render () {
    return (
      <button disabled={this.state.disabled} className="pw-button">
        {this.props.children}
      </button>
    );
  }
}

export default PwButton