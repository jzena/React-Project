import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: 'this is the state txt',
        }
        this.update = this.update.bind(this);
    }
    update(e) {
        this.setState({
            txt: e.target.value
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.txt}</h1>
                <Widget update = {this.update} />
                <Widget update = {this.update} />
                <Widget update = {this.update} />
            </div>
        );
    }
}

const Widget = (props) => <input type="text" onChange={props.update} />

export default App;