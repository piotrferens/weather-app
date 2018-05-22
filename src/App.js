import React, { Component } from "react";
import { connect } from "react-redux";

import { searchCity, setCityName } from "./actions/actions";
import { temperatureSelector } from "./selectors/temperatureSelector";

class App extends Component {
    onChange = event => {
        this.props.setCityName(event.target.value);
    };
    render() {
        return (
            <div>
                <input onChange={this.onChange} value={this.props.data.cityName} />
                {Object.keys(this.props.data.cityData).length ? (
                    <div>{this.props.temperature}°C</div>
                ) : null}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.data,
        temperature: temperatureSelector(state),
    };
}

export default connect(mapStateToProps, { searchCity, setCityName })(App);
