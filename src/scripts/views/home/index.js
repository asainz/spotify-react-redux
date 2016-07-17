import './view-styles';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import SearchBox from 'search-box';

export default
class HomeView extends Component {
    render(){
        return (
            <SearchBox />
        );
    }
}