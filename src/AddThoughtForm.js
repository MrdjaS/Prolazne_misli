import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    }
    if (text.length > 1) {
      props.addThought(thought);
      setText('');
    }
  };
  
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="O čemu razmišljaš?"
        placeholder="O čemu razmišljaš?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Dodaj" />
    </form>
  );
}