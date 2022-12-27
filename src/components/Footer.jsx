import React from 'react';
import ItemToggle from './ItemToggle';

const Footer = (props) => {
  const { itemCount, setFilterKey, filterKey, setTodos, isMobile, todos } = props;

  // Remove complete items
  const handleClearCompletedItem = () => {
    if (todos.length === 0) return;
    setTodos((prevState) => {
      return prevState.filter((todo) => !todo.isComplete);
    });
  };

  return (
    <div className="list-footer">
      <p className="item-count">{`${itemCount} item${
        itemCount !== 1 ? 's' : ''
      } left`}</p>
      {!isMobile && (
        <ItemToggle filterKey={filterKey} setFilterKey={setFilterKey} />
      )}
      <button
        type="button"
        aria-label="clear all completed items from list"
        onClick={handleClearCompletedItem}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Footer;
