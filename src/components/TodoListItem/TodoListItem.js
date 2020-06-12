import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };
  
  onLabelClick = () => {
    this.setState(({done}) => ({done: !done}))
  };

  onExclamationMarkClick = () => {
    this.setState(({important}) => ({important: !important}))
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;


    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done'; 
    }

    if(important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={ this.onLabelClick }>
          {label}
        </span>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={ this.onExclamationMarkClick }>
          <span className="fa fa-exclamation" ></span>
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={ onDeleted }>
          <span className="fa fa-trash-o"></span>
        </button>
      </span>
    );
  };
};

