import { Route, Routes } from "react-router-dom";
import Items from "./pages/Items";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  return (
    <>
      {loading ? <Preloader/> : 
        <>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Items/>}/>
            <Route path="/details/:recipeId" element={<Details/>}/>
          </Routes>
        </>
      }
    </>
  )
}