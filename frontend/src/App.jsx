import Login from "./components/Login"
import "../public/style.css"
import Chatbox from "./components/Chatbox"
import UserContext from "./components/context"
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom"
import { useState } from "react"

function App() {
  const [username,setusername] = useState("")
  const [selected, setselected] = useState("JavaScript"); 

  return (
    <>
    <Router>
    <UserContext.Provider value={{username:username,
                                  setusername:setusername,
                                  selected:selected,
                                  setselected: setselected,}}>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/chatbox" element={<Chatbox/>}/>  
      </Routes>
      </UserContext.Provider>
    </Router>
    </>
  )
}

export default App
