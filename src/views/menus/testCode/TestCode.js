import React, { useState } from "react";
import Welcome from "./Welcome";
import { CButton, CInput, CLabel, CTooltip } from "@coreui/react";
import { useHistory } from "react-router-dom";
const TestCode=()=>{
let history = useHistory();
const[name,setName]=useState(localStorage.getItem("NAME"));

const goClick = () =>{
  history.push(`/menus/NewMenu`);
}

const deleteLocal = () =>{
  localStorage.clear();
}

return(
        <div>
            <h1>Register Result Value</h1>
            {name ? (
                <>
                <CLabel>{name.substring(0, 15)}</CLabel> 
                <CTooltip content={name} placement="top">
                <span>...</span>
              </CTooltip>
              </>
            ) : (
                <CLabel>No Name</CLabel>
            )}
          <br></br>
          
            <CButton className="btn btn-danger" onClick={deleteLocal} >
                Delete localStorage</CButton>
              &emsp;
            <CButton className="btn btn-success" onClick={goClick}>
              Go to NewMenu
            </CButton>
        </div>
    )
}

export default TestCode;