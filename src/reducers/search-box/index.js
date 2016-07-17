import {
    SEARCH_BOX_POST_QUERY,
    SEARCH_BOX_POST_QUERY_SUCCESS,
    SEARCH_BOX_POST_QUERY_FAILURE
} from 'actions/action-types';

import Immutable from 'immutable';

export default function(state = {}, action = {}){
    switch( action.type ){
        case SEARCH_BOX_POST_QUERY: 
            return state.merge({
                query: action.query
            });

        case SEARCH_BOX_POST_QUERY_SUCCESS: 
            return state.merge({
                results: action.data
            });

        case SEARCH_BOX_POST_QUERY_FAILURE: 
            return state.merge({
                error: action.error.message
            });
    }

    return state;
}