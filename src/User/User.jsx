import React from 'react';
import './styles.css'


const User = ({
    profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s", 
    userName = "Jone Doe", 
    userInfo = "I was born in 1988 in Oceania. In the Proles family.", 
    email = "jone_doe@mail.com", 
    phone= "+79273729327"
})=>
{
    return(
        <div className='User'>
            <div className="userWrapper">
                <div className="profilePic">
                    <img src={profilePic} alt="user picture" />
                </div>
                <div className="userData">
                    <div className="userNameAndInfo">
                        <h1>{userName}</h1>
                        <p>{userInfo}</p>
                    </div>
                    <div className="userContactData">
                        <h3>✉️ {email}</h3>
                        <h3>📞 {phone}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;