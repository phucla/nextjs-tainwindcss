import React, { forwardRef, ForwardedRef } from 'react'
import clsx from 'clsx'

const data = [
  {
    title: "High Quilty Theme",
    description: "Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor.",
    icon: "fab fa-bandcamp"
  },
  {
    title: "Retina Ready",
    description: "Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor.",
    icon: "far fa-eye"
  },
  {
    title: "Clean Code",
    description: "Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor.",
    icon: "far fa-file-code"
  },
  {
    title: "Light Theme",
    description: "Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor.",
    icon: "fab fa-uikit"
  }
]
export const OurTeam = forwardRef((props, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section id="about" className="py-20 container mx-auto" ref={ref}>
      <div className="container">
        <div className="flex justify-center text-center">
          <div className="lg:w-1/2">
            <div className="pb-12">
              <h2 className="text-3xl text-gray-800">Welcome To Our Company</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto my-2 pt-1"></div>
              <p className="text-sm pt-3 text-gray-700">Lorem elementum Sed congue nisl dolorSed congue nisl dolor Lorem elementum Sed congue nisl dolorSed.</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap">	
          {data.map(item => (
            <div key={item.title} className="lg:w-1/4 md:w-1/2 text-center sm:w-full p-3">
            <div className="cursor-pointer py-6 px-7 md:px-10 border border-gray-100 border-solid hover:shadow-custom duration-500 transition-shadow group transform my-3" data-wow-duration="2s" data-wow-delay="0.4s" data-wow-offset="0">
                <div><i className={clsx("w-24 h-24 text-5xl text-blue-500 bg-blue-100 text-center leading-96 rounded-custom hover:text-white group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 ase-in-out", item.icon)}></i></div>
                <div>
                  <h3 className="text-gray-800 text-2xl leading-8 py-3 font-bold group-hover:text-blue-500 transition-all duration-500 ase-in-out">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-7 font-normal">{item.description}</p>
                </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
});
