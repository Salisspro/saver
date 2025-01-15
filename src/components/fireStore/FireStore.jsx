
import { useEffect } from 'react'
import { db } from '../configs/fireBase'
import { collection, deleteDoc, doc, getDocs, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import CANCEL from '../icon/red-rejection-icon-render-3d-rejected-sign-check-mark-cross-sign-can-be-used-as-symbols-of-wrong-close-deny-etc-created-for-mobile-web-decor-application-illustration-with-clipping-path-png.png'

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
         console.log(dataRef);
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
      <div className='container mt-[5rem] grid px-3 max-w-[100%] mx-auto p-10 border-t-[3px]'>

         <div className='grid'>

            <h1 className='mb-5 text-2xl font-mono text-slate-200'>Data State: {dataState.length}</h1>
            {/* <h1>Add Data: {addDate}</h1> */}

            <input
               className='addInput'
               value={newName}
               onChange={(e) => setNewName(e.target.value)}
               type="text" name="" id="" placeholder='Your User Name' />

            <input
               className='addInput'
               value={newCity}
               onChange={(e) => setNewCity(e.target.value)}
               type="text" name="" id="" placeholder='Your City Name' />
            {/* <input type="date" name="" id="" /> */}
            <button
               className='text-slate-100 bg-slate-700 p-4'
               onClick={handleAdd}>Add</button>
         </div>

         <div className=''>
            {dataState.map((item) => (
               <div key={item.id} className='font-mono'>
                  <div className='data flex items-center  text-slate-900 text-wrap '>

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
         </div>
         <footer className='cursor-pointer text-center mt-[3rem] font-mono text-slate-100'>
            <p>
               <span className='text-slate-700'>Powered by: </span>
               <a href='https://firebase.google.com/' target='_blank'>Firebase</a> |{' '}
               <a href='https://reactjs.org/' target='_blank'>React</a> |{' '}
               <a href='https://tailwindcss.com/' target='_blank'>Tailwind CSS</a>

            </p>

            {/* <p>
               <span className='text-slate-700'>�� 2023 </span>
               <a href='https://www.saver.com/' target='_blank'>Saver</a>

            </p>
            <p>
               <span className='text-slate-700'>Terms & Conditions</span>

               <a href='https://www.saver.com/terms-and-conditions/' target='_blank'>
                  Terms and Conditions
               </a>
            </p>
            <p>
               <span className='text-slate-700'>Privacy Policy</span>
               <a href='https://www.saver.com/privacy-policy/' target='_blank'>
                  Privacy Policy
               </a>
               <a href='https://www.saver.com/cookie-policy/' target='_blank'>
                  Cookie Policy
               </a>

            </p> */}
         </footer>
      </div>
   )
}
