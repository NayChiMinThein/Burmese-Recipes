import { Route, Routes } from "react-router-dom";
import Items from "./pages/Items";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Items/>}/>
        <Route path="/details/:recipeId" element={<Details/>}/>
      </Routes>
    </>
  )
}