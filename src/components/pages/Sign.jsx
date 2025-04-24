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
      <>
         <div className="p-2 m-2 text-slate-200">
            <ImageSign />

            <div className="">
               {errorMessage && <Typography className='text-red-700 mb-2'>{errorMessage}</Typography>}

               <div className="grid items-center m-2">
                  <input
                     className="rounded-sm p-2 text-slate-700 outline-none"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     type="text" placeholder="Email" required />

                  <input
                     className="rounded-sm outline-none w-68 mt-2 p-2 text-slate-600"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     type="password" placeholder="Password" required />

               </div>
               <div className='grid'>
                  <button className=""
                     onClick={handleSign}
                     type="submit">Sign In</button>

                  <button className="" onClick={handleSignWithGoogle}>Continue with Google</button>


                  <button className="" onClick={handleLogout}>
                     <a href="/home">
                        Log out
                     </a>
                  </button>


                  <p className='text-center  font-semibold text-[17px]'>Do not have an account? <a href="/signup"
                     className='text-blue-800'>Sign Up</a></p>

               </div>
            </div>

         </div>
      </>
   )
}
