import React, { useState } from 'react';
import { uniqId } from '../utils/helper';

const Form = (props) => {
  const [inputText, setInputText] = useState('');

    // Create todo
    const handleCreateToDo = (e) => {
      e.preventDefault();
      props.setTodos((prevState) => {
        return [
          ...prevState,
          { title: inputText, isComplete: false, id: uniqId() },
        ];
      });
      setInputText('');
    };

  return (
    <form className="input-container" onSubmit={handleCreateToDo}>
      <input
        type="text"
        className="form-input-text"
        placeholder="Create a new todo..."
        aria-label="Create a new todo..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </form>
  );
};

export default Form;