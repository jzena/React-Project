import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                
                <h1>Access nested data with reacts props.children</h1>
                <br/>
                <Button>I <Heart /> React</Button>
               
            </div>
        );
    }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
    render() {
        return <span>&hearts;</span>;
    }
}

export default App;