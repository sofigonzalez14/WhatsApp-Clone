import { FiArrowLeft, FiMoreVertical } from 'react-icons/fi';

const ChatHeader = ({ contact, onGoBack }) => {
  return (
    <div className="chat-header">
      <button className="back-button-mobile" onClick={onGoBack}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#54656f">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
      </button>
      <div className="header-left">
        <FiArrowLeft
          onClick={onGoBack}
          className="header-icon"
          title="Volver"
        />
        <img
          src={contact.avatar}
          alt={contact.name}
          className="chat-avatar"
        />
        <div className="chat-info">
          <h2>{contact.name}</h2>
          <p>{contact.isOnline ? 'En línea' : 'Desconectado'}</p>
        </div>
      </div>
      <FiMoreVertical className="header-icon" />
    </div>
  );
};

export default ChatHeader