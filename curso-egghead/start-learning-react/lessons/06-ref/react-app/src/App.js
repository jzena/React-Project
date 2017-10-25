import React from 'react';
import ReacDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = { a: '' }
        this.update = this.update.bind(this)
    }
    update(e) {
        this.setState({
            a: this.a.value,
            b: this.refs.b.value,
            c: ReacDOM.findDOMNode(this.c).value,
            d: this.d.refs.input.value
        })
    }
    render() {
        return (
            <div>
                <input
                    ref={node => this.a = node}
                    type="text"
                    onChange={this.update}
                />{this.state.a}
                <hr />
                <input
                    ref="b"
                    type="text"
                    onChange={this.update}
                />{this.state.b}
                <hr />
                <Input
                    ref={component => this.c = component}
                    update={this.update}
                />{this.state.c}
                <hr />
                <Input2
                    ref={component => this.d = component}
                    update={this.update}
                />{this.state.d}
            </div>
        );
    }
}

class Input extends React.Component {
    render() {
        return <input type="text" onChange={this.props.update} />;
    }
}

class Input2 extends React.Component {
    render() {
        return <div><input ref="input" type="text" onChange={this.props.update} /></div>
    }
}



export default App;