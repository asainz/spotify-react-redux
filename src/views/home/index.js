import './view-styles';
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBox from 'components/search-box';
import ItemsList from 'components/items-list';
import * as searchBoxActions from 'actions/search-box';

class HomeView extends Component {
    static propTypes = {
        query: PropTypes.string,
        searchBoxActions: PropTypes.object.isRequired,
        searchResults: PropTypes.object
    }

    render(){
        const { query, searchBoxActions, searchResults } = this.props;

        const currentQuery = query ? (<p>You are serching for {query}</p>) : null;

        return (
            <div>
                { currentQuery }
                <SearchBox postQuery={searchBoxActions.postQuery}/>
                <ItemsList data={searchResults} />
            </div>
        );
    }
}

export default connect(state => ({
    query: state.searchBox.get('query'),
    searchResults: state.searchBox.get('results')
}), dispatch => ({
    searchBoxActions: bindActionCreators(searchBoxActions, dispatch)
}))(HomeView)