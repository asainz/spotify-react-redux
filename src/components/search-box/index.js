import './component-styles';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

const SEARCH_TYPES = {
    ARTIST: 'artist',
    ALBUM: 'album',
    TRACK: 'track',
    PLAYLIST: 'playlist',
    ALL: 'artist,album,track,playlist'
};

class SearchBox extends Component{
    static propTypes = {
        postQuery: PropTypes.func.isRequired,
        errorInSearch: PropTypes.string
    };

    constructor(props){
        super(props);

        this.state = {
            query: '',
            type: SEARCH_TYPES.ALL
        };

        this.handleQueryInputChange = this.handleQueryInputChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleSearchForChange = this.handleSearchForChange.bind(this);
    }

    handleQueryInputChange(e){
        this.setState({
            query: e.target.value
        });
    }

    handleOnSubmit(e){
        e.preventDefault();

        const { query, type } = this.state;
        const { postQuery } = this.props;
        
        postQuery({query, type});
    }

    handleSearchForChange(e){
        this.setState({
            type: e.target.value
        });
    }

    render(){
        const { errorInSearch } = this.props;
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        onChange={this.handleQueryInputChange}
                        type="text"
                    />
                    <select onChange={this.handleSearchForChange}>
                        <option value={SEARCH_TYPES.ALL}>All</option>
                        <option value={SEARCH_TYPES.ARTIST}>Artists</option>
                        <option value={SEARCH_TYPES.ALBUM}>Albums</option>
                        <option value={SEARCH_TYPES.TRACK}>Tracks</option>
                        <option value={SEARCH_TYPES.PLAYLIST}>Playlists</option>
                    </select>
                    <input type="submit" value="Search!"/>
                </form>
                { errorInSearch ? <p>{errorInSearch}</p> : null }
            </div>
        );
    }
}

export default connect(state => ({
    errorInSearch: state.searchBox.get('error')
}))(SearchBox)