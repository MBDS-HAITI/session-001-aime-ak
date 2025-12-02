import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logoMBDS from "../src/assets/images.jpeg"; 

function Header() {

  return (
    <header style={{

      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      backgroundColor: 'rgba(24, 17, 220, 1)',
      padding: '20px'
    }}>
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} alt="React Logo" style={{ width: '50px' }} />
      </a>
      <a href="./session01/src/assets/images.jpeg" target="_blank" rel="noopener noreferrer">
        <img src={logoMBDS} alt="Logo MBDS" style={{ width: '50px', height: '50' }} />
      </a>
<div>
        <h1 style={{ color: 'white', marginBottom :'0' }}>Introduction à React</h1><br/>
<h3 style={{ color: 'white', marginTop :'0' }}>À la découverte des premières notions de React</h3>

      </div> 

      </header> 
);
}
// Le deuxieme composant
function MainContent() {
  return (
    <main style={{ padding: '20px' }}>
     <h4> <p>Ici, nous afficherons des informations intéressantes :</p></h4>
    </main>
  );
}

// Le deuxieme composant
function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      position: 'fixed',
      bottom: 0,
      width: '100%'
    }}>
      Tous droits réservés - [Nom] [Prénom]
    </footer>
  );
}


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MainContent/>

      <h1>Salut</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
         count {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
     
  )
  
}

export default App
