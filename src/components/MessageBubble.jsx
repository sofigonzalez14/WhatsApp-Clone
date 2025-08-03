const MessageBubble = ({ text, time, isSent, isRead }) => {
    return (
        <div className={`message ${isSent ? 'sent' : 'received'}`}>
            <p>{text}</p>
            <span className="message-time">
                {time}
                {isSent && (
                    <span className={`read-status ${isRead ? 'read' : ''}`}>
                        {isRead ? '✓✓' : '✓'}
                    </span>
                )}
            </span>
        </div>
    );
};

export default MessageBubble