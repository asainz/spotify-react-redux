import {
    SEARCH_BOX_POST_QUERY,
    SEARCH_BOX_POST_QUERY_SUCCESS,
    SEARCH_BOX_POST_QUERY_FAILURE
} from './action-types';

import axios from 'axios';

function postQuerySuccess(data){
    return {
        type: SEARCH_BOX_POST_QUERY_SUCCESS,
        data: data
    };
}

function postQueryFailure(error){
    return {
        type: SEARCH_BOX_POST_QUERY_FAILURE,
        error: error
    };
}

function postQueryInit(query){
    return {
        type: SEARCH_BOX_POST_QUERY,
        query: query
    };
}

export function postQuery(data) {
    return function(dispatch) {
        dispatch(postQueryInit(data.query));

        const url = `https://api.spotify.com/v1/search?type=${data.type}&q=${data.query}`;
        return axios.get(url).then(function(response){
            dispatch(postQuerySuccess(response.data));
            return response.data;
        }, function(error){
            dispatch(postQueryFailure(error));
            return error;
        });
    };
}