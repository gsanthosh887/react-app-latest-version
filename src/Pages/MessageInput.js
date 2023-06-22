import React, { useState } from 'react';
// import './MessageInput.css';

const NewMessage = ({socket}) => {
  const [value, setValue] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    console.log(value)
    socket.emit('message', value);
    setValue('');
  };

  return (
    <div>
      <input
        autoFocus
        value={value}
        placeholder="Type your message"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
      <button onClick={submitForm}>Send</button>
    </div>
  );
};

export default NewMessage;