import React from 'react';


class SearchBar extends React.Component {

    state = {
        textInput: ''
    };

    onInputChange = (e) => {
        this.setState({textInput: e.target.value});
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.textInput)
    }



    render() {
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label> Video Search</label>
                        <input type="text"
                               value={this.state.textInput}
                               onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar;