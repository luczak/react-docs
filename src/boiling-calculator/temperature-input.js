import React from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

export class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const scaleName = scaleNames[this.props.scale];
        return (
            <fieldset>
                <legend>Enter temperature in {scaleName}:</legend>
                <input
                    value={this.props.temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        );
    }
}
