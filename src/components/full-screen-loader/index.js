import './component-styles';
import '../../styles/vendor/loader';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

export default
class FullScreenLoader extends Component{
    render(){
        return (
            <div className="full-screen-loader">
                <div className="loader"></div>
            </div>
        );
    }
}