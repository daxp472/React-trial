import { useState } from 'react'
import reactLogo from './assets/ab1.jpg'
import viteLogo from './assets/ab2.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Created By React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <div>Contact Us</div>
        <div>Contact :- 9987654321</div>
        <div>Mail :- abc@gmail.com</div>
        <div>for any query feel free to ask</div>
      </div>
      <footer>
        <p>�� 2022 Vite and React</p>
      </footer>
    </>
  )
}

export default App
