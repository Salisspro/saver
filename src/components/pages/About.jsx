import IMG from '../icons/react.svg'
export default function About() {
  return (
    <div>
        <figure className="border-sky-600 border-l-[5px] md:flex  md:p-0 bg-[#d9414e] ">
      <img className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto width="384" height="512"'
      src={IMG} alt="" />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-slate-800">
              Hi, i am Salisu Yushau, a skilled React native developer with a passion for building scalable and efficient mobile application.
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="uppercase text-sky-600 dark:text-sky-700">
                Salisspro P9
              </div>
              <div className="text-slate-700 dark:text-slate-900">
                Software Developer
              </div>
            </figcaption>
          </div>
      </figure>
    </div>
  )
}
