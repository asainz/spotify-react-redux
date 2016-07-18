import './view-styles';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash/object';

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

AppView.defaultProps = {
    appName: '',
    fullScreenLoader: false,
    children: []
};

export default connect(state => ({
    appName: get(state, 'app.name'),
    fullScreenLoader: get(state, 'app.fullScreenLoader')
}))(AppView)