import './view-styles';
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBox from 'components/search-box';
import * as searchBoxActions from 'actions/search-box';

class HomeView extends Component {
    static propTypes = {
        query: PropTypes.string,
        searchBoxActions: PropTypes.object.isRequired
    }

    render(){
        const { query, searchBoxActions } = this.props;

        const currentQuery = query ? (<p>You are serching for {query}</p>) : null;
        return (
            <div>
                { currentQuery }
                <SearchBox postQuery={searchBoxActions.postQuery}/>
            </div>
        );
    }
}

export default connect(state => ({
    query: state.searchBox.get('query')
}), dispatch => ({
    searchBoxActions: bindActionCreators(searchBoxActions, dispatch)
}))(HomeView)