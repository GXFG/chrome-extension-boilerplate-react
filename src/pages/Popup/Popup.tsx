import React from 'react'
import Greetings from '../../containers/Greetings/Greetings'
import './Popup.css'

const Popup: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Greetings />
        <p>
          Edit <code>src/pages/Popup/Popup.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  )
}

export default Popup
