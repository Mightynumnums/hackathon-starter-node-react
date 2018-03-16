import React, { Component } from 'react'
import client from './client'
import logo from './logo.svg'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        client.get('/api/test')
            .then(res => this.setState({ message: res.data.message }))
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>
                    {this.state.message}
                </div>
            </div>
        )
    }
}

export default App