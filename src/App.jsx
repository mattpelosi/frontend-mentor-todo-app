import React, { useState } from 'react';
import Heading from './components/Heading';
import Form from './components/Form';
import Footer from './components/Footer';
import List from './components/List';
import ItemToggle from './components/ItemToggle';
import { uniqId } from './utils/helper';
import useWindowDimensions from './hooks/useWindowDimensions';
import './App.css';

/**
 * DATA
 */
const INITIAL_STATE = [
  { title: 'Take out the trash', isComplete: false, id: uniqId() },
];

/**
 * App
 */
const App = () => {
  const [todos, setTodos] = useState(INITIAL_STATE);
  const [filterKey, setFilterKey] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  const { isMobile } = useWindowDimensions();

  return (
    <div
      className={`app-container ${darkMode ? 'darkmode' : ''} ${
        isMobile ? 'is-mobile' : ''
      }`}
    >
      <Heading darkMode={darkMode} setDarkMode={setDarkMode} />
      <Form setTodos={setTodos} />
      <div className="list-container">
        <List todos={todos} setTodos={setTodos} filterKey={filterKey} />
        <Footer
          setTodos={setTodos}
          todos={todos}
          itemCount={todos.length}
          setFilterKey={setFilterKey}
          filterKey={filterKey}
          isMobile={isMobile}
        />
      </div>
      {isMobile && (
        <ItemToggle
          filterKey={filterKey}
          setFilterKey={setFilterKey}
          isMobile={isMobile}
        />
      )}
    </div>
  );
};

export default App;
