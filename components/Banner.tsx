import React from 'react'

const Banner = () => (
  <section id="home" className="banner h-xl relative z-1 w-full flex items-center atf-header-area flex justify-center" data-stellar-background-ratio="0.3">
				<div className="container">
						<div className="text-center">
							<h2 className="text-5xl uppercase">Welcome To Our Muhsi</h2>
							<p className="text-lg pt-10 pb-6" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elit eiusmod tempor incididunt ut labore et dolore.</p>
							
							<div className="mt-3"> 
								<a href="#" className="ease-in-out duration-500 transition-all translate-y-px hover:bg-green-800 py-4 px-6 bg-blue-500 rounded">Contact Us <i className="fa fa-angle-right"></i></a>
							</div>
						</div>
					</div>
			</section>
)

export default Banner