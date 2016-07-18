import './component-styles';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

export default
class ItemListSection extends Component{
    static propTypes = {
        name: PropTypes.string.isRequired,
        data: PropTypes.array.isRequired
    }

    render(){
        const { name, data } = this.props;

        if( data.length === 0 ){
            return null;
        }

        return (
            <li key={`items-list-section-${name}`}>
                <h1>{name}</h1>
                <ul>
                    { data.map((item, index) => {
                        return (
                            <li key={`items-list-section-item-${index}`}>
                                {item.name}
                            </li>
                        );
                    }) }
                </ul>
            </li>
        );
    }
}

ItemListSection.defaultProps = {
    data: []
};