import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

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
const OurMember = () => {
  return (
  <section id="about" className="py-20 container mx-auto">
    <div className="container">
      <div className="flex justify-center text-center">
        <div className="lg:w-1/2">
          <div className="pb-12">
            <h2 className="text-3xl text-gray-800">Our Team Member</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto my-2 pt-1"></div>
            <p className="text-sm pt-3 text-gray-700">Lorem elementum Sed congue nisl dolorSed congue nisl dolor Lorem elementum Sed congue nisl dolorSed.</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap">	
        {data.map(item => (
          <div key={item.title} className="px-3 group lg:w-1/4 md:w-1/2 text-center sm:w-full">
            <div className="rounded-md bg-blue-50	pb-7 pt-5 px-4 hover:shadow-team duration-500 transition-shadow group transform">
              <div className="w-full h-full mb-6 duration-500 transition-shadow transform group-hover:bg-blue-800 rounded-custom">
                <Image
                  src="https://themesfamily.com/tm/muhsi/assets/img/team/1.png"
                  alt="Picture of the author"
                  width="100%"
                  height="100%"
                  className="rounded-custom w-full h-full group-hover:bg-blue-800"
                  layout="responsive"
                />
              </div>
              <h3 className="mb-2 text-gray-800 text-2xl leading-8 font-bold group-hover:text-blue-500 transition-all duration-500 ase-in-out">Al-Malik</h3>
              <span className="text-gray-700 text-sm leading-7 font-normal">Web Developer</span>
              <ul className="mt-4 ">
                <li className="inline-block mr-1"><a href="#" className="w-6 h-6 leading-6 fab fa-facebook duration-500 transition-shadow hover:bg-blue-500 rounded-50 text-gray-200 border border-solid border-gray-200"></a></li>
                <li className="inline-block mr-1"><a href="#" className="w-6 h-6 leading-6 fab fa-twitter duration-500 transition-shadow hover:bg-blue-500 rounded-50 text-gray-200 border border-solid border-gray-200"></a></li>
                <li className="inline-block mr-1"><a href="#" className="w-6 h-6 leading-6 fab fa-google-plus duration-500 transition-shadow hover:bg-blue-500 rounded-50 text-gray-200 border border-solid border-gray-200"></a></li>
              </ul>
            </div>
          </div>

        ))}
        
      </div>
    </div>
  </section>
  )
}

export default OurMember