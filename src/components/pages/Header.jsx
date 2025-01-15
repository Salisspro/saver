import { useState } from 'react'
import LOGO from '../images/Saver-1-14-2025.png'
import IMG from '../images/website-navigation-icon-in-black-colors-more-menu-signs-illustration-png.png'

//icons images
import Whatsapp from '../icon/vecteezy_whatsapp-logo-png-whatsapp-icon-png-whatsapp-transparent_18930748.png'
import Github from '../icon/vecteezy_free-logo-github_53066802.png'

import Facebook from '../icon/vecteezy_facebook-logo-png-facebook-icon-transparent-png_18930476.png'


export default function Header() {


  const [modal, setModal] = useState(false)

  const handleModalChange = () => {
    setModal(!modal)
  }


  return (
    <div className="flex px-5 bg-[#ff9100] mb-[100px] text-slate-900 shadow-[0_0_10px_black] header items-center justify-between space-x-10 p-5">
      <div>
        <img
          className='w-[200px] md:w-[300px]'
          src={LOGO} alt="" />
      </div>

      <div

        className='nav ' >

        <img
          onClick={handleModalChange}
          className='md:w-[50px] w-[30px] space-x-5  md:invisible'
          src={IMG} alt="" />
        {
          modal && <div className='md:invisible modal'>
            <div className='text-slate-100 ml-5
            mt-7 flex items-center space-x-5 font-mono text-[18px] '>
              <a href="/"
                className='hover:border p-2 rounded-md bg-slate-900 w-[100px] shadow-[0_0_10px_white] transition-all '
              >Home</a>
              <a href="/About"
                className='hover:border p-2 rounded-md bg-slate-900 w-[100px] shadow-[0_0_10px_white]'
              >About</a>
            </div>

            <div className='icons space-x-5 '>
              <img
                className='w-[40px] h-[40px] rounded-full'
                src={Whatsapp} alt="" />
              <img
                className='w-[40px] h-[40px] rounded-full'
                src={Facebook} alt="" />
              <img
                className='w-[30px] h-[30px] rounded-full'
                src={Github} alt="" />
            </div>
          </div>
        }
      </div>


      <div className="invisible md:visible flex gap-5 p-5">
        <a href="/">Home</a>
        <a href="/About">About</a>
      </div>
    </div>
  )
}
