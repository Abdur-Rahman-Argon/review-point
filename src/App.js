import "./App.css";
import { Route, Routes } from "react-router-dom";
import Headers from "./components/Headers/Headers";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";
import Dashboard from "./components/Dashboard/Dashboard";
import Blogs from "./components/Blogs/Blogs";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
