import React, {Component} from 'react';
import {Link} from "react-router-dom";



class Navbar extends Component{

render() {
    return (
        <div className="container-fluid webPage">

            <div className="navbar row">
            <div className="col-md-5 nav-left">
                <h2 className="logo">Burnham</h2>
                </div>
                <div className="col-md-7 nav-right">
                <ul>
                    <Link exact to="/" >
                    <li className="home">Home</li> 
                    </Link>
                    <Link exact to="/about">
                        <li>About</li>
                    </Link>
                    <Link exact to="/shop">
                        <li>Shop</li>
                    </Link>
                    <Link exact to="/contact">
                        <li >Contact</li>
                    </Link>
                </ul>
                </div>
             </div>
        </div>
    )
}


}
export default Navbar;