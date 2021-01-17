import React from "react"
import Typed from "react-typed"
const Header = () => {
    return (
        <div className="Header-wraper">
            <div className= "main-info">
              
                <Typed 
                className ="typed_text"
                strings={["I am mati", 'A software engineer who loves turning ideas to reality']}
                typeSpeed={30}
                backSpeed={60}
                loop
                />
                <a href="#" className="Contact-Button"> Contact</a>
            </div>
        </div>
    )
}

export default Header
