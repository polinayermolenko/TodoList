import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {

  render() {
    const { label, onDeleted, onToggleDone, onToggleImportant, done, important } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
          {label}
        </span>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}>
          <span className="fa fa-exclamation" ></span>
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}>
          <span className="fa fa-trash-o"></span>
        </button>
      </span>
    );
  };
};

