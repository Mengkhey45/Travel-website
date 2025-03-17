
import './assets/index.css'

import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Popular from "./pages/Popular"
import Explore from "./pages/Explore"
import Join from "./pages/Join"
import Foot from "./components/Foot"
import Scoll from "./components/Scoll"
function App() {


  return (
    <>
    <Navbar/>
    <Home/> 
    <About/>
    <Popular/>
    <Explore/>
    <Join/>
    <Foot/>
    <Scoll/>
  
    </>
  )
}

export default App