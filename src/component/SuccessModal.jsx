import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px',
    animation: 'fadeIn 0.3s ease-in-out'
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '40px',
    maxWidth: '450px',
    width: '100%',
    position: 'relative',
    textAlign: 'center',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
    animation: 'slideUp 0.3s ease-out'
  },
  closeBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#666',
    transition: 'color 0.2s',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  successIcon: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#10b981',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    animation: 'scaleIn 0.5s ease-out'
  },
  checkIcon: {
    color: 'white',
    fontSize: '40px'
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '15px'
  },
  message: {
    fontSize: '16px',
    color: '#6b7280',
    marginBottom: '30px',
    lineHeight: '1.6'
  },
  button: {
    backgroundColor: '#f97316',
    color: 'white',
    border: 'none',
    padding: '12px 40px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    width: '100%'
  }
};

const mediaQuery = `
  @media (max-width: 768px) {
    .modal-content {
      padding: 30px 20px !important;
      max-width: 90% !important;
      margin: 0 15px;
    }
    
    .success-icon {
      width: 60px !important;
      height: 60px !important;
    }
    
    .check-icon {
      font-size: 30px !important;
    }
    
    .modal-title {
      font-size: 22px !important;
    }
    
    .modal-message {
      font-size: 14px !important;
      margin-bottom: 20px !important;
    }
    
    .modal-button {
      padding: 10px 30px !important;
      font-size: 14px !important;
    }
    
    .close-btn {
      width: 35px !important;
      height: 35px !important;
      font-size: 20px !important;
    }
  }
  
  @media (max-width: 480px) {
    .modal-content {
      padding: 25px 15px !important;
    }
    
    .success-icon {
      width: 50px !important;
      height: 50px !important;
      margin-bottom: 15px !important;
    }
    
    .check-icon {
      font-size: 25px !important;
    }
    
    .modal-title {
      font-size: 20px !important;
      margin-bottom: 10px !important;
    }
    
    .modal-message {
      font-size: 13px !important;
    }
  }
`;

const keyframes = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(50px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes scaleIn {
    0% { 
      transform: scale(0);
      opacity: 0;
    }
    50% { 
      transform: scale(1.1);
    }
    100% { 
      transform: scale(1);
      opacity: 1;
    }
  }
  
  ${mediaQuery}
`;

export default function SuccessModal({ isOpen, onClose, title, message }) {
  if (!isOpen) return null;

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.modalOverlay} onClick={onClose}>
        <div 
          className="modal-content"
          style={styles.modalContent} 
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className="close-btn"
            style={styles.closeBtn} 
            onClick={onClose}
            onMouseEnter={(e) => e.target.style.color = '#f97316'}
            onMouseLeave={(e) => e.target.style.color = '#666'}
          >
            <FaTimes />
          </button>
          
          <div className="success-icon" style={styles.successIcon}>
            <FaCheck className="check-icon" style={styles.checkIcon} />
          </div>
          
          <h3 className="modal-title" style={styles.title}>{title}</h3>
          <p className="modal-message" style={styles.message}>{message}</p>
          
          <button 
            className="modal-button"
            style={styles.button}
            onClick={onClose}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#ea580c'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#f97316'}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}