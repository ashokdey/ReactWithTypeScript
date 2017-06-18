import * as React from 'react';
import {User} from '../models/user';

interface UserTableProps {
    users : User[];
}

export class UserTable extends React.Component<UserTableProps, {}> {

    public static propTypes = {
        users : React.PropTypes.arrayOf(
            React.PropTypes.instanceOf(User),
        ),
    };

    public static defaultProps = {
        users : [] as User[],
    };

    public render () {
        return (
            <div>
                <h1>All the users</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>CreatedOn</th>
                            <th>Usage</th>
                            <th>Plan</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(
                            (user : User) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.createdOn}</td>
                                        <td>{user.usage}</td>
                                        <td>{user.plan}</td>
                                        <td>{user.status}</td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}