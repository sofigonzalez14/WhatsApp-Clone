import { FaSearch, FaEllipsisV, FaClipboard } from "react-icons/fa";
import "../styles/ContactList.css"
import contacts from "../data/Contacts";

const ContactList = ({ onNewChat }) => {
  return (
    <div className="contact-list-container">
      <header className="contact-header">
        <h1>WhatsApp</h1>
        <div className="header-icons">
          <button aria-label="Nuevo chat" onClick={onNewChat}>
            <FaClipboard />
          </button>
          <button aria-label="Menú">
            <FaEllipsisV />
          </button>
        </div>
      </header>

      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Buscar un chat o iniciar uno nuevo"
          aria-label="Buscar contactos"
        />
      </div>

      <div className="filters">
        <button className="filter active">Todos</button>
        <button className="filter">No leídos</button>
        <button className="filter">Favoritos</button>
        <button className="filter">Grupos</button>
      </div>
       
  </div>

   
  )
}

export default ContactList
