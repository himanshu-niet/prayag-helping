import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className="font-manrope overflow-hidden">
      <Navbar />
      <main className="p-[5%]">
        <h1 className="text-3xl font-semibold text-secondary mb-5">
          About<i className="text-primary"> Prayag Helping Foundation</i>
        </h1>

        <i className='pl-5 md:pr-20 my-5 text-xl'>
          Help Drive Foundation is a Non Governmental Organization established
          in 2019 in Surat, Gujarat, India. Fostering a society wherein women
          are empowered enough to add value to their family and society; all
          children are empowered with education and enjoy their childhood
          rights, and creating sustainable and humane society wherein all living
          being have access to manage their livelihood. Plan and implement or
          join hands with government, donors, non-government and other Volunteer
          bodies for implementing, development that fulfill our vision to
          educate, organize, strengthen the downtrodden communities with total
          capacities to manage their own development. Friends Care Foundation is
          focused in Orphanage Support, Child Rights, Education Support, Old Age
          Support, Women Empowerment, Calamity Relief, Medical Support and Care
          of Birds & Animals.
        </i>
      </main>
      <Footer />
    </div>
  );
}

export default About