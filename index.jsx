var React = require('react');
var ReactDOM = require('react-dom');

import {Root} from './src/components/Root';

ReactDOM.render(
    <Root/>,
    document.getElementById('root'));

if (typeof window !== 'undefined') {
    window.React = React;
}
