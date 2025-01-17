
import { useEffect } from 'react'
import { db } from '../configs/fireBase'
import { collection, deleteDoc, doc, getDocs, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import CANCEL from '../icon/red-rejection-icon-render-3d-rejected-sign-check-mark-cross-sign-can-be-used-as-symbols-of-wrong-close-deny-etc-created-for-mobile-web-decor-application-illustration-with-clipping-path-png.png'
import { TextField, Button, Typography } from '@mui/material'

export default function FireStore() {
   const [dataState, setDataState] = useState([])

   // const [addDate, setAddDate] = useState(0)
   const [newName, setNewName] = useState('')
   const [newCity, setNewCity] = useState('')

   // const [name, nameState] = useState()


   const collectionRef = collection(db, 'saver')

   const handleData = async () => {
      try {
         const data = await getDocs(collectionRef)
         const dataRef = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
         }))
         setDataState(dataRef)
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
         await addDoc(collectionRef, {

            name: newName,
            city: newCity,
            date: new Date().getTime() + '-' + new Date(),

         })
      } catch (err) {
         console.error('err ', err);
      }
      setNewName('')
      setNewCity('')
      handleData()
   }

   return (
      <div className='bg-cover container mt-[5rem] grid px-3 max-w-[100%] mx-auto p-10 border-t-[1px] border-orange-400'>

         <div className='grid '>

            <h1 className='mb-5 text-2xl font-mono text-slate-200'>Data State: {dataState.length}</h1>
            {/* <h1>Add Data: {addDate}</h1> */}
            <TextField
               label='Add Name'
               variant='standard'
               onChange={(e) => setNewName(e.target.value)}
               value={newName}

            />

            <TextField
               sx={{ mt: 5, mb: 5, border: 'none' }}
               label='City Name'
               variant='standard'
               value={newCity}
               onChange={(e) => setNewCity(e.target.value)}

            />

            <Button
               onClick={handleAdd}
               color='info'
               sx={{ px: 5, mb: 5, p: 2, border: 'none' }}
               variant='contained'>Add to Saver</Button>

         </div>
         <div className='flex items-center flex-wrap md:grid-cols-3 '>

            {
               dataState.map((item) => (
                  <div
                     className='grid md:grid-cols-3 font-mono my-5 mx-5 border-2 border-slate-900 bg-white rounded-md p-5 cursor-pointer hover:bg-slate-200 transition-all duration-300 '
                     key={item}>

                        <div>
                           <Typography

                              variant='body1'>
                              NAME: {item.name}
                           </Typography>

                           <Typography variant='body1'> CITY: {item.city}</Typography>
                           <del>User ID: {item.id}</del>

                        </div>


                        <div>

                           <p className='m-5 '>{item.date}</p>
                           <p>
                              {
                                 item.name === '' ? (
                                    <p className='text-red-500
                                    '>
                                       Name is not Added
                                    </p>
                                 ) : (
                                    <p className='text-green-500'>
                                       Name is Added
                                    </p>
                                 )
                              }

                           </p>
                        </div>
                        <div>
                           <img
                              className='
                              w-[30px] h-[30px]
                              '
                              onClick={() => handleDelete(item.id)}
                              src={CANCEL} alt="" />
                        </div>

                  </div>
               ))


            }
            {dataState.length === 0 &&
               <div className='text-center text-slate-200'>
                  No data found. Add some data in the form above.
               </div>}
         </div>

         {/* <div className=''>
            {dataState.map((item) => (
               <div key={item.id} >
                  <div className=' data flex items-center  text-slate-900 text-wrap '>

                     <span className='ml-5 text-[17px]'>NANE: {item.name}</span>

                     <span className='ml-5 text-[17px]'>CITY: {item.city}</span>
                     <p className='m-5 '>{item.date}</p>

                     <img
                        className='
                        w-[30px] h-[30px]
                        '
                        onClick={() => handleDelete(item.id)}
                        src={CANCEL} alt="" />
                  </div>

               </div>
            ))}
         </div> */}
         <footer className='cursor-pointer text-center mt-[3rem] font-mono text-blue-200'>
            <p>
               <span className='text-red-700'>Powered by: </span>
               <a href='https://firebase.google.com/' target='_blank'>Firebase</a> |{' '}
               <a href='https://reactjs.org/' target='_blank'>React</a> |{' '}
               <a href='https://tailwindcss.com/' target='_blank'>Tailwind CSS</a>
            </p>
            <div>
               <p className='text-slate-200'>Version: 1.0.0</p>
               <p>
                  Designed and developed by{' '}

                  <a
                     className='text-orange-400 underline' href='' target='_blank'>Salisu Yushau Sulaiman</a> {' '}
                  &amp;{' '}
                  <a
                     className='text-orange-500 underline'
                     href='https://github.com/codewithkin' target='_blank'>Kin Leon Zinzombe</a> {' '}
                  {' '}
                  <span>Copyright ©</span> {' '}
                  <a href='https://githu' target='_blank'>GitHub</a> {' '}
                  {' '}
                  {new Date().getFullYear()}
               </p>
            </div>
         </footer>
      </div>
   )
}
