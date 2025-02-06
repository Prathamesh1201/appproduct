import React from "react";
import Navbar from "./Navbar";
import { Outlet} from "react-router-dom";

function App(){

    return(
        <>
            <header>
            <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <div id="foot">
                    <p>All Rights reserved ©️ Prathamesh Pisal 2025</p>
                </div>
            </footer>
        </>
    )
}

export default App;