import React, {Component} from "react";

class Counter extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <span style={this.styles} className={this.getBadgeColor()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    handleDelete() {

    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    getBadgeColor() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'dark' : 'warning';
        return classes;
    }
}

export default Counter;
