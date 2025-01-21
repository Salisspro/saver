
import { useEffect } from 'react'
import { db } from '../configs/fireBase'
import { collection, deleteDoc, doc, getDocs, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import { TextField, Button, Typography } from '@mui/material'
// import IMG1 from '../fireStore/icons/vecteezy_hand-painted-rejected-sign_22000017.png'
import IMG2 from '../fireStore/icons/vecteezy_hand-painted-rejected-sign_22056366.png'
import IMG3 from '../fireStore/icons/3d-green-checklist-with-checkmark-symbol-png.png'
import Sign from '../pages/Sign'

export default function FireStore() {
   const [dataState, setDataState] = useState([])
   const [loading, setLoading] = useState(false)

   // const [addDate, setAddDate] = useState(0)
   const [newName, setNewName] = useState('')
   const [newCity, setNewCity] = useState('')
   const [newStory, setNewStory] = useState('')

   // error messages
   const [errorMessage, setErrorMessage] = useState(false)


   const collectionRef = collection(db, 'saver')

   const handleData = async () => {
      setLoading(false)
      try {
         const data = await getDocs(collectionRef)
         const dataRef = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
         }))
         setDataState(dataRef)
         // setLoading(!loading)
         // console.log(dataRef);
      } catch (err) {
         console.error('err ', err);
      }
   }
   useEffect(() => {
      handleData()
   })


   const handleDelete = async (id) => {
      const collectionRef = doc(db, 'saver', id)
      await deleteDoc(collectionRef)
   }

   const handleAdd = async () => {
      try {
         if(newName.length === '' || newCity.length === "") {
            setLoading(false)
         }
         await addDoc(collectionRef, {
            name: newName,
            city: newCity,
            story: newStory,
            date: new Date().getTime() + '-' + new Date(),

         })
      } catch (err) {
         console.error('err ', err);
         setErrorMessage(true)
      }
      setNewName('')
      setNewCity('')
      setNewStory('')
      handleData()
   }
   setTimeout(() => {
      setErrorMessage(false)
   }, 10000)

   return (
      <div className='bg-cover container mt-[5rem] grid px-5 max-w-[100%] mx-auto p-10 border-t-[3px] border-slate-200'>
         {dataState.length === 0 &&
            <Typography
               variant='body2'
               className='text-center text-slate-200'>
               No data found. Add some data in the form above.
            </Typography>}
         {
            loading && <Typography variant='h2'>Loading...</Typography>
         }

         <div className='grid md:grid-cols-2 items-center space-x-10'>
            <div className='grid'>

               <h1 className='mb-5 text-2xl font-mono text-slate-200'>Data State: {dataState.length}</h1>

               {
                  errorMessage && (
                     <div className='text-red-500 uppercase mb-2 animate-pulse'>
                        <p >
                           {errorMessage}
                           Please make sure you register to the web
                        </p>
                     </div>
                  )
               }

               <TextField
                  autoCorrect=''
                  label='Add Name'
                  variant='filled'
                  onChange={(e) => setNewName(e.target.value)}
                  value={newName}

               />

               <TextField
                  sx={{ mt: 5, mb: 5, border: 'none' }}
                  label='City Name'
                  variant='filled'
                  value={newCity}
                  onChange={(e) => setNewCity(e.target.value)}

               />


               <textarea
                  value={newStory}
                  onChange={e => setNewStory(e.target.value)}
                  className='p-2 mb-5 font-mono'
                  placeholder='Add Your Story' />

               <Button
                  onClick={handleAdd}
                  color='info'
                  sx={{ px: 5, mb: 5, p: 2, border: 'none' }}
                  variant='contained'>Add to Saver</Button>

            </div>

            <div className='m-0'>
               <Typography
                  className='invisible md:visible'
                  variant='body2'
                  sx={{ color: 'white' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, odio. Nisi, nobis? Ducimus maxime asperiores ipsam, quis consectetur et corporis amet eos deserunt quo? Facere animi accusantium eos cumque veniam.
                  {/* {dataState.length === 0 && 'No Data Found'} */}
               </Typography>
            </div>
         </div>


         <div className=''>

            {
               dataState.map((item) => (
                  <div
                     className='grid font-mono my-5 mx-5 border-2 border-slate-900 bg-white rounded-md p-5 cursor-pointer hover:bg-slate-200 transition-all duration-300 items-center md:grid-cols-2 md:p-[7rem] md:text-[20px]'
                     key={item}>

                     <div>
                        <Typography
                           className='uppercase'

                           variant='body1'>
                           NAME: {item.name}
                        </Typography>

                        <Typography
                           className='uppercase'
                           variant='body1'> CITY: {item.city}</Typography>
                        {/* <del>User ID: {item.id}</del> */}

                     </div>
                     <div>
                        <p style={{fontFamily: 'cursive'}}>
                           Story: {item.story}
                        </p>
                     </div>

                     <div>

                        <p className='m-5 '>{item.date}</p>


                        <p>
                           {
                              item.name === '' ? (
                                 <p className='text-red-500 flex items-center my-2 gap-2 animate-pulse
                                    '>
                                    Name is not Added
                                    <img
                                       className='w-3 h-3'
                                       src={IMG2} alt="" />
                                 </p>
                              ) : (
                                 <p className='flex  items-center gap-3 text-green-500'>
                                    Name is Added
                                    <img
                                       className='w-4 h-4'
                                       src={IMG3} alt="" />
                                 </p>
                              )
                           }

                        </p>
                     </div>
                     <div
                        onClick={() => handleDelete(item.id)}
                        className='cancel text-center '>
                        DELETE
                     </div>

                  </div>
               ))
            }
            {!dataState.length && <div>
               <Sign />
            </div>}


         </div>

         <footer className='cursor-pointer text-center mt-[3rem] font-mono text-blue-200'>
            <p>
               <span>Powered by: </span>
               <a href='https://firebase.google.com/' target='_blank'>Firebase</a> |{' '}
               <a href='https://reactjs.org/' target='_blank'>React</a> |{' '}
               <a href='https://tailwindcss.com/' target='_blank'>Tailwind CSS</a>
            </p>
            <div>
               <p className='text-slate-200'>Version: 1.0.0</p>
               <p>
                  Designed and developed by{' '}

                  <a
                     className='text-blue-400 underline' href='https://github.com/Salisspro/saver' target='_blank'>Salisu Yushau Sulaiman</a> {' '}
                  &amp;{' '}
                  <a
                     className='text-blue-400 underline'
                     href='https://github.com/codewithkin' target='_blank'>Kin Leon Zinzombe</a> <br />
                  <span className='text-[20px]'>©
                     <span>
                        copyright
                     </span>
                  </span> {' '}
                  {new Date().getFullYear()}
               </p>
            </div>
         </footer>
      </div>
   )
}
