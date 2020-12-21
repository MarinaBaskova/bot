import React, { useState, useRef, useEffect } from 'react';
//  Components
import Form from '../form/Form';
import ChatMessages from '../messages/ChatMessages';
// Functions, Data objects
import { getResourse, botQuestions } from '../utils';
// Images
import bot from '../../assets/bot.png';
import user from '../../assets/user.png';
// Styles
import './ChatContainer.css';

const ChatContainer = () => {
  const bottomRef = useRef();
  //    Record of all chat messages from bot and user
  const [chatMessages, setChatMessages] = useState({
    user: [],
    bot: [],
  });
  //   Record of user answers with category. Will be used in finding the resource.
  const [userAnswers, setUserAnswers] = useState({
    course: '',
    subject: '',
    level: '',
    type: '',
  });
  // Record current user message. Use it in finding next bot question
  const [currUserMessage, setCurrUserMessage] = useState('');

  //   Auto scroll
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // Auto scroll effect runs when chatMessages updated
  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const saveChatMessages = (event, botQuestion) => {
    // Find a key in Bot Questions by curr bot question
    let objKey = Object.keys(botQuestions).find(
      (key) => botQuestions[key] === botQuestion
    );
    // Set value in userAnswers obj by found key from bot question
    setUserAnswers({
      ...userAnswers,
      [objKey]: event.target.value,
    });
    // Save bot and user message
    setChatMessages({
      user: [...chatMessages.user, event.target.value],
      bot: [...chatMessages.bot, botQuestion],
    });
    setCurrUserMessage(event.target.value);
  };

  // Bot answer based and next user options based on current user message
  const printBotMessageAndUserOptions = (userMessage) => {
    switch (userMessage) {
      case 'Web':
        return (
          <>
            <div className="bot">
              <img src={bot} alt="Bot" className="bot-logo" />
              <div className="message" id="bot-message">
                {botQuestions.subject}
              </div>
            </div>
            <div className="user">
              <img src={user} alt="User" className="user-logo" />
              <div className="message" id="user-message">
                <button
                  className="btn-option"
                  value="JS"
                  onClick={(event) =>
                    saveChatMessages(event, botQuestions.subject)
                  }
                >
                  JS
                </button>
                <button
                  className="btn-option"
                  value="React"
                  onClick={(event) =>
                    saveChatMessages(event, botQuestions.subject)
                  }
                >
                  React
                </button>
              </div>
            </div>
          </>
        );
      case 'DS':
        return (
          <>
            <div className="bot">
              <img src={bot} alt="Bot" className="bot-logo" />
              <div className="message" id="bot-message">
                {botQuestions.subject}
              </div>
            </div>
            <div className="user">
              <img src={user} alt="User" className="user-logo" />
              <div className="message" id="user-message">
                <button
                  className="btn-option"
                  value="Python"
                  onClick={(event) =>
                    saveChatMessages(event, botQuestions.subject)
                  }
                >
                  Python
                </button>
                <button
                  className="btn-option"
                  value="SQL"
                  onClick={(event) =>
                    saveChatMessages(event, botQuestions.subject)
                  }
                >
                  SQL
                </button>
              </div>
            </div>
          </>
        );

      case 'JS':
      case 'Python':
      case 'SQL':
      case 'React':
        return (
          <>
            <div className="bot">
              <img src={bot} alt="Bot" className="bot-logo" />
              <div className="message" id="bot-message">
                {botQuestions.level}
              </div>
            </div>
            <div className="user">
              <img src={user} alt="User" className="user-logo" />
              <div className="message" id="user-message">
                <button
                  className="btn-option"
                  value="Beginner"
                  onClick={(event) =>
                    saveChatMessages(event, botQuestions.level)
                  }
                >
                  Beginner
                </button>
                <button
                  className="btn-option"
                  value="Intermediate"
                  onClick={(event) =>
                    saveChatMessages(event, botQuestions.level)
                  }
                >
                  Intermediate
                </button>
                <button
                  className="btn-option"
                  value="Expert"
                  onClick={(event) =>
                    saveChatMessages(event, botQuestions.level)
                  }
                >
                  Expert
                </button>
              </div>
            </div>
          </>
        );

      case 'Beginner':
      case 'Intermediate':
      case 'Expert':
        return (
          <>
            <div className="bot">
              <img src={bot} alt="Bot" className="bot-logo" />
              <div className="message" id="bot-message">
                {botQuestions.type}
              </div>
            </div>
            <div className="user">
              <img src={user} alt="User" className="user-logo" />
              <div className="message" id="user-message">
                <button
                  value="Video"
                  className="btn-option"
                  onClick={(event) =>
                    saveChatMessages(event, botQuestions.type)
                  }
                >
                  Video
                </button>
                <button
                  className="btn-option"
                  value="Article"
                  onClick={(event) =>
                    saveChatMessages(event, botQuestions.type)
                  }
                >
                  Article
                </button>
              </div>
            </div>
          </>
        );

      case 'Video':
        const videos = getResourse(userAnswers);
        return (
          <div className="bot">
            <img src={bot} alt="Bot" className="bot-logo" />
            <div className="message" id="bot-message">
              Here is what I found
              <span role="img" aria-label="video">
                📼
              </span>
              <div className="resourse-link-container">{videos}</div>
            </div>
          </div>
        );
      case 'Article':
        const articles = getResourse(userAnswers);
        return (
          <div className="bot">
            <img src={bot} alt="Bot" className="bot-logo" />
            <div className="message" id="bot-message">
              Here is what I found
              <span role="img" aria-label="books">
                📚
              </span>
              <div className="resourse-link-container">{articles}</div>
            </div>
          </div>
        );
      default:
        return '';
    }
  };

  return (
    <div id="chat-container">
      <div data-testid="chat-screen" id="chat-screen">
        <ChatMessages
          chatMessages={chatMessages}
          saveChatMessages={saveChatMessages}
        />
        {printBotMessageAndUserOptions(currUserMessage)}
        <Form />

        <div ref={bottomRef} className="list-bottom"></div>
      </div>
    </div>
  );
};

export default ChatContainer;
