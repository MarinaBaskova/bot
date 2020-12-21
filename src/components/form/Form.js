import React, { useState } from 'react';
import InputEmoji from 'react-input-emoji';
// Styles
import './Form.css';

function Form() {
  const [userQuestion, setUserQuestion] = useState('');
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (val) => setInputValue(val);

  const handleSubmit = (val) => {
    setUserQuestion(val);
    setInputValue('');
  };

  return (
    <div className="form-container">
      <InputEmoji
        value={inputValue}
        onChange={onInputChange}
        cleanOnEnter
        onEnter={handleSubmit}
        placeholder="Type a message"
      />
    </div>
  );
}
export default Form;
