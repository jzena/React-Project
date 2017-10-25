import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {
    render() {
        return (
            <div>
                
                <h1>Custom propType validation to react component</h1>
                <br/>
                <Title text="123456" />
                <h1>Normalize </h1>
                <br/>
            </div>
        );
    }
}

const Title = (props) => <h1>Title: {props.text}</h1>
Title.propTypes = {
    text(props, propName, component) {
        if (!(propName in props)) {
            return new Error(`missing ${propName}`)
        }
        if (props[propName].length < 6) {
            return new Error(`${propName} was too short`);
        }
    }
}

export default App;