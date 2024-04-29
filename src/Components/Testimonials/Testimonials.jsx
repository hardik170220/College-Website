import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
         
       
    }
    const slideBackward = () =>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
         
    }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Anshu Pal</h3>
                                <span>B.Sc. Bio (2021 Passout)</span>
                            </div>
                        </div>
                        <p>I am happy that I decided joining the M.Sc. Program in the Department of Chemistry at SP College. The motivation and mentoring that I received from the Management &amp; . The top class facilities in the laboratory helped me to mould myself in the academic field. I am forever&nbsp; grateful for providing me with the best resources.</p></div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Pooja Jodha</h3>
                                <span>B.Sc.(2019-2022)</span>
                            </div>
                        </div>
                        <p>I would describe my experience at SP College as exciting and dynamic. The best thing about being a student here is the number of additional opportunities that are available. Good College gives you a good future, good teachers build your future, both are available here.&nbsp; I heartily thank the College Management &amp; all the Teachers.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Komal Kunwar</h3>
                                <span>B.Sc.(2019-2022)</span>
                            </div>
                        </div>
                        <p>Being in College where you can work on your skills and refine your talent is essential and I believe that in SP College we are achieving that. The Faculty&nbsp; helps us out at every step. The culture here promotes self-growth and teaches the students corporate ethics and professionalism.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Krishna Kumar</h3>
                                <span>B.Sc. Bio(2021 Passout)</span>
                            </div>
                        </div>
                        <p>Think different, that is one thing that SP College urges in and to a far extent succeeds in teaching to its students which invariably helps to achieve what you need. SP College conducts Seminar, Workshop, Social  &amp; provide Practical knowledge. During this pandemic situation SP College provided Online Classes, Expert Lectures and Events to boost and build knowledge by sitting at home. </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials