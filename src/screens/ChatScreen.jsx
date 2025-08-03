import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiMoreVertical, FiSearch, FiPaperclip, FiMic, FiSmile, FiChevronLeft } from 'react-icons/fi';
import { IoCheckmarkDone } from 'react-icons/io5';
import allContacts from '../data/Contacts';
import "../styles/ChatScreen.css";

const ChatScreen = () => {
  const { contactId } = useParams();
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const contact = allContacts.find(c => c.id.toString() === contactId);

  // Estado para los mensajes (inicializado con los mensajes del contacto)
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (!contact) return;

    const savedChat = localStorage.getItem(`whatsapp-chat-${contactId}`);

    setMessages(
      savedChat ? JSON.parse(savedChat) : [...contact.messages] // Copia del array original
    );
  }, [contactId, contact]);

  // Guardar mensajes cuando cambian
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(`whatsapp-chat-${contactId}`, JSON.stringify(messages));
    }
  }, [messages, contactId]);

  // Scroll al final cuando cambian los mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleGoBack = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      document.querySelector('.whatsapp-layout').classList.remove('chat-active');
    }
    navigate('/');
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg = {
      id: Date.now(),
      text: newMessage,
      from: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: true
    };

    const updatedMessages = [...messages, newMsg];
    setMessages(updatedMessages);

    localStorage.setItem(`chat-${contactId}`, JSON.stringify(updatedMessages));

    setNewMessage('');
    inputRef.current.focus();
  };

  if (!contact) {
    return (
      <div className="empty-chat">
        <h2>Contacto no encontrado</h2>
        <button onClick={() => navigate('/')}>Volver a la lista</button>
      </div>
    );
  }

  return (
    <div className="whatsapp-chat">

      {/* Encabezado del chat */}

      <div className="chat-header">
        <button onClick={handleGoBack} className="back-button">
          <FiChevronLeft size={24} />
        </button>

        <div className="contact-info">
          <img src={contact.avatar} alt={contact.name} className="contact-avatar" />
          <div className="contact-details">
            <h3>{contact.name}</h3>
            <p>{contact.isOnline ? "En línea" : "Desconectado"}</p>
          </div>
        </div>


        <div className="header-actions">
          <button className="header-icon">
            <FiSearch size={20} />
          </button>
          <button className="header-icon">
            <FiMoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Área de mensajes */}

      <div className="messages-container">
        <div className="messages-scroll">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${msg.from === 'me' ? 'sent' : 'received'}`}
            >
              <div className="message-bubble">
                <p>{msg.text}</p>
                <div className="message-meta">
                  <span className="time">{msg.time}</span>
                  {msg.from === 'me' && (
                    <span className={`read-status ${msg.read ? 'read' : ''}`}>
                      <IoCheckmarkDone size={16} />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <form onSubmit={handleSendMessage} className="input-container">
        <button type="button" className="input-icon">
          <FiSmile size={24} />
        </button>
        <button type="button" className="input-icon">
          <FiPaperclip size={24} />
        </button>

        <input
          ref={inputRef}
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Escribe un mensaje"
          className="message-input"
        />

        <button type="submit" className="send-button">
          {newMessage.trim() ? (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff">
              <path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z" />
            </svg>
          ) : (
            <FiMic size={24} color="#54656f" />
          )}
        </button>
      </form>
    </div>
  )
}

export default ChatScreen