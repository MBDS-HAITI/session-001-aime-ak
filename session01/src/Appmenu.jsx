import { useState, } from "react"
// Composant Menu

function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  
  const menuItems = [
    { id: 'notes', label: ' Notes', description: 'Consulter les notes des étudiants' },
    { id: 'etudiants', label: ' Étudiants', description: 'Liste des étudiants' },
    { id: 'matieres', label: ' Matières', description: 'Cours disponibles' },
    { id: 'apropos', label: 'ℹ À propos', description: 'Informations sur l\'application' }
  ]

  const handleMenuItemClick = (item) => {
    setIsOpen(false) 
    
    alert(`Vous avez cliqué sur : ${item.label}\n\n${item.description}`)
  }

  return (
    <div style={{
      position: 'relative',
      top: '-5px',
      left: '20px',
      marginRight: '20px',
      zIndex: 1000
    }}>
     
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '24px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#40a9ff'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#1890ff'}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 999
          }}
        />
      )}

   
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '60px',
          left: 0,
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          minWidth: '250px',
          zIndex: 1001,
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '10px 15px',
            backgroundColor: '#f0f8ff',
            borderBottom: '1px solid #e8e8e8'
          }}>
            <strong style={{ color: '#1890ff' }}>Navigation</strong>
          </div>
          
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuItemClick(item)}
              style={{
                width: '100%',
                padding: '15px 20px',
                textAlign: 'left',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '1px solid #f0f0f0',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.2s ease',
                color: '#333',
                fontSize: '16px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <span style={{ fontSize: '20px' }}>{item.label.split(' ')[0]}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '500' }}>{item.label.split(' ').slice(1).join(' ')}</div>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>
                  {item.description}
                </div>
              </div>
              <span style={{ color: '#1890ff', fontSize: '14px' }}>→</span>
            </button>
          ))}
          
          <div style={{
            padding: '10px 15px',
            backgroundColor: '#fafafa',
            borderTop: '1px solid #e8e8e8',
            fontSize: '12px',
            color: '#888',
            textAlign: 'center'
          }}>
            Cliquez sur un élément pour voir l'alerte
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu;