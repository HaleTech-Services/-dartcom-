import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

function Services() {
    const p= 'Services'

    const numeration = [ 'Residential and Corporate Building Construction', 'Construction of Roads, Jetty and bridges', 'Construction of Warehouse and storage facility',
                          'Structural fabrication and installation', 'Maintenance', 'Inspection and testing', 'Surveying services', 'Hydrological services' ]
  return (
    <main className='w-full'>
      <Navbar />

      <HeroSection p={p} />

      <section className='w-full pt-20 text-[1.2rem] lg:text-[1.8rem] px-4 lg:px-40'>
        <p><span className='font-bold'>Dartcom Projects Nigeria Ltd </span>is a company that is known internationally for providing engineering solutions in the area of construction and fabrication.
           We offer engineering expertise that best suits your requirements and imagination in both functional and projects designs</p>
        <p className='py-4'>We also offer innovative and cost effective solutions to our clients, including conceptual ideas in engineering and construction, design and fabrication as well as long term
            maintenance.</p>
        <p>We sustain our reputation by delivering quick job performance and services in accordance with international standards achieved by a continuous trained and skilled workforce
            that carry out their job with a fleet of modern construction and fabrication equipment.</p>    
      </section>

      <section className='px-4 lg:px-40 pt-12 text-[0.8rem] lg:text-[1.8rem]'>
        {numeration.map((numeration)=>(
            <div key={numeration} className='bg-gray-300 mb-4 px-4 py-4 md:px-8 md:py-4 rounded-md'>{numeration}</div>
        ))}
      </section>

      
      <Footer />
      

    </main>
  )
}

export default Services