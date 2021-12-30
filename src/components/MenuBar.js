import React, {useContext} from 'react';
import { Link,useLocation } from 'react-router-dom';

import '../App.css';
import { AuthContext } from '../context/auth';

export default function MenuBar() {

    const {user, logout} = useContext(AuthContext);

    let location = useLocation();

    React.useEffect(()=>{
        // console.log(location);
    },[location]);   

    const menuBar = user?(
        <nav className="navbar navbar-dark bg-dark sticky-top navbar-expand-lg border-bottom px-5 py-1" >

            <div className="container-fluid ">          

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">

                            <Link className="nav-link active" aria-current="page" to="/">{user.username}</Link>

                        </li>
                    </ul>

                    <ul className="navbar-nav align-right" >                        

                            

                            <li className="nav-item text-dark">

                            <button type="button" className="btn btn-outline-danger" onClick={logout}>
                                <i className="bi bi-box-arrow-left mx-1"></i>
                               Logout
                            </button>

                            </li>
                        
                    </ul> 

                </div>

            </div>

        </nav>
    ):(
        <nav className="navbar navbar-dark bg-dark sticky-top navbar-expand-lg  border-bottom px-5 py-1" >

            <div className="container-fluid ">          

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">

                            <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>

                        </li>
                    </ul>

                    <ul className="navbar-nav align-right" >                        

                            <li className="nav-item text-dark" >

                                <Link className={`nav-link ${location.pathname==="/login"?"active":""}`} to="/login">Login</Link>

                            </li>

                            <li className="nav-item text-dark">

                                <Link className={`nav-link ${location.pathname==="/register"?"active":""}`} to="/register">Register</Link>

                            </li>
                        
                    </ul> 

                </div>

            </div>

        </nav>
    );

    return menuBar;
}
