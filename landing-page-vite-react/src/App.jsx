import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='flex justify-evenly test'>
        <a href="#" target="_blank" className='contain'>
          <img src="/vite.svg" className="logo h-32" alt="Vite logo" data-aos="fade-right" aos-duration="500" />
        </a>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react h-32" alt="React logo" data-aos="fade-left" aos-duration="500" />
        </a>
      </div>
      <p className='text-5xl text-gray-900'>Vite + React</p>
      <div className="card">
        <button className='hover:bg-sky-500 hover:text-white transition duration-500 h-10 w-36 bg-yellow-400 text-xl font-' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
