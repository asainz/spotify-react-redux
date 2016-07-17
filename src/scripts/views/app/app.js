import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class AppView extends Component {
    static propTypes = {
        appName: PropTypes.string,
        children: PropTypes.any
    }

    render(){
        const { appName, children } = this.props;
        return (
            <div>
                <h1>{appName}</h1>
                <div>{children}</div>
            </div>
        );
    }
}

export default connect(state => ({
    appName: state.app.get('name')
}))(AppView)