import {
    SEARCH_BOX_POST_QUERY
} from './action-types';

export function postQuery(data) {
    return {
        type: SEARCH_BOX_POST_QUERY,
        query: data.query
    };
}