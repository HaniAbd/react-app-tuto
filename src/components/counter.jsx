import React, {Component} from "react";

class Counter extends Component {
    state = {
        count : 1,
        tags : ['tag1', 'tag2', 'tag3']
    };
    styles = {
        fontWeight : 'bold',
        fontSize : 14
    }


    render() {
        return (
            <div>
                <span className="badge badge-dark m-2">{this.state.count}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>

                <span style={this.styles} className={this.getBadgeColor()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>

                <div>
                    <ul>
                        {this.state.tags.map(tag => <li key={tag}> {tag} </li>)}
                    </ul>
                </div>
            </div>
        );
    }

    getBadgeColor() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'dark' : 'warning';
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
