import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu/Menu';
import ToDo from './ToDo/ToDo/ToDo';
import User from './User/User';
import UsersGet from './UsersGet/UsersGet';



const Content = ()=>
{
    return(
        <div id='Main'>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Menu/>}/>
                    <Route exact path='/todo' element={<ToDo/>}/>
                    <Route path="/user/:id" element={<User />} />
                    <Route exact path='/get_users' element={<UsersGet/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default Content;