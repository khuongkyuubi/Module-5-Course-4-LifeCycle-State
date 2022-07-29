import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import "./App.css";
import AlertHideComponent from "./component/AlertHideComponent/AlertHideComponent";
import CheckLoginLogout from "./component/CheckLoginLogout/CheckLoginLogout";
import ExpandCollapse from "./component/Expand-Collapse/ExpandCollapse";
import Calculator from "./component/Calculator/Calculator";
import LoginLogoutBootstrap from "./component/LoginLogoutBootstrap/LoginLogoutBootstrap";
import TodoApp from "./component/TodoApp/TodoApp"

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
                    <hr style={{width: "200px"}}/>

                    <h2>Exercise</h2>
                    <li>
                        <Link to={"expand-collapse"}>Component Expand/Collapse</Link>
                    </li>
                    <li>
                        <Link to={"calculator"}>Calculator</Link>
                    </li>
                    <li>
                        <Link to={"login-logout-bootstrap"}>Login/Logout Bootstrap</Link>
                    </li>
                    <li>
                        <Link to={"todo-app"}>Todo List</Link>
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
                <Route path="/calculator" element={<Calculator/>}/>
                <Route path="/login-logout-bootstrap" element={<LoginLogoutBootstrap/>}/>
                <Route path="/todo-app" element={<TodoApp/>}/>

            </Routes>


        </div>
    )


}


export default App;
