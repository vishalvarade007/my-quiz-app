import "./MCQSingleStyle.css";
import { useEffect, useRef, useState } from "react";
import {Button, Container} from "@mui/material";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { addQuiz } from "../../Redux/Actions/Actions";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export let MCQSingle = ()=>{
    const titleRef = useRef();
    const descriptionRef = useRef();
    const questionRef = useRef();
    const answerRef = useRef();
    const CorrectAnswerRef = useRef();

    const [count,setCount] = useState(1);
    const [added,setAdded] = useState(false);
    const [answerDone,setAnswerDone] = useState(false);
    const [answers,setAnswers] = useState([]);
    const [question,setQuestion] = useState([]);
    const [isChecked,setIsChecked] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        const addedTimeout = setTimeout(() => {
            if(added){
                setAdded(false);
            }
        }, 2000);

        const answerDoneTimeout = setTimeout(() => {
            if(answerDone){
                setAnswerDone(false);
            }
        }, 2000);

        return ()=>{
            clearTimeout(addedTimeout);
            clearTimeout(answerDoneTimeout);
        }
    },[added,answerDone]);
    //this func will add the options:
    const addOptionHandler = (event)=>{
         event.preventDefault();
         if(answerRef.current.value === ""){
            return;
         }
         if(answers.length >= 4){
            return;
         }else {
            const Answers = {
                answer:answerRef.current.value,
                correct:CorrectAnswerRef.current.checked,
                id:Math.random()
            };
            setAnswers((prev) => [...prev,Answers]);
            answerRef.current.value = "";
            CorrectAnswerRef.current.checked = false;
         };
        }
         //this func will add questions:
         const addQuestionHandler = (event)=>{
              event.preventDefault();
              if(questionRef.current.value === ""){
                return alert("Enter Question!");
              }
              if(questionRef.current.value < 10){
                return alert("Enter at least 10 characters in the question!");
              }
              if(answers.length === 0){
                return alert("Enter Options!");
              }
              if(answers.length >= 2){
                const Question = {
                    question:questionRef.current.value,
                    answers:answers,
                    id:count
                };
                setCount(count + 1);
                setAdded(true);
                setQuestion((prev)=>[...prev,Question]);
                setAnswers([]);
                questionRef.current.value = "";
              } else {
                setAnswerDone(true);
              }
         };
         //this func will submit the task:
         const onSaveHandler = (event)=>{
            event.preventDefault();
            if(titleRef.current.value === "" || descriptionRef.current.value === ""){
                return alert("Enter Title and Description!");
            }
            if(question.length === 0){
                return alert("Add question!");
            }
            const Quiz = {
                description:descriptionRef.current.value,
                question:question,
                title:titleRef.current.value,
                id:Math.random(),
                createdOn:new Date(),
                isActive:true
            };
            dispatch(addQuiz(Quiz));
            setCount(1);
            titleRef.current.value = "";
            descriptionRef.current.value = "";
            navigate("/playquiz");
         };
         //this fun will delete the option:
         const deleteHandler = (id)=>{
              const newAnswers = answers.filter((element)=>element.id !== id);
              setAnswers(newAnswers);
         };
         const handleCheckboxChange = (event) => {
            setIsChecked(event.target.checked);
         };
         const ChangeStyle = ()=>{
            return isChecked ? {color:"green"} : {color:"black"};
         };
    return (
        
         <Container>
            <div className="heading">
                <h1>Create New Quiz</h1>
            </div>
            <div className="quizForm">
                <form action="" onSubmit={onSaveHandler}>
                   <div className="upper">
                      <input type="text" placeholder="title" name="title" className="quizform-title" maxLength={30} minLength={10} ref={titleRef} required></input>
                      <input type="text" placeholder="Add Description" className="description" required ref={descriptionRef}></input>
                   </div>
                   <div className="QA">
                    <label htmlFor="question">Question {count}</label>
                    <input type="text" className="question" maxLength={200} placeholder="Enter Your Question" ref={questionRef} required></input>
                    {added && <p className="QA-P-G">Your Question is added!</p>}
                    {answerDone && <p className="QA-P-R">Add at least 2 options!</p>}
                   </div>
                   <div className="answerSection">
                     <input type="text" className="answer" placeholder="Enter Options" ref={answerRef} ></input>
                      <div className="checkBox">
                         <input type="checkbox" id="check" className="checkBox-2" checked={isChecked} onChange={handleCheckboxChange} ref={CorrectAnswerRef}></input>
                         <p className="checkBox-p" style={ChangeStyle()}>Correct Answer</p>
                         <Button variant="outlined" color="error" onClick={addOptionHandler} sx={{height:"40px",width:"160px",marginLeft:"15px","@media(max-width:600px)":{width:"100px",margin:"2px",padding:"2px"},":hover":{bgcolor:"rgb(206,78,78)",color:"white"}}}><ControlPointIcon sx={{height:"30px",marginRight:"8px",display: { xs: "none", sm: "block" },}}/>Add Option</Button>
                      </div>
                   </div>
                   <div className="viewAnswer">
                    {answers.map((el,i)=> {
                        return (
                            <div className="enter-option" key={i} style={el.correct ? {background:"#32a84e"}:{background:"#D1D1D1"}}>
                               <p style={{overflowWrap:"break-word",width:"100px"}}>{el.answer}</p>
                               <Button size="small" onClick={()=>deleteHandler(el.id)}><DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></Button>
                            </div>
                        );
                    })}
                   </div>
                   <div className="questionBtn">
                    <Button variant="outlined" color="error" onClick={addQuestionHandler} sx={{":hover":{bgcolor:"rgb(206,78,78)",color:"white"}}}>
                        {" "}
                        <ControlPointIcon sx={{height:"30px", marginRight:"8px"}}></ControlPointIcon>
                        Add Question
                    </Button>
                   </div>
                   <hr/>
                   <Button onClick={onSaveHandler} variant="outlined" color="error" sx={{":hover":{bgcolor:"rgb(206,78,78)",color:"white"}}}>
                    Submit
                   </Button>
                </form>
            </div>
         </Container>
        
    )
}