import React from 'react';
import './styles.css';
import Industry from '../src/img/our-5i-explain-industry.jpg'; 
import Institition from '../src/img/our-5i-explain-institution.jpg'; 
import Incubation from '../src/img/our-5i-explain-incubation.jpg'; 
import Innovation from '../src/img/our-5i-explain-innovation.jpg'; 
import Internship from '../src/img/our-5i-explain-internship.jpg'; 
import { Link } from 'react-router-dom';


const  Our_5i_explain = () => {
  return (
    <div className='our_5i_main_container'>
        <h1 className='heading-5i' style={{textAlign:"center"}}>OUR 5I</h1>
        <div>
            <div className='our_5i_container'>
                <div>
                    <img src={Industry} alt="" />
                </div>
                <div className='our_5i_zindex'>
                <h1>Industry</h1>
                <p>Partnering with industries plays a pivotal role in creating a collaborative ecosystem that drives innovation, fosters creativity, and enhances learning opportunities. By building strong alliances, we bridge the gap between academia and the corporate world.</p>
            </div>
                <div className='our_5i_container_content'>
                    <ul>
                    <h2>Key features</h2>
                        <li>2000+ Untapped Student Pool</li>
                        <li>100+ Research Scholars</li>
                        <li>Live Labs</li>
                        <li>CNC Machines</li>
                        <li>Advanced Chemical Labs</li>
                        <li>Well-Equipped Infrastructure</li>
                        <li>Cafeteria</li>
                        <li>Boardrooms for Conclaves</li>
                        <li>Dedicated/Shared Workspaces</li>
                        <li>High-Speed Internet</li>
                        <li>Seminar Halls and Auditoriums</li>
                    </ul>
                </div>
            </div>
            
        </div>
        <div>
            <div className='our_5i_container-2'>
                <div className='our_5i_container_content-2'>
                
                    <ul>
                    <h2>Key features</h2>
                    <li>Infrastructure readiness for expansion</li>
                        <li>Talent pool availability Tier 2 & 3 Cities</li>
                        <li>Training inclusion part of academic schedule</li>
                        <li>Periodic enhancement of curriculum</li>
                    </ul>
                </div>
                <div className='our_5i_zindex-2'>
                <h1>Institution</h1>
                <p>Our institution is dedicated to shaping the future workforce by fostering strong connections between academic learning and industry expertise. By bridging the gap between institutions and industry leaders.</p>
            </div>
                <div>
                    <img src={Institition} alt="" />
                </div>
                
            </div>
            
        </div>
        <div>
            <div className='our_5i_container'>
                <div>
                    <img src={Incubation} alt="" />
                    
                </div>
                <div className='our_5i_zindex-3'>
                <h1>Incubation</h1>
                <p>Our incubation program is committed to nurturing and transforming innovative ideas into successful and sustainable businesses. By providing comprehensive support through expert mentoring, strategic guidance.</p>
            </div>
                
                <div className='our_5i_container_content'>
                    <ul>
                    <h2>Key features</h2>
                        <li>Incubation space for students with scoping, designing and launching innovative new social action projects.</li>
                        <li>Promote an entrepreneurial mindset</li>
                        <li>Aspiring entrepreneurs to turn their innovative ideas into thriving ventures</li>
                        {/* <li>Create an ecosystem to sensitize, engage and support the innovators from ideation to product development</li> */}
                    </ul>
                </div>
            </div>
            
        </div>
        <div>
            <div className='our_5i_container-2'>
                <div className='our_5i_container_content-2'>
                    <ul>
                    <h2>Key features</h2>
                        <li>Healthcare</li>
                        <li>Fintech</li>
                        <li>Wellness</li>
                        <li>Transport</li>
                        <li>Ecommerce</li>
                        <li>Jewelleries</li>
                        <li>Transport</li>
                        <li>Education</li>
                    </ul>
                </div>
                <div className='our_5i_zindex-4'>
                <h1>Innovation</h1>
                <p>Our incubators have demonstrated expertise in fostering the creation of innovative products and services across diverse fields, driving advancements that address real-world challenges.</p>
                <Link to="/InnovationIdeaForm" className="cta-btn1">Share your innovative ideas</Link>
            </div>
                <div>
                    <img src={Innovation} alt="" />
                </div>
                
            </div>
            
            
        </div>
        <div>
            <div className='our_5i_container'>
                <div>
                    <img src={Internship} alt="" />
                </div>
                <div className='our_5i_zindex-5'>
                <h1>Internship</h1>
                <p>Our internship programs are designed in collaboration with industry partners to create a dynamic ecosystem that fosters innovation, creativity, and experiential learning.</p>
            </div>
                <div className='our_5i_container_content'>
                <h2 style={{color:'green'}}>Key features</h2>
                    <ul>
                        <li>Productivity from day 1</li>
                        <li>Paid Internship from 3 Year of your curriculum</li>
                        <li>Training based on Industry Trends / demand bridge the curriculum gaps</li>
                    </ul>
                </div>
            </div>
            
        </div>
        

            
    </div>
  );
};

export default  Our_5i_explain;

