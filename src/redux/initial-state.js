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
            }),
            albums: Immutable.Map({
                items: Immutable.List()
            }),
            tracks: Immutable.Map({
                items: Immutable.List()
            }),
            playlists: Immutable.Map({
                items: Immutable.List()
            })
        })
    })
}