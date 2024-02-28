import React from "react";
import img from "../Images/pagenotfoundnew.jpg";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";


export let PageNotFound = ()=>{
    return (
        <>
         <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
            <div style={{display:"grid",justifyContent:"center"}}>
                <img src={img} alt="404 Page Not Found!" style={{height:"70vh"}}></img>
                <Button component={Link} to={"/"} variant="outlined" color="error" sx={{":hover":{bgcolor:"rgb(206,78,78)",color:"white"},marginTop:"10px"}}>
                    Back to Home
                </Button>
            </div>
         </div>
         
        </>
    )
}