import React from 'react';

const ItemToggle = (props) => {
  const {filterKey, setFilterKey, isMobile} = props;

  return (
    <div className="item-toggle">
      <button
        className={filterKey === 'all' ? 'active-toggle' : ''}
        type="button"
        aria-label="show all items in list"
        onClick={() => setFilterKey('all')}
      >
        All
      </button>
      <button
        className={filterKey === 'active' ? 'active-toggle' : ''}
        type="button"
        aria-label="show only active items in list"
        onClick={() => setFilterKey('active')}
      >
        Active
      </button>
      <button
        className={filterKey === 'completed' ? 'active-toggle' : ''}
        type="button"
        aria-label="show only completed items in list"
        onClick={() => setFilterKey('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default ItemToggle;
