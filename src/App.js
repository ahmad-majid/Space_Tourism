import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
//components
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
       <SideBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Destination"
            element={<Destination />}
          />
          <Route path="/Crew" element={<Crew />} />
          <Route
            path="/Technology"
            element={<Technology />}
          />
       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
