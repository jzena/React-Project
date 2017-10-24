import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() { 
        let txt = this.props.txt;
        let cat = this.props.cats;
        return <h1>{txt} - {cat}</h1>;
    }
}
 
App.prototypes = {
    txt: PropTypes.string,
    cats: PropTypes.number.isRequired,
}

App.defaultProps = {
    txt: "this is the default txt"
}

export default App;