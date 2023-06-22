import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {storeMessages} from './Actions/todoAction';

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
   
  const handleTyping = () =>
    socket.emit('typing', `${localStorage.getItem('userName')} is typing`);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('user_attered', {
        type: 'user_attered',
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
      const messagetoStore = {
        type: 'user_attered',
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      };
      console.log(messagetoStore)
      dispatch(storeMessages(messagetoStore))
    }
    setMessage('');
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;