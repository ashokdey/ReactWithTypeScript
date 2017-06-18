import 'core-js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { UserTable } from './components/UserTable'
import { User } from './models/user';

import 'bootstrap-loader';
import '../scss/style.scss';

fetch('http://localhost:3010/users')
    .then((res : Response) => res.json())
    .then((data : any) => 
        (data as User[]).map((usr : User) => 
            Object.assign( new User(), usr)))
    .then((users : User[]) => {
        ReactDOM.render(<UserTable users={users}/>, document.querySelector('main'));
    });
