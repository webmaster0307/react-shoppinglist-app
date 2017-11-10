import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchLists } from '../actions/index';
export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' }

        // Bind handleInputChange to the components context
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    // Handle form submission
    handleFormSubmit(event) {
        event.preventDefault();
        console.log('Search form was submited');

        // Go to api and get results
        this.props.searchLists(this.state.term);
        this.setState({ term: '' });
    }

    // Handle user entering search text
    handleInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input
                    onChange={this.handleInputChange}
                    value={this.state.term}
                />
                <button type="submit">Search</button>
            </form>);
    }
}

// Connect our fetchLists action creator to the Search Bar container
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchLists }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);