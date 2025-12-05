import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logoMBDS from "../src/assets/images.jpeg"
import {getStudents } from './Services/Services.js' 

// Menu 
function HorizontalMenu({ activeSection, setActiveSection }) {
  const menuItems = [
    { id: 'notes', label: '📊 Notes', color: '#1890ff' },
    { id: 'etudiants', label: '👥 Étudiants', color: '#52c41a' },
    { id: 'matieres', label: '📚 Matières', color: '#722ed1' },
    { id: 'statistiques', label: '📈 Statistiques', color: '#fa8c16' },
    { id: 'apropos', label: 'ℹ️ À propos', color: '#ff4d4f' }
  ]

  return (
    <div style={{
      backgroundColor: '#2c3e50',
      padding: '15px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      borderRadius: '0 0 10px 10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        paddingRight: '20px',
        borderRight: '1px solid #4a5f7a'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#3498db',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          color: 'white'
        }}>
          📋
        </div>
        <h3 style={{ color: 'white', margin: 0, fontSize: '16px' }}>
          Navigation
        </h3>
      </div>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        gap: '10px',
        flex: 1
      }}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            style={{
              padding: '10px 20px',
              backgroundColor: activeSection === item.id ? item.color : '#34495e',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              minWidth: '120px',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              if (activeSection !== item.id) {
                e.target.style.backgroundColor = '#4a5f7a'
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== item.id) {
                e.target.style.backgroundColor = '#34495e'
              }
            }}
          >
            <span style={{ fontSize: '16px' }}>
              {item.label.split(' ')[0]}
            </span>
            {item.label.split(' ').slice(1).join(' ')}
          </button>
        ))}
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
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} alt="React Logo" style={{ width: '50px' }} />
      </a>

      <a href={logoMBDS} target="_blank" rel="noopener noreferrer">
        <img src={logoMBDS} alt="Logo MBDS" style={{ width: '50px', height: '50px' }} />
      </a>

      <div>
        <h1 style={{ color: 'white', marginBottom: '0' }}>Introduction à React</h1>
        <h3 style={{ color: 'white', marginTop: '0', opacity: 0.9 }}>
          Système de gestion des étudiants
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

// Composant pour afficher les données en tableau
function DataTable({ data, columns, title }) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      marginBottom: '30px'
    }}>
      <div style={{
        backgroundColor: '#f0f8ff',
        padding: '15px 20px',
        borderBottom: '2px solid #1890ff'
      }}>
        <h3 style={{ margin: 0, color: '#1890ff', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>{title.split(' ')[0]}</span>
          {title.split(' ').slice(1).join(' ')}
        </h3>
      </div>
      
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#fafafa' }}>
              {columns.map((column, index) => (
                <th key={index} style={{
                  padding: '15px',
                  textAlign: 'left',
                  borderBottom: '2px solid #e8e8e8',
                  fontWeight: '600',
                  color: '#333'
                }}>
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowIndex) => (
              <tr key={rowIndex} style={{
                backgroundColor: rowIndex % 2 === 0 ? '#fff' : '#f9f9f9',
                borderBottom: '1px solid #e8e8e8',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f8ff'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = rowIndex % 2 === 0 ? '#fff' : '#f9f9f9'}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} style={{
                    padding: '12px 15px',
                    color: '#555'
                  }}>
                    {column.render ? column.render(item) : item[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {data.length === 0 && (
        <div style={{ 
          padding: '40px', 
          textAlign: 'center', 
          color: '#999' 
        }}>
          Aucune donnée disponible
        </div>
      )}
      
      <div style={{
        padding: '15px 20px',
        backgroundColor: '#fafafa',
        borderTop: '1px solid #e8e8e8',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
        color: '#666'
      }}>
        <span>Total : {data.length} éléments</span>
        <span>Dernière mise à jour : {new Date().toLocaleTimeString('fr-FR')}</span>
      </div>
    </div>
  )
}

function App() {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0)
  const [activeSection, setActiveSection] = useState('notes')

  useEffect(() => {
    let mounted = true;
    getStudents()
      .then((d) => { if (mounted) setStudentData(d); })
      .catch((err) => console.error(err))
      .finally(() => { if (mounted) setLoading(false) });
    return () => { mounted = false };
  }, []);


  // Préparation des données pour les tableaux
  const notesData = studentData.map(item => {
    const firstname = item.student?.firstname ?? 'N/A'
    const lastname = item.student?.lastname ?? ''
    const grade = typeof item.grade === 'number' ? item.grade : 0
    return {
      id: item.unique_id,
      cours: item.course ?? '',
      etudiant: `${firstname} ${lastname}`.trim(),
      note: grade,
      date: item.date ? new Date(item.date).toLocaleDateString('fr-FR') : '',
      status: grade >= 50 ? 'Validé' : 'Non validé'
    }
  })
 if (loading) return <div>Chargement...</div>;
  // Récupérer la liste unique des étudiants
  const uniqueStudents = Array.from(
    new Map(studentData
      .filter(item => item.student && item.student.id !== undefined)
      .map(item => [
        item.student.id,
        {
          id: item.student.id,
          nom: `${item.student.firstname ?? 'N/A'} ${item.student.lastname ?? ''}`.trim(),
          nbCours: studentData.filter(d => d.student?.id === item.student.id).length,
          moyenne: () => {
            const studentNotes = studentData.filter(d => d.student?.id === item.student.id)
            if (studentNotes.length === 0) return 0
            const sum = studentNotes.reduce((sum, n) => sum + (typeof n.grade === 'number' ? n.grade : 0), 0)
            return (sum / studentNotes.length).toFixed(1)
          }
        }
      ])).values()
  )

  // Récupérer la liste unique des matières
  const uniqueMatieres = Array.from(
    new Map(studentData.map(item => [
      item.course,
      {
        matiere: item.course,
        nbEtudiants: studentData.filter(d => d.course === item.course).length,
        moyenne: () => {
          const matiereNotes = studentData.filter(d => d.course === item.course)
          return matiereNotes.length > 0 
            ? (matiereNotes.reduce((sum, n) => sum + n.grade, 0) / matiereNotes.length).toFixed(1)
            : 0
        },
        meilleureNote: Math.max(...studentData.filter(d => d.course === item.course).map(d => d.grade))
      }
    ])).values()
  )

  // Statistiques globales
  const stats = {
    totalStudents: studentData.length,
    averageGrade: studentData.length ? studentData.reduce((sum, item) => sum + item.grade, 0) / studentData.length : 0,
    maxGrade: studentData.length ? Math.max(...studentData.map(item => item.grade)) : 0,
    minGrade: studentData.length ? Math.min(...studentData.map(item => item.grade)) : 0,
    courses: [...new Set(studentData.map(item => item.course))],
    bestStudent: () => {
      const studentAverages = uniqueStudents.map(s => ({
        nom: s.nom,
        moyenne: s.moyenne()
      }))
      if (studentAverages.length === 0) return { nom: '-', moyenne: 0 }
      return studentAverages.reduce((best, current) => 
        parseFloat(current.moyenne) > parseFloat(best.moyenne) ? current : best
      )
    }
  }

  // Rendu du contenu dynamique
  const renderContent = () => {
    switch (activeSection) {
      case 'notes':
        return (
          <DataTable
            title="📊 Liste des Notes"
            data={notesData}
            columns={[
              { key: 'cours', header: 'Cours' },
              { key: 'etudiant', header: 'Étudiant' },
              { 
                key: 'note', 
                header: 'Note',
                render: (item) => (
                  <span style={{
                    color: item.note >= 90 ? '#52c41a' : 
                          item.note >= 70 ? '#1890ff' : 
                          item.note >= 50 ? '#faad14' : '#ff4d4f',
                    fontWeight: 'bold',
                    padding: '4px 8px',
                    backgroundColor: item.note >= 50 ? '#f6ffed' : '#fff2f0',
                    borderRadius: '4px'
                  }}>
                    {item.note}/100
                  </span>
                )
              },
              { key: 'date', header: 'Date' },
              { 
                key: 'status', 
                header: 'Statut',
                render: (item) => (
                  <span style={{
                    color: item.status === 'Validé' ? '#52c41a' : '#ff4d4f',
                    fontWeight: 'bold'
                  }}>
                    {item.status}
                  </span>
                )
              }
            ]}
          />
        )
      
      case 'etudiants':
        return (
          <DataTable
            title="👥 Liste des Étudiants"
            data={uniqueStudents}
            columns={[
              { key: 'nom', header: 'Nom de l\'étudiant' },
              { 
                key: 'nbCours', 
                header: 'Nombre de cours',
                render: (item) => (
                  <span style={{
                    backgroundColor: '#e6f7ff',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '14px'
                  }}>
                    {item.nbCours} cours
                  </span>
                )
              },
              { 
                key: 'moyenne', 
                header: 'Moyenne générale',
                render: (item) => (
                  <span style={{
                    fontWeight: 'bold',
                    color: parseFloat(item.moyenne()) >= 70 ? '#52c41a' : 
                          parseFloat(item.moyenne()) >= 50 ? '#faad14' : '#ff4d4f'
                  }}>
                    {item.moyenne()}/100
                  </span>
                )
              },
              { 
                key: 'actions', 
                header: 'Actions',
                render: (item) => (
                  <button style={{
                    padding: '6px 12px',
                    backgroundColor: '#1890ff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}>
                    Voir détails
                  </button>
                )
              }
            ]}
          />
        )
      
      case 'matieres':
        return (
          <DataTable
            title="📚 Liste des Matières"
            data={uniqueMatieres}
            columns={[
              { key: 'matiere', header: 'Matière' },
              { 
                key: 'nbEtudiants', 
                header: 'Nombre d\'étudiants',
                render: (item) => (
                  <span style={{
                    backgroundColor: '#f6ffed',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '14px'
                  }}>
                    {item.nbEtudiants} étudiants
                  </span>
                )
              },
              { 
                key: 'moyenne', 
                header: 'Moyenne de la matière',
                render: (item) => (
                  <div>
                    <span style={{
                      fontWeight: 'bold',
                      color: '#1890ff'
                    }}>
                      {item.moyenne()}/100
                    </span>
                    <div style={{
                      width: '100%',
                      height: '6px',
                      backgroundColor: '#e8e8e8',
                      borderRadius: '3px',
                      marginTop: '5px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${item.moyenne()}%`,
                        height: '100%',
                        backgroundColor: '#52c41a',
                        borderRadius: '3px'
                      }}></div>
                    </div>
                  </div>
                )
              },
              { 
                key: 'meilleureNote', 
                header: 'Meilleure note',
                render: (item) => (
                  <span style={{
                    fontWeight: 'bold',
                    color: '#722ed1',
                    fontSize: '18px'
                  }}>
                    {item.meilleureNote}/100
                  </span>
                )
              }
            ]}
          />
        )
      
      case 'statistiques':
        return (
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>📊</div>
                <h3 style={{ margin: '0 0 10px 0' }}>Notes totales</h3>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1890ff' }}>
                  {stats.totalStudents}
                </div>
              </div>
              
              <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>📈</div>
                <h3 style={{ margin: '0 0 10px 0' }}>Moyenne générale</h3>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#52c41a' }}>
                  {stats.averageGrade.toFixed(1)}/100
                </div>
              </div>
              
              <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>🏆</div>
                <h3 style={{ margin: '0 0 10px 0' }}>Meilleure note</h3>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#fa8c16' }}>
                  {stats.maxGrade}/100
                </div>
              </div>
              
              <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>👑</div>
                <h3 style={{ margin: '0 0 10px 0' }}>Meilleur étudiant</h3>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#722ed1' }}>
                  {stats.bestStudent().nom}
                </div>
                <div style={{ fontSize: '14px', color: '#666' }}>
                  Moyenne : {stats.bestStudent().moyenne}/100
                </div>
              </div>
            </div>
            
            <DataTable
              title="📊 Répartition par Cours"
              data={stats.courses.map(course => ({
                cours: course,
                nbNotes: studentData.filter(d => d.course === course).length,
                moyenne: (studentData.filter(d => d.course === course)
                  .reduce((sum, n) => sum + n.grade, 0) / 
                  studentData.filter(d => d.course === course).length).toFixed(1),
                meilleureNote: Math.max(...studentData.filter(d => d.course === course).map(d => d.grade))
              }))}
              columns={[
                { key: 'cours', header: 'Cours' },
                { key: 'nbNotes', header: 'Nombre de notes' },
                { key: 'moyenne', header: 'Moyenne' },
                { key: 'meilleureNote', header: 'Meilleure note' }
              ]}
            />
          </div>
        )
      
      case 'apropos':
        return (
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ marginTop: 0 }}>ℹ️ À propos du système</h2>
            <p>Système de gestion académique développé avec React.</p>
            
            <div style={{
              backgroundColor: '#f0f8ff',
              padding: '20px',
              borderRadius: '8px',
              marginTop: '20px'
            }}>
              <h3>Informations techniques :</h3>
              <ul>
                <li><strong>Version :</strong> 2.0.0</li>
                <li><strong>Développeur :</strong> AIME Louis</li>
                <li><strong>Technologies :</strong> React, JavaScript, CSS</li>
                <li><strong>Données :</strong> 100 enregistrements</li>
              </ul>
            </div>
          </div>
        )
      
      default:
        return (
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h2 style={{ marginTop: 0 }}>👋 Bienvenue !</h2>
            <p>Sélectionnez une section dans le menu pour afficher les données.</p>
          </div>
        )
    }
  }

  return (
    <>
      <Header />
      <HorizontalMenu activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainContent />

      <div style={{ 
        padding: '20px',
        maxWidth: '1400px',
        margin: '0 auto',
        paddingBottom: '80px'
      }}>
        {renderContent()}
      </div>

      <Footer />
    </>
  )
}

export default App