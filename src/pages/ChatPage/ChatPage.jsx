import './ChatPage.css';

import { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { Message, SendMessage } from '../../features';
import { db, FIREBASE_DOCUMENT_PARENT_PATH, FIREBASE_ORDER_BY, LIMITH_MESSAGES } from "../../shared";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, FIREBASE_DOCUMENT_PARENT_PATH),
      orderBy(FIREBASE_ORDER_BY.createdAt),
      limit(LIMITH_MESSAGES)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <main className="chat-box">
      <span className="scroll" ref={scroll}></span>
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <SendMessage scroll={scroll} />
    </main>
  );
};

export default ChatPage;