import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import UserContext from './context'

const Login = () => {
   const navigate = useNavigate()

   const {username,setusername} = useContext(UserContext)
   const {selected,setselected} = useContext(UserContext)

   const handleUsername = (e)=>{
	setusername(e.target.value)
   }
   const handleSelected = (e)=>{
	setselected(e.target.value)
   }

   const HandleInput = (e)=>{
    e.preventDefault()
	console.log(username,selected)
	return navigate("./chatbox")
   }


  return (
    <div>
      <div className="join-container">
			<header className="join-header">
				<h1><i className="fas fa-smile"></i> ChatCord</h1>
			</header>
			<main className="join-main">
				<form  onSubmit={HandleInput}>
					<div className="form-control">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Enter username..."
							required
							value={username}
							onChange={handleUsername}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="room">Room</label>
						<select name="room" id="room" value={selected} onChange={handleSelected}>
							<option value="Empty" disabled defaultValue>Select a Room</option>
							<option value="JavaScript">JavaScript</option>
							<option value="Python">Python</option>
							<option value="PHP">PHP</option>
							<option value="C#">C#</option>
							<option value="Ruby">Ruby</option>
							<option value="Java">Java</option>
						</select>
					</div>
					<button  className="btn">Join Chat</button>
				</form>
			</main>
		</div>
    </div>
  )
}

export default Login
