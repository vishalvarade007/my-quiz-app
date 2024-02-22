import "./HomeStyle.css";
import styled from "@emotion/styled";
import { Box, Paper, Stack } from "@mui/material";
import {Link} from "react-router-dom";
import NewQuiz from "../Images/newquiz.jpg";
import PlayQuiz from "../Images/playquiz.jpg";
import MyQuizes from "../Images/myquizes.jpg";

export let Home = ()=>{
    const Item = styled(Paper)(({theme})=>({
        height: "350px",
        width: "30vw",
        display: "flex"
    })

    );
    return (
        <>
        <Box className="home-box1" sx={{ p: 2 }}>
            <Stack direction="row" className="stack">
             <Item className="content-box" sx={{borderRadius:"15px",backgroundImage:`url(${NewQuiz})`, backgroundSize: "cover",backgroundPosition: "center","@media(max-width:600px)": { height: "250px", width: "300px"}}}><Link to="/newquiz">Create New Quiz</Link></Item>
             <Item className="content-box" sx={{borderRadius:"15px",backgroundImage:`url(${MyQuizes})`,backgroundSize:"cover",backgroundPosition:"center","@media(max-width:600px)": { height: "250px", width: "300px"}}}><Link to="/quiz">My Quizes</Link></Item>
             <Item className="content-box" sx={{borderRadius:"15px",backgroundImage:`url(${PlayQuiz})`,backgroundSize:"cover",backgroundPosition:"center","@media(max-width:600px)": { height: "250px", width: "300px"}}}><Link to="/playquiz">Play Quiz</Link></Item>
            </Stack>
        </Box>
        </>
    )
}