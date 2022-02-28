import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="heading">
                    <h1>Call Api Using Redux</h1>
                </div>
                <div className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/jwellary">Jwellary</Link>
                </div>
            </div>
        )
    }
}

export default Header;