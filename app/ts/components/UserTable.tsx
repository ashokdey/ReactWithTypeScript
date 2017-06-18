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

    private containerStyle : any;

    constructor(props : UserTableProps) {
        super(props);

        this.containerStyle = {
            border : '1px solid lightgray',
            marginTop : '50px'
        }
    }

    public render () {
        return (
            <div className='container' style={this.containerStyle}>
                <br/>
                <hr/>
                <h1>All the users</h1>
                <hr/>
                <br/>
                <table className='table table-striped'>
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
                                        <td>{user.usage} MB</td>
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