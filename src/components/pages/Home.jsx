
import { Button, Typography } from '@mui/material'
import FireStore from '../fireStore/FireStore'
import IMG from '../icon/vecteezy_businessman-on-rocket-launch-from-smartphone-concept-of_19924429.png'

export default function Home() {
  return (
    <>
        <Button
        sx={{}}
         variant="contained" color="primary" href="/Profile">
        Profile
      </Button>
      <div className='mt-5 mx-5  grid items-center justify-center flex-col md:grid-cols-2 mb-[3rem]'>

        <img
          className='md:w-[400px] md:h-auto md:rounded-none  mx-auto mb-10 '
          src={IMG} alt="" />
        <div className='p-3 bg-[#0353a9]  text-slate-300 md:border-l-[3px] border-t-[3px] border-slate-400'>
          <Typography
          sx={{mb: 2}}
         variant='h5' className=''>Welcome to Saver!</Typography>

          <p className=''>
          Saver is a simple, secure, and convenient way to save documents. With our app, you can easily track your documents, set reminders, and even see a visual representation of your progress.
          </p>
          <a href="Sign">
            <Button
            sx={{p: 2, mt: 2}}
            variant='contained'> Sign In To Get Sarted</Button>
          </a>
        </div>
      </div>
        <FireStore />
    </>
  )
}
