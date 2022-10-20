import React from 'react';
import TodoItem from './TodoItem';

export default function List({ list, deleteTodo, editTodo }) {
  return (
    <div className="ui grid center aligned">
      {list &&
        list.length > 0 &&
        list.map((item) => (
          <TodoItem
            key={item._id}
            value={item.title}
            completed={item.completed}
            removeItem={() => deleteTodo(item._id)}
            editTodo={(updatedItem) => editTodo(item._id, updatedItem)}
          />
        ))}
    </div>
  );
}
