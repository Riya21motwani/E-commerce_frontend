import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FreeLogo from './Free.png'; 

const Nav = () => {

    // Retrieve the 'user' from localStorage
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    // Logout function
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    };

    return (
        <div className="logo-wrapper">
           <div >
               <img alt="logo" className="logo" src={FreeLogo} />
             </div>
            
            {auth ? (
                <ul className="nav-ul">
                    <li><Link to="/">Product</Link></li>
                    <li><Link to="/add">Add product</Link></li>
                    {/* <li><Link to="/update">Update Product</Link></li> */}
                    
                    
                    {/* Using <button> for logout to avoid Link navigation conflict */}
                    <li>
                        <button onClick={logout} className="logout-btn">
                            Logout ({JSON.parse(auth).name})
                        </button>
                    </li>
                </ul>
            ) : (
                <ul className="nav-ul">
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            )}
        </div>
    );
};

export default Nav;