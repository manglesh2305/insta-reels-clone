import React,{useContext, useEffect} from 'react';
import { Route, redirect, useNavigate} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Feed from './Feed';

export default function PrivateRoute () {                  //{component:Component,...rest}
    const {user} = useContext(AuthContext);
   const navigate = useNavigate();
   useEffect(()=>{
    if(!user){
        navigate('/login')
    }
   })
    return (
        <Feed/>  
    )
}


