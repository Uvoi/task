import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu/Menu';
import ToDo from './ToDo/ToDo/ToDo';
import User from './User/User';



const Content = ()=>
{
    return(
        <div id='Main'>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Menu/>}/>
                    <Route exact path='/todo' element={<ToDo/>}/>
                    <Route exact path='/user' element={<User/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default Content;