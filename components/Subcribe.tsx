import React from 'react'

const Subcribe = () => (
  <section className="py-12 md:p-24 text-center">
    <div className="container">
      <div className="row clearfix">
        <div>
          <div className="atf-mailchamp-headding mb-4">
            <h2 className="text-2xl md:text-4xl font-bold leading-10 text-gray-800 mb-8">Subcribe Today For Updates Newletter</h2>
          </div>
          
          <div className="justify-center flex">
              <input type="email" name="EMAIL" className="text-sm rounded-r-yl text-gray-800 w-8/12 h-11 p-4 border border-gray-200 border-solid focus:outline-none" id="email" placeholder="Your Email" required></input>
              <button type="submit" id="subscribe-button" className="bg-blue-600 text-white text-4xl leading-54 px-2 rounded-r-xl focus:outline-none"><i className="fab fa-telegram-plane"></i></button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Subcribe