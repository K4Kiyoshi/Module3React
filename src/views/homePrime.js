
import { CInput } from "@coreui/react";
import React from "react";

const HomePrime=(props)=>{

let {name,age,saveClick,phoneChange,phone} = props;

    return(
        <>
        <h1>This is Home Prime</h1>
        <p>Welcome {name}</p>
        <p>age is {age}</p>
        <button className="btn btn-success"
        onClick={saveClick}>Save</button>
        <CInput type="text" placeholder="please fill phone"
            onChange={phoneChange} value={phone}
        />

        <p>Your phone is {phone}</p>
        </>
       

    )
}

export default HomePrime;