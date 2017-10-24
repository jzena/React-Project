import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: 'this is the state txt',
            cat: 0
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
                <input type="text" onChange={this.update} />
                <h1>{this.state.txt} - {this.state.cat}</h1>
            </div>
        );
    }
}

export default App;