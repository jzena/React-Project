import React from 'react';
import ReacDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val: 0 }
        this.update = this.update.bind(this)
    }
    update() {
        this.setState({ val: this.state.val + 1 })
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    render() {
        console.log("render");
        return <button onClick={this.update}>{this.state.val}</button>
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

}

class Wrapper extends React.Component {
    constructor() {
        super()
        this.mount = this.mount.bind(this)
        this.unmount = this.unmount.bind(this)
    }

    mount() {
        ReacDOM.render(<App />, document.getElementById('a'))
    }

    unmount() {
        ReacDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render() {
        return (
            <div>
                <button onClick={this.mount}>Mount</button>
                <button onClick={this.unmount}>Unmount</button>
                <div id="a"></div>
            </div>
        );
    }
}


export default Wrapper