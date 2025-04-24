import { useState } from "react";
import ImageSign from "./ImageSign";
import { auth } from "../configs/fireBase";
import { provider } from "../configs/fireBase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


import { Typography } from '@mui/material'


export default function Sign() {
   // const {currentUser} = getAuth()

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState("")
   //error message
   const [errorMessage, setErrorMessage] = useState(false)
   //crear error message

   const handleSign = async () => {
      try {
         await createUserWithEmailAndPassword(auth, email, password)
      } catch (err) {
         console.log(err)
         setErrorMessage(err.message)
      }
      setEmail("")
      setPassword("")
   }

   const handleSignWithGoogle = async () => {
      try {
         await signInWithPopup(auth, provider)
      } catch (err) {
         console.error("", err);
      }
   }

   const handleLogout = async () => {
      try {
         await signOut(auth)
      } catch (err) {
         console.error("", err);
      }
      setEmail("")
      setPassword("")
      alert('successfully logged out')
   }


   setTimeout(() => {
      setErrorMessage(false)
   }, 5000)

   return (
      <div className="grid md:grid-cols-2 form grid-cols-1 items-center justify-center border-slate-200 border-l-[3px]">
         <ImageSign />

         <div className="">
            {errorMessage && <Typography className='text-red-700 mb-2'>{errorMessage}</Typography>}

               {/* <p>Email: {currentUser.email}</p> */}
            <div className="grid items-center">
               <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text" placeholder="Email" required />
                  
                  <input
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     type="password" placeholder="Password" required />

            </div>
            <div className='grid'>
               <button
                  onClick={handleSign}
                  type="submit">Sign In</button>

               <button onClick={handleSignWithGoogle}>Continue with Google</button>


               <button onClick={handleLogout}>
                  <a href="/home">
                     Log out
                  </a>
               </button>


               <p className='text-center text-emerald-800 font-semibold text-[17px]'>Do not have an account? <a href="/signup"
                  className='text-blue-800'>Sign Up</a></p>

            </div>
         </div>

      </div>
   )
}
