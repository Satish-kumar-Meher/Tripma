import React, { useState } from 'react';
import axios from "axios";
import { FiSend } from 'react-icons/fi';
import './Chatbot.css';

export const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const apiKey = "AIzaSyBukhL1dA3lJrqY4xnR9EpPP_5iARTN8Y8";

  const sendMessage = async () => {
    const prompt = "You are a helpful flight booking assistant named SkyMate. Only answer questions related to flights—like searching for flights, flight status, bookings, cancellations, baggage rules, and check-in. If the user asks something unrelated, kindly inform them that you are only for flight-related assistance.";

    const newMessage = { sender: 'user', text: userInput };
    setMessages([...messages, newMessage]);
    setUserInput('');

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: `${prompt} ${userInput}` }] }],
        },
      });

      let botReply = response.data.candidates[0].content.parts[0].text;
      botReply = botReply.replace(/\*/g, '');
      const botReplyLines = botReply.split('\n').filter(line => line.trim() !== '');
      const botMessage = { sender: 'bot', text: botReplyLines };

      setMessages([...messages, newMessage, botMessage]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="section-chat">
      <main>
        <div className="chatbot-container">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {Array.isArray(msg.text)
                  ? msg.text.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))
                  : msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              className="chat-input"
            />
            <button onClick={sendMessage} className="send-button">
              <FiSend />
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};
