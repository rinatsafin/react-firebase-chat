import './Message.css';

import { useContext } from 'react';
import { FirebaseContext } from '../../shared';

const Message = ({ message }) => {
  const { user } = useContext(FirebaseContext);

  return (
    <div className={`message-bubble ${message.uid === user.uid ? 'right' : ''}`}>
      <img
        className="message-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="message-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
