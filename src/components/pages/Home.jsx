
import { Button, Typography } from '@mui/material'
import FireStore from '../fireStore/FireStore'
import IMG from '../icon/vecteezy_businessman-on-rocket-launch-from-smartphone-concept-of_19924429.png'

export default function Home() {
  return (
    <>
        <Button
        sx={{mb:10}}
         variant="contained" color="primary" href="/Profile">
        Profile
      </Button>
      <div className=' mx-5  grid items-center justify-center flex-col md:grid-cols-2 mb-[3rem]'>

        <img
          className='w-[360px] h-[300px] md:w-[400px] md:h-auto md:rounded-none  mx-auto mb-10 '
          src={IMG} alt="" />
        <div className='bg-[#0353a9] p-5  text-slate-300 md:border-l-[3px] border-t-[3px] border-slate-400'>
          <Typography
          sx={{mb: 2}}
         variant='h2'>Welcome to Saver!</Typography>

          <p className='font-mono'>
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
