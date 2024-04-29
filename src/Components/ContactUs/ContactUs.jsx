import React from 'react'
import './ContactUs.css'
import msg_icon from '../../assets/msg-icon.png'
// import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const ContactUs = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>We're Here to Help!” and “Reach out to us anytime and we'll happily answer your questions,” </p>
            <ul>
                {/* <li><img src={mail_icon} alt="" />info@sirohieducation.com</li> */}
                <li><img src={phone_icon} alt="" />9530019309</li>
                <li><img src={location_icon} alt="" />SP UNIVERSE, SARVADHAM TEMPLE, OPP. POLICE LINE,SIROHI-307001 (RAJASTHAN).</li>
            </ul>
        </div>
        <div className="contact-col">
         
          <form>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label >Write your message here</label>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>

          </form>
          
        </div>
    </div>
  )
}

export default ContactUs