import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import AlertHideComponent from "./component/AlertHideComponent/AlertHideComponent";
import CheckLoginLogout from "./component/CheckLoginLogout/CheckLoginLogout";
import ExpandCollapse from "./component/Expand-Collapse/ExpandCollapse";

function App() {


    return (
        <div>
            <nav>
                <ul>
                    <h2>Practice</h2>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"alert"}>Alert Before Hide Component </Link>
                    </li>
                    <li>
                        <Link to={"login-logout"}>Check Login Logout</Link>
                    </li>
                    <hr/>
                    <h2>Exercise</h2>
                    <li>
                        <Link to={"expand-collapse"}>Component Expand/Collapse</Link>
                    </li>
                </ul>
            </nav>

            <Routes>

                <Route path="/" element={<h1 style={{
                    textAlign: 'center',
                    padding: 20
                }}>Please choose the practice!</h1>}/>
                <Route path="/alert" element={<AlertHideComponent/>}/>
                <Route path="/login-logout" element={<CheckLoginLogout/>}/>
                <Route path="/expand-collapse" element={<ExpandCollapse/>}/>


            </Routes>


        </div>
    )


}


export default App;
