import { Typography } from "@mui/material"

import { getAuth, signOut } from "firebase/auth"
import { auth } from "../configs/fireBase";

export default function Profile() {
   const handleLogout = async () => {
      try {
         await signOut(auth)
      } catch (err) {
         console.error('err ', err);
      }
   }



   const { currentUser } = getAuth()
   return (
      <div className='bg-slate-200 '>
         <Typography variant="h2" className="">Profile</Typography>
         <p>This is the profile page</p>
         {currentUser && <p>Email: {currentUser.email}</p>}
         <hr />

         <div className="">

            <button>Edit Profile</button>
            <button>Delete Account</button>
            <button onClick={handleLogout}>Logout</button>
         </div>
      </div>
   )
}
