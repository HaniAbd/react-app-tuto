import React, {Component} from "react";

class Counter extends Component {
    state = {
        count : 0
    };

    handleIncrement = () => {
        // this.state.count++; this not work, because react not aware of this change so we have to use setState
        this.setState({count: this.state.count + 1});
    };


    render() {
        return (
            <div>
                <span style={this.styles} className={this.getBadgeColor()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }

    getBadgeColor() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'dark' : 'warning';
        return classes;
    }
}

export default Counter;
