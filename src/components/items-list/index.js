import './component-styles';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

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
                <ItemListSection name="artists" data={data.get('artists')} />
                <ItemListSection name="albums" data={data.get('albums')} />
                <ItemListSection name="tracks" data={data.get('tracks')} />
                <ItemListSection name="playlists" data={data.get('playlists')} />
            </ul>
        );
    }
}