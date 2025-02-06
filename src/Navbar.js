import React, { useContext } from "react";
import {Link} from "react-router-dom";
import { themeContext } from "./MyContext/ThemeContext";
import dark from "./dark_mode_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import light from "./light_mode_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"

function Navbar(){

    const {theme,setTheme} = useContext(themeContext);
    console.log(theme)

    let navStyle = {};

    if(theme === 'light'){
        navStyle = {
            backgroundColor : 'white',
            color : 'black'
        }
    }
    else{
        navStyle = {
            backgroundColor : '#333',
            color : 'white'
        }
    }
    return(
        <div>
                <nav id="nav1" style={navStyle}>
                    <Link to="/Home" className="ab" >Home</Link>
                    <Link to="/about" className="ab">About</Link>
                    <Link to="/contact" className="ab">Contact</Link>
                    <Link to="/showproduct" className="ab">ShowProduct</Link>
                    {
                        theme === 'light'
                        ?(
                            <img src={dark} alt="dark"
                            onClick={()=>setTheme('dark')}
                            style={{cursor:'pointer'}}
                            />
                        )
                        :(
                            <img src={light} alt="light"
                            onClick={()=>setTheme('light')}
                            style={{cursor:'pointer'}}
                            />
                        )
                    }
                </nav>
        </div>
    )
}

export default Navbar;