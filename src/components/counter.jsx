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
    componentDidMount() {
        // this is called after component is rendered
        // it's the best place to make Ajax call to fetch data
        // then use this.setState methode
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // this is called after component is updated with new states or new props
        // with this method we can compare new state/props with old state/props
        // if there is change we can make Ajax call to fetch data from server
        // Example :
        // if (prevProps.counter.value !== this.props.counter.value) {
        // do something ..
        // }
    }

    componentWillUnmount() {
        // this is called just before when component is removed from DOM
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
