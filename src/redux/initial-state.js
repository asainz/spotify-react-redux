import Immutable from 'immutable';

export default {
    app: Immutable.Map({
        name: 'My Super App'
    }),
    searchBox: Immutable.Map({
        query: '',
        error: '',
        results: Immutable.Map({
            artists: Immutable.Map({
                items: Immutable.List()
            })
        })
    })
}