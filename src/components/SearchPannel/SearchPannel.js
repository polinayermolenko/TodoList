import React, { Component } from 'react';
import './SearchPannel.css'

export default class SearchPannel extends Component {
    state = {
        search: ''
    };

    onSearchChange = (evt) => {
        this.setState({
            search: evt.target.value
        });

        this.props.onItemSearch(evt.target.value)
    };

    render() {
        return (
            <input type='text'
                className='form-control search-input'
                placeholder='type to search'
                onChange={this.onSearchChange}
                value={this.state.search} />
        );
    };
};
