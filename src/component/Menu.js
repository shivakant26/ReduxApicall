import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component{
    render(){
        return(
            <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/test">Test</Link>
            </div>
        )
    }
}


export default Menu;