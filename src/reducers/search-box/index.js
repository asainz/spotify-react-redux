import {
    SEARCH_BOX_POST_QUERY
} from 'actions/action-types';

import Immutable from 'immutable';

export default function(state = {}, action = {}){
    switch( action.type ){
        case SEARCH_BOX_POST_QUERY: 
            return state.merge({
                query: action.query
            });
    }

    return state;
}