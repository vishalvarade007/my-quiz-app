import "./PlayQuizStyle.css";
import { useRef } from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getName,playQuiz} from "../../Redux/Actions/Actions";
import { Container } from "@mui/material";

export let PlayQuiz = ()=>{
    const quiz = useSelector((state)=>state.reducer.quiz);
    const name = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const play = (id)=>{
        if(name.current.value === ""){
            alert("Enter Your Name Please!");
            return;
        }
        if(name.current.value < 5 || name.current.value > 50){
            return alert("Please Enter Valid Name Between 5 and 50 characters!");
        }else {
            dispatch(getName(name.current.value));
            dispatch(playQuiz(id));
            navigate("/quizcard");
        }
    };
   
    return (
        <>
        <Container>
            <div className="playquiz-box">
                <div className="playquiz-title">
                    <h1>Play Quiz</h1>
                </div>
                <div className="playquiz-desc">
                    <p>Enter Your Name and Please Choose One Quiz</p>
                    <div className="good-luck"></div>
                    <div className="input-name">
                        <div className="quiz-name">
                            <label>Enter Your Name</label>
                            <input type="text" ref={name} placeholder="Enter Your Name" autoFocus className="input-name-text"></input>
                        </div>
                    </div>
                    <div className="created-quiz">
                        {quiz.length === 0 ? (
                            <p>There are Currently No Quiz is added</p>
                        ):(
                            <div>
                                <div className="playquiz-viewoption">
                                   {quiz.filter((el)=>el.isActive === true)
                                   .map((el)=>(
                                    <div className="playquiz-option" onClick={()=>play(el.id)} key={el.id}>
                                        <h4>{el.title}</h4>
                                    </div>
                                   ))
                                   }
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
         
        </>
    )
}