
import FireStore from '../fireStore/FireStore'
import IMG from '../icon/vecteezy_businessman-on-rocket-launch-from-smartphone-concept-of_19924429.png'


export default function Home() {
  return (
    <>
      <div className=' mx-5  grid items-center justify-center flex-col md:grid-cols-2 mb-[3rem]'>

        <img
          className='w-[360px] h-[300px] md:w-[400px] md:h-auto md:rounded-none  mx-auto mb-5 '
          src={IMG} alt="" />
        <div className='bg-[#cf6202] p-5 rounded-md text-slate-300 md:border-l-[3px] border-t-[3px] md:invisible-border-t'>
          <h1 className='text-4xl font-mono font-semibold mt-7 mb-8'>Welcome to Saver!</h1>
          <p className='font-mono'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae laudantium expedita consequatur quis veniam officiis sequi commodi ipsam. Deleniti veritatis officiis dolor tempora deserunt autem temporibus similique quam nobis distinctio!
          </p>
          <a href="Sign">
            <button className="shadow-[0_0_10px_black] btn p-5 rounded-lg text-slate-200 mt-[1.5em] w-full">Sign in to get started</button>
          </a>
        </div>

      </div>
        <FireStore />
    </>
  )
}
