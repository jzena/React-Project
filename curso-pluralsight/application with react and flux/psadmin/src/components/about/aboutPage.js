"use strict"; // Tells the browser to evaluate everything we're doing in stric mode

var React = require('react');

var About = React.createClass({
    render: function () {
        return (
            <div >
                <h1>About</h1>
                <p>
                    this application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Broserify</li>
                        <li>bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;