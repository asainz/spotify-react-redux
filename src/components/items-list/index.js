import './component-styles';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

export default
class ItemsList extends Component{
    static propTypes = {
        data: PropTypes.object.isRequired
    }

    render(){
        const { data } = this.props;

        const items = data.get('artists').get('items').map((item, index) => {
            return (
                <li
                    key={`items-list-item-${index}`}
                >
                    {item.get('name')}
                </li>
            );
        });

        return (
            <ul>{ items }</ul>
        );
    }
}