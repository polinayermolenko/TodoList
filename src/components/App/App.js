import React, { Component } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPannel from '../SearchPannel/SearchPannel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import AddItem from '../AddItem/AddItem';

import './App.css';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Tea'),
      this.createTodoItem('Build Awesome App'),
      this.createTodoItem('Have a lunch')
    ],
    search: '',
    filter: 'active'
  };

  createTodoItem(label) {
    return {
      id: this.maxId++,
      label,
      important: false,
      done: false
    }
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const newTodoData = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];

      return {
        todoData: newTodoData
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newData = [...todoData, newItem];

      return {
        todoData: newData
      };
    });
  };

  searchItems = (items, text) => {
    if (text.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().includes(text.toLowerCase());
    });
  }

  onItemSearch = (search) => {
    this.setState({ search })
  }

  filterItems = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  onFilterChange = (filter) => {
    this.setState({filter})
  }

  toggleItem = (arr, id, propName) => {
    const index = arr.findIndex((el) => el.id === id);
    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleItem(todoData, id, 'done')
      }
    })
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleItem(todoData, id, 'important')
      }

    })
  };

  render() {
    const { todoData, search, filter } = this.state;
    const visibleItems = this.filterItems(this.searchItems(todoData, search), filter);
    const countDone = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - countDone;

    return (
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={countDone} />
        <div className='top-panel d-flex'>
          <SearchPannel onItemSearch={this.onItemSearch} />
          <ItemStatusFilter filter={filter}
                            onFilterChange={this.onFilterChange}/>
        </div>

        <TodoList todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant} />
        <AddItem onItemAdded={this.addItem} />
      </div>
    );
  }
};

