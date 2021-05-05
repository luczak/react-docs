import React from 'react';
import { TemperatureInput } from "./temperature-input.js";
import { BoilingVerdict } from "./boiling-verdict.js";

export class BoilingCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c',
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({ temperature, scale: 'c' });
    }

    handleFahrenheitChange(temperature) {
        this.setState({ temperature, scale: 'f' });
    }

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'c' ? temperature : tryToConvert(temperature, convertToCelsius);
        const fahrenheit = scale === 'f' ? temperature : tryToConvert(temperature, convertToFahrenheit);
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}
function tryToConvert(temperature, converter) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = converter(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function convertToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
