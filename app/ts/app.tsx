import 'core-js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class WidgetTool extends React.Component<{}, {}> {
    public render () {
        return (
            <div>
                <h1>Widget Tool</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>Widget 1</td>
                        <td>Color 1</td>
                        <td>Small</td>
                        <td>2</td>
                        <td>12.32</td>
                    </tr>
                </table>
            </div>
        );
    }
}

import '../scss/style.scss';

ReactDOM.render(<WidgetTool/>, document.querySelector('main'));