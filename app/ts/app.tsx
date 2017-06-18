import 'core-js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class UserTable extends React.Component<{}, {}> {
    public render () {
        return (
            <div>
                <h1>All the users</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>CreatedOn</th>
                            <th>Usage</th>
                            <th>Plan</th>
                            <th>Status</th>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>123sadas223po43a</td>
                            <td>Ashok Dey</td>
                            <td>ashokdey@gmail.com</td>
                            <td>21-12-12</td>                            
                            <td>0.2</td>
                            <td>Premium</td>
                            <td>Active</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

import '../scss/style.scss';

ReactDOM.render(<UserTable/>, document.querySelector('main'));