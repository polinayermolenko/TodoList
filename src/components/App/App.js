import React from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPannel from '../SearchPannel/SearchPannel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import './App.css';

const App = () => {
  const todoData = [
    {id: 1, label: 'Drink Tea', important: false},
    {id: 2, label: 'Build Awesome App', important: true},
    {id: 3, label: 'Have a lunch', important: false}
  ];

  return (
    <div className='todo-app'>
      <AppHeader toDo={1} done={3}/>
    <div className='top-panel d-flex'>
      <SearchPannel />
      <ItemStatusFilter />
    </div>  
       
      <TodoList todos = { todoData }/>
    </div>
  );
};

export default App;