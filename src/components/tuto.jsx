import React, {Component} from "react";

class Tuto extends Component {
    state = {
        count : 1,
        tags: ['tag1', 'tag2', 'tag3'],
        emptyTags: []
    };
    styles = {
        fontWeight : 'bold',
        fontSize : 14
    }
    /**
     * this is not defined on handleIncrement function
     * that's why we need to bind this on the constructor
     * or we can use arrow function instead*/
    // constructor(props) {
    //    super(props);
    //    this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        console.log('handleIncrement', this);
        // this.state.count++; this not work, because react not aware of this change so we have to use setState
        this.setState({count: this.state.count + 1});
    };


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
                <div>
                    {this.renderTags()}
                </div>

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

    renderTags() {
        if (this.state.emptyTags.length === 0) return <p>There is no tags</p>;
        return(
            <ul>
                {this.state.tags.map(tag => <li key={tag}> {tag} </li>)}
            </ul>
        );
    }
}

export default Tuto;
