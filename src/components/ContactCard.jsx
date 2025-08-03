import '../styles/ContactList.css';

const ContactCard = ({ contact, onClick, isSelected }) => {
  return (
    <div 
      className={`contact-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(contact.id)}
    >
      <div className="avatar-container">
        <img src={contact.avatar} alt={contact.name} className="avatar"/>
        {contact.isOnline && <span className="online-badge"></span>}
      </div>
      <div className="contact-info">
        <div className="contact-header">
          <h4>{contact.name}</h4>
          <span className="time">{contact.time}</span>
        </div>
        <div className="contact-footer">
          <p className='last-message'>{contact.lastMessage}</p>
          {contact.unread > 0 && (
            <span className="unread-count">{contact.unread}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactCard