var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

var firstName = 'Poorani';
var message = 'This is from the Greeter Component';

ReactDOM.render( 
    <Greeter name = {firstName} message = {message}/>,
    document.getElementById('app')
);
