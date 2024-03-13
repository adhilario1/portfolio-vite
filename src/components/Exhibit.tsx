//import React from 'react'
import { useParams } from 'react-router-dom';

import Header from './Header';
import './css/Exhibit.css'

interface Props {
    breakpoint?: number;
}

const Exhibit = ({breakpoint}: Props) => {
    const {exhibitID} = useParams()
    if (exhibitID) console.log(exhibitID);
    return (
        <>
        <Header breakpoint={breakpoint}/>
        <div className='content'>
            <div className='website'>
                <div className='text-body'>
                    <h1 className='secondary-label'>billys.biz (this website)</h1>
                    <p className='formatted-text'> 
                        This website was built not only tp serve as a portal to display the thing I have done to date* as an exercise to teach myself about the React framework and typescript, and as a working example of the skills I developed from my university education. This is of course built upon the experience gained from the aforementioned education, which is primarily building websites from complete scratch, constructing backend functionality with either NodeJS or Spring Boot and jQuery or thymeleaf respectively for frontend rendering.
                    <br/><br/>
                    <h2 className='secondary-label'>Services Used</h2>
                    <p className='formatted-text indented'>
                        As mentioned this was built with the typescript version of ReactJS. The domain name registration and hosting is through AWS Route53 and Amplify respectively. The data base (if implemented by the time of reading) is also through AWS using their RDS service or DynamoDB if the 12 month free trial has since expired. <br /><br/> 
                    </p>
                    <h2 className='secondary-label'>So, Why The Name?</h2>
                    
                    <p className='formatted-text indented'>
                       

                    </p>
                    
                    </p>
                </div>
                <div className='footnote'>
                    * the work I have the right to share. So this primarily means course work and thing I have done on my own time. (i.e. no internship stuff)
                </div>
            </div>
            
        </div>
        
        </>
    )
};

export default Exhibit;