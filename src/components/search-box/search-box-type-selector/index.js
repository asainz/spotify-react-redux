import './component-styles';
import React, {Component, PropTypes} from 'react';
import {noop} from 'lodash/util';

const SEARCH_TYPES = {
    ARTIST: 'artist',
    ALBUM: 'album',
    TRACK: 'track',
    PLAYLIST: 'playlist',
    ALL: 'artist,album,track,playlist'
};

export default
class SearchBoxTypeSelector extends Component{
    static propTypes = {
        onChange: PropTypes.func.isRequired
    };

    render(){
        return (
            <select onChange={this.props.onChange}>
                <option value={SEARCH_TYPES.ALL}>All</option>
                <option value={SEARCH_TYPES.ARTIST}>Artists</option>
                <option value={SEARCH_TYPES.ALBUM}>Albums</option>
                <option value={SEARCH_TYPES.TRACK}>Tracks</option>
                <option value={SEARCH_TYPES.PLAYLIST}>Playlists</option>
            </select>
        );
    }
}

SearchBoxTypeSelector.defaultProps = {
    onChange: noop
};

