import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logoMBDS from "../src/assets/images.jpeg"; 

function Header() {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        backgroundColor: 'rgba(24, 17, 220, 1)',
        padding: '20px'
      }}
    >
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} alt="React Logo" style={{ width: '50px' }} />
      </a>

      <a href={logoMBDS} target="_blank" rel="noopener noreferrer">
        <img src={logoMBDS} alt="Logo MBDS" style={{ width: '50px', height: '50px' }} />
      </a>

      <div>
        <h1 style={{ color: 'white', marginBottom: '0' }}>Introduction à React</h1>
        <h3 style={{ color: 'white', marginTop: '0' }}>
          À la découverte des premières notions de React
        </h3>
      </div>
    </header>
  );
}

// Le deuxième composant
function MainContent() {
  return (
    <main style={{ padding: '20px' }}>
      <h4>Ici, nous afficherons des informations intéressantes :</h4>
    </main>
  );
}

// Footer
function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'rgba(211, 218, 216, 0.3)',
        position: 'fixed',
        bottom: 0,
        width: '43%',
      }}
    >
      Tous droits réservés - AIME Louis
    </footer>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainContent />

      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> 
        </p>
      </div>

      <p className="read-the-docs">
       
      </p>

      <Footer />
    </>
  );
}

export default App;
