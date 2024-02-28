import React,{ useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {resetQuiz} from "../../Redux/Actions/Actions";
import { Button } from "@mui/material";
import "./ResultStyle.css";



export let Result = (props)=>{
    const [isAnimating,setIsAnimating] = useState(false);
    useEffect(()=>{
       setIsAnimating(true);
       const animationTimeout = setTimeout(()=>{
          setIsAnimating(false);
       },2000);
       return ()=>{
        clearTimeout(animationTimeout);
       }
    },[]);

    const results = useSelector((state)=>state.reducer.answers);
    const mapped = results.map((el)=>el.isCorrect);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const resetQuizHandler = ()=>{
        dispatch(resetQuiz());
        navigate("/");
    }
    
    return (
        <>
         <div className="result-container">
            <div className="container">
                <div className="result">
                    <p className="name">Heyy !! {props.name}</p>
                    <div className={(mapped.filter((el)=>el === true).length !== 0)?"result-img" : "result-img2"}></div>
                    {(mapped.filter((el)=>el === true).length !== 0) ? (<div className={`congo ${isAnimating ? "animate" : ""}`}>
                        <h2>Congratulations !</h2>
                    </div>) : (<div className={`congo ${isAnimating ? "animate" : ""}`}>
                        <h2 style={{fontSize:"30px"}}>Oops!</h2>
                    </div>)}
                    <p className="score" style={{marginBottom:"15px",marginTop:"0px"}}>
                        You've scored {mapped.filter((el)=>el === true).length} out of {" "} {mapped.length}
                    </p>
                    <Button variant="outlined" color="error" sx={{":hover":{bgcolor:"rgb(206,78,78)",color:"white"},marginBottom:"20px"}} onClick={()=> resetQuizHandler()}>
                        Done
                    </Button>
                </div>
            </div>
         </div>
        </>
    )
}