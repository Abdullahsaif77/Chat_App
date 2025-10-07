import React from "react";

const UserContext = React.createContext({
    username:"",
    selected:"",
    setusername:()=>{},
    setselected:()=>{}
})

export default  UserContext