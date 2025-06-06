import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../redux/action';


const Navbar = () => {   
    const user = useSelector((state) => state.user.user)
    const state = useSelector(state => state.handleCart)

    const dispatch = useDispatch();

    
    const handleLogout = () => {
        dispatch(logoutUser());
    };

        
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> React Ecommerce</NavLink>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
            {user ? (
                    <>
                        <span>Welcome, {user.name}</span>
    <button onClick={handleLogout} className="btn btn-outline-dark m-2"><i className="fa fa-sign-out mr-1"></i> Logout</button>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                    </>
                    )}
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                        </div>                
                </div>
            </div>
        </nav>
    )
}

export default Navbar