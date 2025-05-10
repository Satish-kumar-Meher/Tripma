import React, { useState } from 'react';
import axios from "axios";
import { FiSend, FiMic, FiVolume2 } from 'react-icons/fi';
import { useSpeechSynthesis } from 'react-speech-kit';
import './Chatbot.css';

export const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isListening, setIsListening] = useState(false); // State to track if the mic is listening
  //   const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const apiKey = "AIzaSyBukhL1dA3lJrqY4xnR9EpPP_5iARTN8Y8"

  const [isSpeaking, setIsSpeaking] = useState(false); // Track if the bot is currently speaking
  const { speak, cancel } = useSpeechSynthesis();

  // const { speak } = useSpeechSynthesis();

  // Check if SpeechRecognition is supported
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  if (recognition) {
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
  }

  const handleMicClick = () => {
    if (recognition) {
      if (isListening) {
        recognition.stop();
        setIsListening(false);
      } else {
        recognition.start();
        setIsListening(true);
      }
    } else {
      alert('Speech recognition is not supported in this browser.');
    }
  };

  if (recognition) {
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setUserInput(transcript);
      setIsListening(false); // Automatically stop listening after receiving a result
    };

    recognition.onend = () => {
      setIsListening(false); // Reset the listening state if the recognition ends unexpectedly
    };
  }

  // const farmingPrompt = "You are a chatbot that only answers questions related to farming. If the user asks about something unrelated to farming, politely inform them that you only provide farming-related information.";


  const sendMessage = async () => {
    const farmingPrompt = "You are a helpful flight booking assistant named SkyMate.Only answer questions related to flights—like searching for flights, flight status, bookings, cancellations, baggage rules, and check-in.If the user asks something unrelated, kindly inform them that you are only for flight-related assistance."
    // const languageprompt = "user ask question in which language, you answer that in that language "

    const newMessage = { sender: 'user', text: userInput };
    setMessages([...messages, newMessage]);
    setUserInput('');

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        method: "post",
        data: {
          // contents: [{ parts: [{ text: userInput }] }],
          contents: [{ parts: [{ text: `${farmingPrompt} ${userInput}` }] }],
        },
      });



      //    // Process the bot's response
      // let botReply = response.data.candidates[0].content.parts[0].text;

      // // Remove unwanted symbols like '*'
      // botReply = botReply.replace(/\*/g, '');

      // // Split the reply into lines for line-by-line display
      // const botReplyLines = botReply.split('\n').filter(line => line.trim() !== '');

      // // Add each line of the bot's reply to the messages
      // const formattedMessages = botReplyLines.map(line => ({ sender: 'bot', text: line }));

      // setMessages([...messages, newMessage, ...formattedMessages]);


        // Process the bot's response
    let botReply = response.data.candidates[0].content.parts[0].text;

    // Remove unwanted symbols like '*'
    botReply = botReply.replace(/\*/g, '');

    // Split the reply into lines
    const botReplyLines = botReply.split('\n').filter(line => line.trim() !== '');

    // Add the entire bot's reply as a single message
    const botMessage = { sender: 'bot', text: botReplyLines };

    setMessages([...messages, newMessage, botMessage]);

      // setMessages([...messages, newMessage, { sender: 'bot', text: response.data.candidates[0].content.parts[0].text }]);

    } catch (error) {
      console.log(error);
    }
  };

  const handleSpeakerClick = (text) => {
    // const utterance = new SpeechSynthesisUtterance(text);
    // utterance.lang = 'hi-IN'; // Set the language to Hindi
    // speechSynthesis.speak(utterance);
    speak({ text: text, lang: 'hi-IN' });
  };

  // const handleSpeakerClick = (text) => {
  //   if (isSpeaking) {
  //     cancel(); // Stop speaking if already speaking
  //     setIsSpeaking(false);
  //   } else {
  //     speak({ text, lang: 'hi-IN' });
  //     setIsSpeaking(true);
  //   }
  // };

  return (
    <>
      <section className="section-chat">
        <main>
          <div className="chatbot-container">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                // <div key={index} className={`chat-message ${msg.sender}`}>
                //   {msg.text}
                //   {msg.sender === 'bot' && (
                //     <FiVolume2
                //       className="speaker-icon"
                //       onClick={() => handleSpeakerClick(msg.text)}
                //     />
                //   )}
                // </div>
                <div className={`chat-message ${msg.sender}`}>
                  {Array.isArray(msg.text) ? (
                    msg.text.map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))
                  ) : (
                    msg.text
                  )}
                  {msg.sender === 'bot' && (
                    <FiVolume2
                      className="speaker-icon"
                      onClick={() => handleSpeakerClick(msg.text.join(' '))}
                    />
                //     <div className="speaker-icon-container">
                // {isSpeaking ? (
                //   <FiPause
                //     className="pause-icon"
                //     onClick={() => handleSpeakerClick(msg.text.join(' '))}
                //   />
                // ) : (
                //   <FiVolume2
                //     className="speaker-icon"
                //     onClick={() => handleSpeakerClick(msg.text.join(' '))}
                //   />
                // )}
              // </div>
                  )}
                </div>

              ))}
            </div>
            <div className="chat-input-container">
              {/* <FiMic
                className={`mic-icon ${isListening ? 'listening' : ''}`}
                onClick={handleMicClick}
              /> */}

<FiMic
          className={`mic-icon ${isListening ? 'listening' : ''}`}
          onClick={handleMicClick}
          style={{ color: isListening ? 'dodgerblue' : 'black' }} // Change color when listening
        />

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
    </>
  );
}