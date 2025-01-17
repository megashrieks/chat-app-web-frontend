import React, { Component } from "react";
import "./CustomInput.css";
class CustomInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue,
            onChange: this.change(
                !!this.props.triggerOnChange ? this.props.watcher : () => { }
            ),
            onBlur: this.change(
                !!!this.props.triggerOnChange ? this.props.watcher : () => { }
            )
        };
    }
    change = fn => ({ target: { value } }) => {
        this.setState({
            value
        });
        fn && fn(value);
    };
    componentWillReceiveProps(newProps) {
        if (newProps.defaultValue != this.state.value) 
            this.setState({ value: newProps.defaultValue });
    }
    render() {
        var errorclass = !!this.props.error ? " error" : "";
        return (
            <label className={"custom-input" + errorclass} style={this.props.style}>
                <input
                    {...this.state}
                    disabled={!!this.props.disabled}
                    type={this.props.type || "text"}
                />
                <div className="label">{this.props.label}</div>
                <div className="error-message">{this.props.errorMessage}</div>
            </label>
        );
    }
}
export { CustomInput };