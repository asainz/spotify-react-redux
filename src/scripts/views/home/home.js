import './home.scss';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import SearchBar from 'searchBar/searchBar';

export default
class HomeView extends Component {
    render(){
        return (
            <SearchBar />
        );
    }
}