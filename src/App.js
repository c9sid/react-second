import { Box} from "@mui/material";
import Adduser from "./components/Adduser";
import AllUsers from "./components/AllUsers";
import HackerSid from "./components/HackerSid";
import Navbar1 from "./components/Navbar1";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Box>
      <Navbar1 />
      <Routes>
        <Route path="/" element={ <HackerSid /> } />
        <Route path="/Adduser" element={ <Adduser /> } />
        <Route path="/AllUsers" element={ <AllUsers /> } />
      </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;
