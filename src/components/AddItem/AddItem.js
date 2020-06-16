import React, { Component } from 'react';
import './AddItem.css';

export default class AddItem extends Component {

    render() {
        const { onItemAdded } = this.props;
        return (
            <div className='add-item' >
                <button className='btn btn-outline-secondary' onClick={() => onItemAdded('hi')}>Add Item</button>
            </div>
        )
    }
}
