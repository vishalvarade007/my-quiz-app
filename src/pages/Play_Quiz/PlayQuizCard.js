import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAnswer} from "../../Redux/Actions/Actions";
import { Button, Container } from "@mui/material";
import { Result } from "./Result";
import "./PlayQuizCardStyle.css";

export let PlayQuizCard = ()=>{
    const [count,setCount] = useState(0);
    const [showModal,setShowmodal] = useState(false);
    const [finalAnswer,setFinalanswer] = useState({});
    const [disable,setDisable] = useState(true);
    const quiz = useSelector((state)=>state.reducer.playQuiz).question;
    const title = useSelector((state)=>state.reducer.title);

    const name = useSelector((state)=> state.reducer.name);
    const dispatch = useDispatch();
    const question = quiz[count].question;
    const answers = quiz[count].answers;

    const nextQuestionHandler = ()=>{
        dispatch(getAnswer(finalAnswer));
        setDisable(true);
        if(count >= quiz.length - 1){
            setShowmodal(true);
            setCount((prev)=>prev);
        } else {
            setCount((prev)=>prev + 1);
        }
    };

    const onclickHandler = (el) => {
        getAnswerHandler(el.answer, el.correct, el.id);
        setDisable(false);
    };

    const getAnswerHandler = (answer, correct, id) => {
        const Answer = {
          answer: answer,
          isCorrect: correct,
          id: id,
        };
        setFinalanswer(Answer);
    };
   
    return (
        <>
          <Container>
            <div className="contain">
                <div>
                    {showModal ? (<Result name={name}></Result>
                    ):(
                        <div className="quizcard-container">
                            <div className="quizcard-title">
                                <h1>{title}</h1>
                            </div>
                            <h2>
                                Q.{count + 1} {question}
                            </h2>
                            <div>
                                {answers.map((el,i)=>(
                                    <div className="quizcard-option" onClick={()=>onclickHandler(el)}
                                     style={{background:`${finalAnswer.id === el.id ? "lightgreen":"cornsilk"}`,}}
                                     key={i}
                                    >
                                     <p>{el.answer}</p>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div>
                                    <h3>
                                        Question {count + 1}/{quiz.length}
                                    </h3>
                                </div>
                                <div className="next-question">
                                    {disable ? (count + 1 === quiz.length ?
                                        (<Button variant="outlined" color="error" sx={{":hover":{bgcolor:"rgb(206,78,78)", color:"white"}}}>
                                            Submit
                                        </Button>):(
                                        <Button variant="outlined" color="error" sx={{":hover":{bgcolor:"rgb(206,78,78)", color:"white"}}}>
                                            Next Question
                                        </Button>
                                        )
                                    ):(
                                        count + 1 === quiz.length ?
                                        (<Button variant="outlined" color="error" sx={{":hover":{bgcolor:"rgb(206,78,78)", color:"white"}}} onClick={nextQuestionHandler}>
                                            Submit
                                        </Button>):(
                                        <Button variant="outlined" color="error" sx={{":hover":{bgcolor:"rgb(206,78,78)", color:"white"}}} onClick={nextQuestionHandler}>
                                            Next Question
                                        </Button>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
          </Container>
        </>
    )
}