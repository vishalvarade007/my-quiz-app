import React,{useState} from "react";
import {Button,Container} from "@mui/material";
import "./MyQuizStyle.css";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {deleteQuiz,toggleActive} from "../../Redux/Actions/Actions";
import Switch from "@mui/material/Switch";


export let MyQuiz = ()=>{
    const dispatch = useDispatch();
    const [modal,setModal] = useState(false);
    const [deleteId,setDeleteId] =useState();

    const handleDelete = (id)=>{
        setDeleteId(id);
        setModal(true);
    }

    const deleteYes = ()=>{
        dispatch(deleteQuiz(deleteId));
        setModal(false);
    }

    const toggleHandler = (id)=>{
        dispatch(toggleActive(id));
    }

    const Quiz = useSelector((state)=>state.reducer.quiz);
    return (
        <>
         <Container>
            <div className="head">
                <h1>My Quizes</h1>
                <Button component={Link} to="/newquiz" variant="outlined" color="error" sx={{":hover":{bgcolor:"rgb(206,78,78)",color:"white"}}}>
                    Create New Quiz
                </Button>
            </div>
            {modal === true ? (
                <div className="deleteouter">
                    <div className="deletemodal">
                        <h2>Do you really want to delete this..?</h2>
                        <div className="deleteBtn">
                            <Button variant="outlined" color="error" sx={{":hover":{bgcolor:"rgb(206,78,78)",color:"white"},height:"30px",margin:"10px 10px 0px 10px"}} onClick={()=>deleteYes()}>
                                Yes
                            </Button>
                            <Button variant="outlined" color="error" sx={{":hover":{bgcolor:"rgb(206,78,78)",color:"white"},height:"30px",margin:"10px 10px 0px 10px"}} onClick={()=>setModal(false)}>
                                No
                            </Button>
                        </div>
                    </div>
                </div>
            ):(
                <div className="all-quiz-container">
                    {Quiz.length === 0 ? (
                        <p style={{color:"red",height:"150px"}}>Currently there are no quizes !</p>
                    ):(
                        <div className="table">
                            <table>
                                <thead>
                                    <tr className="table-sno tablehead">
                                      <th>Quiz No</th>
                                      <th>Title</th>
                                      <th>Status</th>
                                      <th>Created on</th>
                                      <th>Actions</th>
                                    </tr>
                                </thead>
                                {Quiz.map((el,i)=>(
                                    <tbody key={i}>
                                        <tr className="table-sno">
                                            <td>{i + 1}</td>
                                            <td className="Title">{el.title}</td>
                                            <td>
                                                <div className="switch">
                                                    {el.isActive ? (
                                                        <span className="active">Active</span>
                                                    ):(
                                                        <span className="active">Inactive</span>
                                                    )}
                                                    <Switch color="success" defaultChecked onClick={()=>toggleHandler(el.id)}></Switch>
                                                </div>
                                            </td>
                                            <td className="time">
                                                {el.createdOn.getDate()}/{el.createdOn.getMonth() + 1}/{el.createdOn.getFullYear()}
                                                <br/>
                                                {el.createdOn.getHours()}:{el.createdOn.getMinutes()}
                                            </td>
                                            <td>
                                                <Button className="deleteBtn" onClick={()=>handleDelete(el.id)}>
                                                   <DeleteOutlineOutlinedIcon sx={{color:"darkred"}}></DeleteOutlineOutlinedIcon>
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                    )}
                </div>
            )}
         </Container>
        </>
    )
}