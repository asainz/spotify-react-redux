import './view-styles';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import FullScreenLoader from 'components/full-screen-loader';

class AppView extends Component {
    static propTypes = {
        appName: PropTypes.string,
        fullScreenLoader: PropTypes.bool,
        children: PropTypes.any
    }

    render(){
        const { appName, children, fullScreenLoader } = this.props;
        return (
            <div>
                {fullScreenLoader ? <FullScreenLoader /> : null}
                <h1>{appName}</h1>
                <div>{children}</div>
            </div>
        );
    }
}

export default connect(state => ({
    appName: state.app.get('name'),
    fullScreenLoader: state.app.get('fullScreenLoader')
}))(AppView)