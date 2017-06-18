import * as React from 'react';
import * as ReactDOM from 'react-dom';

class HelloWorld extends React.Component<void, void> {
    public render () {
        return (
            <h1>Hello world!</h1>
        );
    }
}

import '../scss/style.scss';

ReactDOM.render(<HelloWorld/>, document.querySelector('main'));