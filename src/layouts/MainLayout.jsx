import { Outlet } from 'react-router-dom';
import ContactListScreen from '../screens/ContactListScreen';
import '../styles/MainLayout.css';
import { useMediaQuery } from 'react-responsive';

const MainLayout = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="whatsapp-layout">
      <div className="contacts-panel">
        <ContactListScreen />
      </div>
      <div className="chat-panel">
        <Outlet />
      </div>
      {!isMobile && (
        <div className="empty-chat-state">
          <h2>Selecciona un chat</h2>
          <p>Elige un contacto para comenzar a chatear</p>
        </div>
      )}
    </div>
  )
}

export default MainLayout