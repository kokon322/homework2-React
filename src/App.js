import './App.css';
import React from "react";
import AllUsers from "./components/all-users/AllUsers";
import AllComments from "./components/all-comments/AllComments";



function App() {
    return (
        <div>
            <AllComments/>
            <AllUsers/>
        </div>
    );
}

export default App;
