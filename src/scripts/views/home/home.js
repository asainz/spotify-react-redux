import './home.scss';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import SearchBox from 'searchBox/searchBox';

export default
class HomeView extends Component {
    render(){
        return (
            <SearchBox />
        );
    }
}