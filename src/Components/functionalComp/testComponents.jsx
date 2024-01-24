import React from "react";
import TestClassComp from "../classComponents/testClassComponent";
//import  ReactDOM  from "react-dom/client";

function TestComponent(){
    return(
        <div>
            <TestClassComp/>
            <h1>This is a test Functional Component.</h1>
            <p>We are learning Functional Component.</p>
        </div>
    )
}

export default TestComponent;

/*
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <TestComponent/>
)
*/