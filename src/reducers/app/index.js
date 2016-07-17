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
                fullScreenLoader: true
            });

        case SEARCH_BOX_POST_QUERY_SUCCESS: 
            return state.merge({
                fullScreenLoader: false
            });

        case SEARCH_BOX_POST_QUERY_FAILURE: 
            return state.merge({
                fullScreenLoader: false
            });
    }

    return state;
}