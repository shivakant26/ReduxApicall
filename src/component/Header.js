import React from "react";
import Menu from "./Menu";

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="heading">
                <h1>Call Api Using Redux</h1>
                </div>
                <Menu />
            </div>
        )
    }
}


export default Header;