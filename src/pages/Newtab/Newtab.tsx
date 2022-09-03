import React from 'react'
import './Newtab.css'
import './Newtab.scss'

const Newtab: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/assets/img/logo.svg" className="App-logo" alt="logo" />
        <p>Hello, {process.env.NODE_ENV}!</p>
        <p>
          Edit <code>src/pages/Newtab/Newtab.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <h6>The color of this paragraph is defined using SASS.</h6>
      </header>
    </div>
  )
}

export default Newtab
