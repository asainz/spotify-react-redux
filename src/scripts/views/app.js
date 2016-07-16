import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    static propTypes = {
        name: PropTypes.string
    }

    render(){
        const { appName } = this.props;
        return (
            <h1>{appName}</h1>
        );
    }
}

export default connect(state => ({
    appName: state.app.get('name')
}))(App)