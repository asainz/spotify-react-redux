import {
    SEARCH_BOX_POST_QUERY,
    SEARCH_BOX_POST_QUERY_SUCCESS,
    SEARCH_BOX_POST_QUERY_FAILURE
} from 'actions/action-types';
import {merge} from 'lodash/object';

export default function(state = {}, action = {}){
    switch( action.type ){
        case SEARCH_BOX_POST_QUERY: 
            return merge({}, state, {
                fullScreenLoader: true
            });

        case SEARCH_BOX_POST_QUERY_SUCCESS: 
            return merge({}, state, {
                fullScreenLoader: false
            });

        case SEARCH_BOX_POST_QUERY_FAILURE: 
            return merge({}, state, {
                fullScreenLoader: false
            });
    }

    return state;
}