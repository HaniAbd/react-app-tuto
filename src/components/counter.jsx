import React, {Component} from "react";

class Counter extends Component {
    state = {
        value : this.props.value
    };

    handleIncrement = () => {
        // this.state.count++; this not work, because react not aware of this change so we have to use setState
        this.setState({count: this.state.value + 1});
    };


    render() {
        return (
            <div>
                {this.props.children}
                <span style={this.styles} className={this.getBadgeColor()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    formatCount() {
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
    }

    getBadgeColor() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'dark' : 'warning';
        return classes;
    }
}

export default Counter;
