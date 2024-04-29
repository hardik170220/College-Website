import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'
import Faculty from './Components/Faculty/Faculty'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' Title='What we Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallary' Title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' Title='What Students Says'/>
       <Testimonials/>
       <Title subTitle='Contact Us' Title='Get in Touch'/>
       <ContactUs/>
       <Title subTitle='Faculty' Title='Certified Faculty'/>
        <Faculty/>
       <Footer/>
      </div>
     
      
    </div>
  )
}

export default App