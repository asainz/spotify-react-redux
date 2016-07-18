import './component-styles';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash/object';

import ItemListSection from './items-list-section';

export default
class ItemsList extends Component{
    static propTypes = {
        data: PropTypes.object.isRequired
    }

    render(){
        const { data } = this.props;

        return (
            <ul>
                <ItemListSection name="artists" data={get(data, 'artists.items')} />
                <ItemListSection name="albums" data={get(data, 'albums.items')} />
                <ItemListSection name="tracks" data={get(data, 'tracks.items')} />
                <ItemListSection name="playlists" data={get(data, 'playlists.items')} />
            </ul>
        );
    }
}

ItemsList.defaultProps = {
    data: {}
};