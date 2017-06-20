import * as React from 'react';
import {User} from '../models/user';

enum UserTableCols {
    None, Name, Email, Usage, Plan, Status
}

interface UserTableState {
    sortCol : UserTableCols;
}

interface UserTableProps {
    users : User[];
}

export class UserTable extends React.Component<UserTableProps, UserTableState> {

    public static propTypes = {
        users : React.PropTypes.arrayOf(
            React.PropTypes.instanceOf(User),
        )
    };

    public static defaultProps = {
        users : [] as User[]
    };

    private containerStyle : any;

    constructor(props : UserTableProps) {
        // sending props to the parent 
        super(props);

        // setting the state 
        this.state = {
            sortCol : UserTableCols.Name
        }

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
                            <th onClick={() => this.onSort(UserTableCols.Name)}
                                style={this.activeSort(UserTableCols.Name)}>Name</th>
                            <th onClick={() => this.onSort(UserTableCols.Email)}
                                style={this.activeSort(UserTableCols.Email)}>Email</th>
                            <th>CreatedOn</th>
                            <th onClick={() => this.onSort(UserTableCols.Usage)}
                                style={this.activeSort(UserTableCols.Usage)}>Usage</th>
                            <th onClick={() => this.onSort(UserTableCols.Plan)}
                                style={this.activeSort(UserTableCols.Plan)}>Plan</th>
                            <th onClick={() => this.onSort(UserTableCols.Status)}
                                style={this.activeSort(UserTableCols.Status)}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.concat().sort(this.getSortFn()).map(
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

    private onSort(sortCol : UserTableCols) : void {
        this.setState({ sortCol : sortCol});
    }

    private activeSort(sortCol : UserTableCols) : any {
        return {
            color : this.state.sortCol === sortCol ? 'seagreen' : 'black'
        };
    }

    private getSortFn() : (a: any, b: any) => number {
        if(this.state.sortCol === UserTableCols.None) {
            return (a: any, b:any ) => 0;
        }

        const fieldName: string = UserTableCols[this.state.sortCol].toLowerCase();
        return (a: any, b:any ) : number => {
            if(a[fieldName] < b[fieldName]) return -1;
            if(a[fieldName] > b[fieldName]) return 1;
            return 0;
        } 
    } 
}