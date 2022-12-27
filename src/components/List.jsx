import React from 'react';
import crossIcon from '../assets/images/icon-cross.svg';

const List = (props) => {
  const filteredList = props.todos.filter((item) => {
    // filter for active
    if (props.filterKey === 'active') {
      return !item.isComplete;
    }

    // filter for completed
    if (props.filterKey === 'completed') {
      return item.isComplete;
    }

    // filter for all
    return item;
  });

  // Delete todo
  const handleDeleteTodo = (id) => {
    props.setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  // Mark item completed
  const toggleCompleteTodo = (id) => {
    props.setTodos((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isComplete: !item.isComplete,
          };
        }
        return item;
      });
    });
  };

  return (
    <ul>
      {filteredList.map((todo) => (
        <li key={todo.id} className={todo.isComplete ? 'completed' : ''}>
          <input
            type="radio"
            aria-label="mark todo completed"
            onClick={() => toggleCompleteTodo(todo.id)}
            defaultChecked={todo.isComplete}
          />
          <p>{todo.title}</p>
          <button
            type="button"
            aria-label="delete todo"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            <img src={crossIcon} alt="Cross Icon" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
