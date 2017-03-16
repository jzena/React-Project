"use strict"; // Tells the browser to evaluate everything we're doing in stric mode

var React = require('react');

var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, React router, and flux for ultra-responsive web apps.</p>
            </div>
        );
    }
});

module.exports = Home;