import { Home } from "./components/Home/Home";
import { Route,Routes } from "react-router-dom";
import { Playquiz } from "./pages/Playquiz/Playquiz";
import { Myquiz } from "./pages/Myquizes/Myquiz";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/playquiz" element={<Playquiz/>}/>
          <Route path="/myquizes" element={<Myquiz/>}/>
        </Routes>
    </div>
  );
}

export default App;
