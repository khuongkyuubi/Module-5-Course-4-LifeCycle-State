import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import AlertHideComponent from "./component/AlertHideComponent/AlertHideComponent";

function App() {


    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"alert"}>Alert Before Hide Component </Link>
                    </li>
                </ul>

            </nav>


            <Routes>

                <Route path="/" element={<h1  style={{
                    textAlign: 'center',
                    padding: 20
                }}>Please choose the practice!</h1>}/>
                <Route path="/alert" element={<AlertHideComponent/>}/>


            </Routes>


        </div>
    )


}


export default App;
