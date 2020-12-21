import React from 'react';
// Functions, Data objects
import { botQuestions } from '../utils';
// Images
import bot from '../../assets/bot.png';
import user from '../../assets/user.png';
// Styles
import '../chat/ChatContainer.css';

const ChatMessages = (props) => {
  return (
    <>
      {props.chatMessages.user.length ? (
        props.chatMessages.user.map((userMessage, index) => {
          const botMessage = props.chatMessages.bot[index];
          return (
            <div
              data-testid="messages"
              className="messages-container"
              key={index}
            >
              <div className="bot">
                <div className="logo-container">
                  <img src={bot} alt="Bot" className="bot-logo" />
                </div>
                <div className="message" id="bot-message">
                  {botMessage}
                </div>
              </div>
              <div className="user">
                <div className="logo-container">
                  <img src={user} alt="User" className="user-logo" />
                </div>
                <div className="message" id="user-message">
                  {userMessage}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div data-testid="messages" className="messages-container">
          <div className="bot">
            <div className="logo-container">
              <img src={bot} alt="Bot" className="bot-logo" />
            </div>
            <div className="message" id="bot-message">
              <span role="img" aria-label="hand-wave">
                👋
              </span>
              Hi there! Let's try to find the resource.
              {botQuestions.course}
            </div>
          </div>

          <div className="user">
            <div className="logo-container">
              <img src={user} alt="User" className="user-logo" />{' '}
            </div>
            <div className="message" id="user-message">
              <button
                className="btn-option"
                value="Web"
                onClick={(event) =>
                  props.saveChatMessages(event, botQuestions.course)
                }
              >
                Web Dev
              </button>
              <button
                className="btn-option"
                value="DS"
                onClick={(event) =>
                  props.saveChatMessages(event, botQuestions.course)
                }
              >
                Data Sience
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ChatMessages;
