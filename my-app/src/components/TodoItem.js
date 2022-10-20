import React, { useState } from 'react';

export default function TodoItem({
  value,
  completed: _completed,
  removeItem,
  editTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(value);
  const [tempTitle, setTempTitle] = useState(value);
  const [isCompleted, setIsCompleted] = useState(_completed);

  const handleEditInput = (e) => {
    setTempTitle(e.target.value);
  };

  const handleEditClick = (e) => {
    setTitle(tempTitle);
    editTodo({ title: tempTitle });
    setIsEditing(false);
  };

  const handleCompleted = (e) => {
    setIsCompleted((prev) => {
      const newState = !prev;
      editTodo({ completed: newState });
      return newState;
    });
  };

  return (
    <div className="row">
      {isEditing ? (
        <>
          <div className="column six wide">
            <div className="ui input fluid">
              <input
                type="text"
                placeholder="type here..."
                onChange={handleEditInput}
                value={tempTitle}
                autoFocus={true}
                required
              />
            </div>
          </div>
          <div className="column one wide">
            <button
              className="ui button circular icon green"
              onClick={handleEditClick}
            >
              <i className="white check icon" />
            </button>
          </div>
          <div className="column one wide">
            <button
              className="ui button circular icon red"
              onClick={() => {
                setIsEditing(false);
              }}
            >
              <i className="white remove icon" />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="column five wide left aligned">
            <h2 className={'ui header' + (isCompleted ? ' green' : '')}>
              {title}
            </h2>
          </div>
          <div className="column one wide">
            <button
              className={
                'ui button circular icon' + (isCompleted ? ' blue' : ' green')
              }
              onClick={handleCompleted}
            >
              <i className="white check icon" />
            </button>
          </div>
          <div className="column one wide">
            <button
              className="ui button circular icon yellow"
              onClick={() => {
                setIsEditing(true);
              }}
            >
              <i className="white edit icon" />
            </button>
          </div>
          <div className="column one wide">
            <button
              className="ui button circular icon red"
              onClick={removeItem}
            >
              <i className="white remove icon" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
