import './SendMessage.css';

import { useState } from 'react';
import { auth, db, FIREBASE_DOCUMENT_PARENT_PATH, Button } from '../../shared';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState('');

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === '') {
      alert('Enter valid message');
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, FIREBASE_DOCUMENT_PARENT_PATH), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <form onSubmit={sendMessage} className="send-message-form">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="send-message-input form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button className='send-message-send-button'>Send</Button>
    </form>
  );
};

export default SendMessage;
