import React, {useState, useContext} from 'react';
import { useMutation } from '@apollo/client';

import {useHistory} from 'react-router-dom';

import { LOGIN_USER_QUERY } from '../gql/LoginUserQuery';

import { AuthContext } from '../context/auth';

export default function Login() {


    const context = useContext(AuthContext);

    const history = useHistory();

    const [values, setValues] = useState({
        username:"",
        password:""
    });

    const [errors, setErrors] = useState({});

    const [addUser, {loading, data, error}] = useMutation(LOGIN_USER_QUERY, {
        update(proxy, {data: {login: userData}}){
            // console.log(userData);
            context.login(userData);
            history.push('/');
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.exception.stacktrace);
            // console.log(errors);
        } ,            
        variables: values
    });

    // const [addUser, {loading, data, error}] = useMutation(LOGIN_USER_QUERY);

    // console.log(loading, error, data);

    const onChange = (event) => {
        setValues({...values, [event.target.name]:event.target.value});
    }

    const loginUser = (event) => {
        event.preventDefault();
        addUser();       
    }


    return (
       
        <div className="container p-5">

            <div className="container text-center p-2">
                Login User
            </div>

            <form onSubmit={loginUser}>

                <div className="mb-3">
                    <label htmlFor="userUsername" className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" id="userUsername" value={values.username} onChange={onChange}/>
                </div>

                
                <div className="mb-3">
                    <label htmlFor="userPassword" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="userPassword" value={values.password} onChange={onChange}/>
                </div>

                

                
                <button type="submit" className="btn btn-primary" >Submit</button>

            </form>

            
            <div className="container my-5">
                {
                    Object.keys(errors).length > 0 && (                        
                        
                        <div className="alert alert-danger" role="alert">
                            {errors[0]}
                        </div>                            
                        
                    )
                }
            </div>
            


        </div>
    )
}
