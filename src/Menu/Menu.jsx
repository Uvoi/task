import React from 'react';
import './styles.css'


const Menu = (props)=>
{
    return(
        <div className='Menu'>
            <a href="/user/&">User</a>
            <a href="/todo">ToDo</a>
            <a href="/get_users">Get users</a>
        </div>
    );
};

export default Menu;