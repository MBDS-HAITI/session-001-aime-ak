import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logoMBDS from "../src/assets/images.jpeg"
import data from './data.json' 
import Menu from './Appmenu' 


// Affichage d'un element de la liste
function StudentGradeCard({ item }) {
  
  const getGradeColor = (grade) => {
    if (grade >= 90) return 'green'
    if (grade >= 70) return 'blue'
    if (grade >= 50) return 'orange'
    return 'red'
  }

  return (
    <div style={{
      border: '2px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      minWidth: '300px'
    }}>
      <h3 style={{ 
        color: '#333', 
        marginTop: '0',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        {item.course}
      </h3>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Étudiant:</strong>
        <div style={{ marginLeft: '10px' }}>
          {item.student.firstname} {item.student.lastname}
          <br />
          <small>ID: {item.student.id}</small>
        </div>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Date de l'examen:</strong>
        <div>{new Date(item.date).toLocaleDateString('fr-FR')}</div>
      </div>
      
      <div style={{ 
        fontSize: '24px',
        fontWeight: 'bold',
        color: getGradeColor(item.grade),
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px'
      }}>
        Note: {item.grade}/100
      </div>
      
      <div style={{
        fontSize: '12px',
        color: '#666',
        marginTop: '10px',
        textAlign: 'right'
      }}>
        ID: {item.unique_id}
      </div>
    </div>
  )
}

function Header() {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        backgroundColor: 'rgba(24, 17, 220, 1)',
        padding: '20px',
        position: 'relative'
      }}
    >
      <Menu />
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} alt="React Logo" style={{ width: '50px' }} />
      </a>

      <a href={logoMBDS} target="_blank" rel="noopener noreferrer">
        <img src={logoMBDS} alt="Logo MBDS" style={{ width: '50px', height: '50px' }} />
      </a>

      <div>
        <h1 style={{ color: 'white', marginBottom: '0' }}>Introduction à React</h1>
        <h3 style={{ color: 'white', marginTop: '0' }}>
          
        </h3>
      </div>
      
      
    </header>
  )
}

function MainContent() {
  const now = new Date()
  const jour = now.getDate()
  const mois = now.getMonth() + 1
  const annee = now.getFullYear()
  const heure = now.getHours()
  const minute = now.getMinutes()
  const seconde = now.getSeconds()

  return (
    <main style={{ padding: '20px' }}>
      <h4>Bonjour, on est le {jour}/{mois}/{annee} et il est {heure}:{minute}:{seconde}</h4>
    </main>
  )
}

function Footer() {
  const annee = new Date().getFullYear()
  return (
    <footer
      style={{
        textAlign: 'center',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'rgba(211, 218, 216, 0.3)',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 1
      }}
    >
      {annee} - Tous droits réservés - AIME Louis
    </footer>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [randomItem, setRandomItem] = useState(null)
  const [allItems, setAllItems] = useState([])
  const [showAll, setShowAll] = useState(false)

  const getRandomItem = () => {
    if (data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length)
      setRandomItem(data[randomIndex])
    }
  }

  const toggleShowAll = () => {
    setShowAll(!showAll)
    if (!showAll) {
      setAllItems([...data]) 
    }
  }

  useEffect(() => {
    getRandomItem()
  }, [])

  const stats = {
    totalStudents: data.length,
    averageGrade: data.reduce((sum, item) => sum + item.grade, 0) / data.length,
    maxGrade: Math.max(...data.map(item => item.grade)),
    minGrade: Math.min(...data.map(item => item.grade)),
    courses: [...new Set(data.map(item => item.course))]
  }

  return (
    <>
    
      
      
      <Header />
      <MainContent />

      <div style={{ 
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        paddingBottom: '80px' 
      }}>
       
        <div style={{
          backgroundColor: '#fff7e6',
          padding: '20px',
          borderRadius: '10px',
          marginBottom: '30px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0' }}>
            <span style={{ fontSize: '24px' }}></span>
           
          </h2>
          
          <button 
            onClick={getRandomItem}
            style={{
              padding: '12px 24px',
              backgroundColor: '#1890ff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              marginBottom: '20px',
              transition: 'background-color 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
          
           
          </button>
          
          {randomItem && (
            <div>
              <h3 style={{ color: '#666', marginBottom: '15px' }}>
                Note sélectionnée aléatoirement:
              </h3>
              <StudentGradeCard item={randomItem} />
            </div>
          )}
        </div>

        <div style={{
          backgroundColor: '#f0f8ff',
          padding: '20px',
          borderRadius: '10px',
          marginBottom: '30px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0' }}>
            <span style={{ fontSize: '24px' }}></span>
            Statistiques des notes
          </h2>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '20px',
            marginTop: '15px'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '8px',
              flex: '1',
              minWidth: '200px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e8e8e8'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '24px' }}>👥</span>
                <h3 style={{ marginTop: '0', color: '#333' }}>Nombre total d'étudiants</h3>
              </div>
              <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#1890ff' }}>
                {stats.totalStudents}
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '8px',
              flex: '1',
              minWidth: '200px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e8e8e8'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '24px' }}>📈</span>
                <h3 style={{ marginTop: '0', color: '#333' }}>Moyenne générale</h3>
              </div>
              <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#52c41a' }}>
                {stats.averageGrade.toFixed(1)}/100
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '8px',
              flex: '1',
              minWidth: '200px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e8e8e8'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '24px' }}></span>
                <h3 style={{ marginTop: '0', color: '#333' }}>Cours disponibles</h3>
              </div>
              <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
                {stats.courses.map((course, index) => (
                  <span key={index} style={{
                    backgroundColor: '#e6f7ff',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    margin: '5px',
                    display: 'inline-block',
                    border: '1px solid #91d5ff'
                  }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#f6ffed',
          padding: '20px',
          borderRadius: '10px',
          marginBottom: '30px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0' }}>
              <span style={{ fontSize: '24px' }}></span>
              Liste complète des notes ({data.length} éléments)
            </h2>
            <button 
              onClick={toggleShowAll}
              style={{
                padding: '10px 20px',
                backgroundColor: showAll ? '#ff4d4f' : '#52c41a',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              {showAll ? (
                <>
                  
                  Masquer tous les éléments
                </>
              ) : (
                <>
                 
                  Afficher tous les éléments
                </>
              )}
            </button>
          </div>
          
          {showAll && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '20px',
              maxHeight: '500px',
              overflowY: 'auto',
              padding: '10px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e8e8e8'
            }}>
              {allItems.map((item) => (
                <StudentGradeCard key={item.unique_id} item={item} />
              ))}
            </div>
          )}
        </div>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code>
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App