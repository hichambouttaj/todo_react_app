import React, { useState } from 'react';

export default function Form({ add }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      return;
    }

    add({
      title: inputValue,
    });
    setInputValue('');
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="ui grid center aligned">
        <div className="row">
          <div className="column five wide">
            <input
              type="text"
              name="title"
              placeholder="Enter something to do..."
              onChange={handleInputChange}
              value={inputValue}
              required
            />
          </div>
          <div className="column one wide">
            <button type="submit" className="ui button circular icon green">
              <i className="white plus icon" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
