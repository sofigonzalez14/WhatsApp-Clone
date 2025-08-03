import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import allContacts from '../data/Contacts';
import "../styles/ContactList.css";
import { useMediaQuery } from "react-responsive";

const ContactListScreen = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("todos");

    const handleContactClick = (id) => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            document.querySelector('.whatsapp-layout').classList.add('chat-active');
        }
        navigate(`/chat/${id}`);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const clearSearch = () => {
        setSearchTerm("");
    };

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const filteredContacts = allContacts.filter(contact => {
        const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.lastMessage.toLowerCase().includes(searchTerm.toLowerCase());

        switch (activeFilter) {
            case "no-leidos":
                return matchesSearch && contact.unread > 0;
            case "grupos":
                return matchesSearch && contact.isGroup;
            default:
                return matchesSearch;
        }
    });

    return (
        <div className="contacts-container">
            <div className="contact-list-container">
                <div className="whatsapp-header">
                    <h1 className="whatsapp-title">WhatsApp</h1>
                    <div className="header-icons">
                        <button aria-label="Nuevo chat">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="#54656f">
                                <path d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V19.028C3 20.06 3.641 20.674 4.673 20.674H19.005C20.037 20.674 20.679 20.06 20.679 19.028V4.821C20.679 3.789 20.038 3.175 19.005 3.175ZM17.043 12.221H12.72V16.543H11.48V12.221H7.157V10.981H11.48V6.658H12.72V10.981H17.043V12.221Z" />
                            </svg>
                        </button>
                        <button aria-label="Menú">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="#54656f">
                                <path d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="search-container">
                    <div className="search-box">
                        <svg className="search-icon" viewBox="0 0 24 24" width="20" height="20" fill="#8696a0">
                            <path d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z" />
                        </svg>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Buscar un chat o iniciar uno nuevo"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        {searchTerm && (
                            <button className="clear-search" onClick={clearSearch} aria-label="Limpiar búsqueda">
                                ×
                            </button>
                        )}
                    </div>
                </div>

                <div className="filters">
                    <button
                        className={`filter ${activeFilter === "todos" ? "active" : ""}`}
                        onClick={() => handleFilterChange("todos")}
                    >
                        Todos
                    </button>
                    <button
                        className={`filter ${activeFilter === "no-leidos" ? "active" : ""}`}
                        onClick={() => handleFilterChange("no-leidos")}
                    >
                        No leídos
                    </button>
                    <button
                        className={`filter ${activeFilter === "favoritos" ? "active" : ""}`}
                        onClick={() => handleFilterChange("favoritos")}
                    >
                        Agrega un favorito
                    </button>
                    <button
                        className={`filter ${activeFilter === "grupos" ? "active" : ""}`}
                        onClick={() => handleFilterChange("grupos")}
                    >
                        Grupos
                    </button>
                </div>

                <div className="contact-list">
                    {filteredContacts.length > 0 ? (
                        filteredContacts.map(contact => (
                            <div
                                key={contact.id}
                                className="contact-card"
                                onClick={() => handleContactClick(contact.id)}
                            >
                                <div className="avatar-container">
                                    <img src={contact.avatar} alt={contact.name} className="avatar" />
                                    {contact.isOnline && <span className="online-badge"></span>}
                                </div>
                                <div className="contact-info">
                                    <div className="contact-name-and-time">
                                        <h3 className="contact-name">{contact.name}</h3>
                                        <span className="time">{contact.time}</span>
                                    </div>
                                    <div className="last-message-container">
                                        <p className="last-message">{contact.lastMessage}</p>
                                        {contact.unread > 0 && (
                                            <span className="unread-badge">{contact.unread}</span>
                                        )}
                                    </div>
                                </div>

                            </div>

                        ))
                    ) : (
                        <div className="no-results">
                            {activeFilter === "no-leidos" ? (
                                <>
                                    <FiSearch className="no-results-icon" />
                                    <h3 className="no-results-title">No tienes mensajes no leídos</h3>
                                    <p className="no-results-text">Todos tus mensajes están leídos</p>
                                </>
                            ) : activeFilter === "grupos" ? (
                                <>
                                    <FiSearch className="no-results-icon" />
                                    <h3 className="no-results-title">No tienes grupos</h3>
                                    <p className="no-results-text">Crea un nuevo grupo para comenzar</p>
                                </>
                            ) : (
                                <>
                                    <FiSearch className="no-results-icon" />
                                    <h3 className="no-results-title">No se encontraron chats</h3>
                                    <p className="no-results-text">Prueba con otro término de búsqueda</p>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default ContactListScreen