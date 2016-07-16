import Immutable from 'immutable';

const initialState = Immutable.Map({
    name: 'My Super App'
});

export default function(state = initialState, action = {}){
    return state;
}