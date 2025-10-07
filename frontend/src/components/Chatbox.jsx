import React, { useContext, useState, useRef, useEffect } from 'react';
import UserContext from './context';
import io from 'socket.io-client';

const Chatbox = () => {
  const { username, selected } = useContext(UserContext);
  const [input, setinput] = useState('');
  const [message, setmessage] = useState([]);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io('http://localhost:3300');

    socket.current.on('chatmessage', (data) => {
      setmessage((prevMessage) => [...prevMessage, data]);
    });

    return () => {
      if (socket.current) {
        socket.current.off('chatmessage');
        socket.current.disconnect();
      }
    };
  }, []);

  const HandleInput = (e) => {
    setinput(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (socket.current) {
      socket.current.emit('chatmessage',{username,input});
      setinput('');
    }
  };

  return (
    <div>
      <div className="chat-container">
        <header className="chat-header">
          <h1>
            <i className="fas fa-smile"></i> ChatCord
          </h1>
          <a className="btn">Leave Room</a>
        </header>
        <main className="chat-main">
          <div className="chat-sidebar">
            <h3>
              <i className="fas fa-comments"></i> Room Name:
            </h3>
            <h2 id="room-name">{selected}</h2>
            <h3>
              <i className="fas fa-users"></i> Users
            </h3>
            <ul id="users">
              <li>{username}</li>
              <li>John</li>
              <li>Mary</li>
              <li>Paul</li>
              <li>Mike</li>
            </ul>
          </div>
          <div className="chat-messages">
            {message.map((msg, index) => (
              <div key={index} className="message">
                <p className="meta">{msg.username} <span>{new Date().toLocaleTimeString()}</span></p>
                <p className="text">{msg.message}</p>
              </div>
            ))}
          </div>
        </main>
        <div className="chat-form-container">
          <form onSubmit={HandleSubmit} id="chat-form">
            <input
              id="msg"
              type="text"
              placeholder="Enter Message"
              required
              autoComplete="off"
              value={input}
              onChange={HandleInput}
            />
            <button className="btn">
              <i className="fas fa-paper-plane"></i> Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;