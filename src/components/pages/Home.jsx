
import { Button, Typography } from '@mui/material'
import FireStore from '../fireStore/FireStore'
import IMG from '../icon/vecteezy_businessman-on-rocket-launch-from-smartphone-concept-of_19924429.png'

export default function Home() {
  return (
    <>
        <Button
        sx={{mb:10}}
         variant="contained" color="primary" href="/Sign">
        Sign Up
      </Button>
      <div className=' mx-5  grid items-center justify-center flex-col md:grid-cols-2 mb-[3rem]'>

        <img
          className='w-[360px] h-[300px] md:w-[400px] md:h-auto md:rounded-none  mx-auto mb-10 '
          src={IMG} alt="" />
        <div className='bg-[#0265cf] p-5 rounded-md text-slate-300 md:border-l-[1px] border-t-[1px] border-orange-400'>
          <Typography 
          sx={{mb: 2}}
         variant='h2'>Welcome to Saver!</Typography>
          <Typography 
          className='text-amber-500 text-2xl'
          sx={{ fontWeight: 'bold', fontSize: 20, }}
          variant='body2'>
            Please make sure to register...
          </Typography>
          <Typography variant='body1'>
          Saver is a simple, secure, and convenient way to save documents. With our app, you can easily track your documents, set reminders, and even see a visual representation of your progress.
          </Typography>
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
