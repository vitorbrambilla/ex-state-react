import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      cup: 'water'
    }
  }

  componentDidMount() {
    this.setState({
      cup: 'soda'
    })
  }

  changeCup =  () => {
    this.setState({
      cup: 'beer'
    })
  }

  render() {
    const { clock, cup } = this.state

    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.changeCup()}><h1>{cup}</h1></button>
      </div>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);