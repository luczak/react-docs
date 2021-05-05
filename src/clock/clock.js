import React from "react";

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1_000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return <FormattedDate value={this.state.date} />;
    }
}

function FormattedDate(props) {
    return <h2>It's {props.value.toLocaleString()}.</h2>;
}
