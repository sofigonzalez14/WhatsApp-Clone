import { FiSmile, FiPaperclip, FiMic, FiSend } from 'react-icons/fi';

const MessageInput = ({ value, onChange, onSend }) => {
  return (
    <div className="chat-input-area">
      <FiSmile className="input-icon" />
      <FiPaperclip className="input-icon" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && onSend(e)}
        placeholder="Escribe un mensaje..."
      />
      <button onClick={onSend} className="send-button">
        <FiSend />
      </button>
      <FiMic className="input-icon" />
    </div>
  )
}

export default MessageInput