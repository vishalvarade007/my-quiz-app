import { Home } from "./components/Home/Home";
import {Navbar} from "./components/Navbar/Navbar"
import { Route,Routes } from "react-router-dom";
import { PlayQuiz } from "./pages/Play_Quiz/Playquiz";
import { MyQuiz } from "./pages/My_Quiz/Myquiz";
import { MCQSingle } from "./pages/Create_New_Quiz/MCQ-Single";
import { AddQuiz } from "./pages/Create_New_Quiz/New_quiz";
import { PlayQuizCard } from "./pages/Play_Quiz/PlayQuizCard";
import { PageNotFound } from "./components/Home/PageNotFound";


function App() {
  return (
    <div>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/quiz" element={<MyQuiz/>}/>
          <Route path="/newquiz" element={<AddQuiz/>}/>
          <Route path="/playquiz" element={<PlayQuiz/>}/>
          <Route path="/newquiz/MCQSingle" element={<MCQSingle/>}/>
          <Route path="/quizcard" element={<PlayQuizCard/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
