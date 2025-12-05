import { useState } from 'react'

function MenuHamburger() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('notes')
  
  const menuItems = [
    { id: 'notes', label: '📊 Notes', description: 'Gestion des notes', icon: '📊' },
    { id: 'etudiants', label: '👥 Étudiants', description: 'Liste des étudiants', icon: '👥' },
    { id: 'matieres', label: '📚 Matières', description: 'Cours disponibles', icon: '📚' },
    { id: 'apropos', label: 'ℹ️ À propos', description: 'Informations', icon: 'ℹ️' }
  ]

  const handleMenuItemClick = (itemId) => {
    setActiveSection(itemId)
    setIsOpen(false)
    // Afficher également une alerte
    const item = menuItems.find(i => i.id === itemId)
    alert(`Navigation vers : ${item?.label}\n\n${item?.description}`)
  }

  return (
    <div style={{ position: 'relative' }}>
      {/* Bouton hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1001,
          backgroundColor: '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
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
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Overlay */}
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

      {/* Menu déroulant */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: '20px',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          minWidth: '280px',
          zIndex: 1000,
          overflow: 'hidden',
          animation: 'slideIn 0.3s ease'
        }}>
          {/* En-tête du menu */}
          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white'
          }}>
            <div style={{ fontSize: '36px', textAlign: 'center', marginBottom: '10px' }}>🎓</div>
            <h3 style={{ margin: 0, textAlign: 'center' }}>Menu Navigation</h3>
            <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.9, textAlign: 'center' }}>
              Système de gestion académique
            </p>
          </div>

          {/* Items du menu */}
          <div style={{ padding: '10px 0' }}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                style={{
                  width: '100%',
                  padding: '18px 25px',
                  textAlign: 'left',
                  backgroundColor: activeSection === item.id ? '#f0f8ff' : 'transparent',
                  border: 'none',
                  borderLeft: activeSection === item.id ? '5px solid #1890ff' : '5px solid transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '18px',
                  transition: 'all 0.2s ease',
                  color: '#333',
                  fontSize: '16px'
                }}
              >
                <span style={{ fontSize: '24px' }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    fontWeight: '600', 
                    color: activeSection === item.id ? '#1890ff' : '#333',
                    fontSize: '16px'
                  }}>
                    {item.label.split(' ').slice(1).join(' ')}
                  </div>
                  <div style={{ 
                    fontSize: '13px', 
                    color: activeSection === item.id ? '#1890ff' : '#666', 
                    marginTop: '3px' 
                  }}>
                    {item.description}
                  </div>
                </div>
                {activeSection === item.id && (
                  <span style={{ 
                    color: '#1890ff', 
                    fontSize: '20px',
                    animation: 'pulse 2s infinite'
                  }}>
                    →
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Pied du menu */}
          <div style={{
            padding: '15px 20px',
            backgroundColor: '#fafafa',
            borderTop: '1px solid #eee',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '12px', color: '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span>🔒</span>
              Navigation sécurisée
            </div>
          </div>
        </div>
      )}

      {/* Indicateur de section active (optionnel) */}
      {!isOpen && (
        <div style={{
          position: 'fixed',
          top: '85px',
          left: '25px',
          backgroundColor: '#52c41a',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '12px',
          fontSize: '12px',
          zIndex: 998,
          animation: 'fadeIn 0.5s ease'
        }}>
          {menuItems.find(item => item.id === activeSection)?.label.split(' ')[1]}
        </div>
      )}

      {/* Styles d'animation */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default MenuHamburger