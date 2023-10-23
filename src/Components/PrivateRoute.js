import React,{useContext} from 'react';
import { Route, redirect } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

export default function PrivateRoute ({component:Component,...rest}) {
    const {user} = useContext(AuthContext);
    return (
        <Route {...rest} render={props =>{
            return user ? <Component {...props}/> : redirect('/login')
        }}/>
    )
}