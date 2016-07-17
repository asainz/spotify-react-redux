import './component-styles';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

export default
class SearchBox extends Component{
    static propTypes = {
        postQuery: PropTypes.func.isRequired
    }

    constructor(props){
        super(props);

        this.state = {
            query: ''
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(e){
        const query = e.target.value;
        this.setState({
            query: query
        });
    }

    handleOnSubmit(e){
        e.preventDefault();

        const { query } = this.state;
        const { postQuery } = this.props;
        
        postQuery({query});
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        onChange={this.handleOnChange}
                        type="text"
                    />
                    <input type="submit" value="Search!"/>
                </form>
            </div>
        );
    }
}