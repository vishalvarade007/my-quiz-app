import { Box, Dialog, DialogActions, DialogTitle } from "@mui/material"
import { useState } from "react"
import { MCQSingle } from "./MCQ-Single";
import Button from "@mui/material/Button";



export let AddQuiz = ()=>{
    const [popup,setPopup] = useState(true);
    const popupFunc = ()=>{
        setPopup(false);
    }
    return (
        <>
         <Box className='Box1'>
           {popup ? (
            <Box className="Box2">
                <Dialog open={true} aria-labelledby="responsive-dialogue-title">
                    <DialogTitle id="responsive-dialogue-title" sx={{bgcolor:"lightblue"}}>{"Select Question Type"}</DialogTitle>
                    <DialogActions sx={{bgcolor:"lightblue",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <Button sx={{fontSize:"16px",marginBottom:"10px",":hover":{color:'white',bgcolor:"rgb(206,78,78)"}}} onClick={popupFunc} variant="outlined" color="inherit">
                            MCQ<p style={{fontSize:"10px"}}>(Single Correct)</p>
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
           ):(<MCQSingle/>)}
         </Box>
        </>
    )
}