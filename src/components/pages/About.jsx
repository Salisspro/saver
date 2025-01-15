import IMG from '../icons/react.svg'
export default function About() {
  return (
    <div>
        <figure className="border-sky-600 border-l-[5px] md:flex rounded-xl p-8 md:p-0 bg-[#d9414e] mx-5">
      <img className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto width="384" height="512"'
      src={IMG} alt="" />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-slate-800">
                “Tailwind CSS is the only framework that I have seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-600 dark:text-sky-700">
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
