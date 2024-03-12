import React from 'react'
import { useParams } from 'react-router-dom';

import Header from '../Header';
import './../css/Exhibit.css'

interface Props {
    breakpoint?: number;
}

const Exhibit = ({breakpoint}: Props) => {
    const {exhibitID} = useParams()
    return (
        <>
        <Header breakpoint={breakpoint}/>
        <div className='content'>
            <div className='website'>
                <div className='text-body'>
                    <h1 className='secondary-label'>revadam.info (this website)</h1>
                    <p className='formatted-text'> 
                        This website was built not only tp serve as a portal to display the thing I have done to date* as an exercise to teach myself about the React framework and typescript, and as a working example of the skills I developed from my university education. This is of course built upon the experience gained from the aforementioned education, which is primarily building websites from complete scratch, constructing backend functionality with either NodeJS or Spring Boot and jQuery or thymeleaf respectively for frontend rendering.
                    <br/><br/>
                    <h2 className='secondary-label'>Services Used</h2>
                    <p className='formatted-text indented'>
                        As mentioned this was built with the typescript version of ReactJS. The domain name registration and hosting is through AWS Route53 and Amplify respectively. The data base (if implemented by the time of reading) is also through AWS using their RDS service or DynamoDB if the 12 month free trial has since expired. <br /><br/> 
                    </p>
                    <h2 className='secondary-label'>So, Why The Name?</h2>
                    <p className='formatted-text indented'>
                        Well, obviously the "adam" part is my first name, and while i could have used a standard extension <i>.com</i>, but the <i>.info</i> seemed apt. However, I assume any question about the domain, assuming their were any, is the "rev" prefix. Sure, if given the opportunity, I would have gladly taken any variation of just my name, but being given a relatively common name, the likelyhood of getting something like <i>adam.info</i> or even <i>adam.biz</i> (both taken) would be nigh impossible. 
                        <br/><br/>
                        However, on a whim in 2016, I became ordained by the Universal Life Church and so technically I'm a registered minister and therefore can be styled as Reverend. While not the exact type of employment I am currently looking for, I guess you can send me an email for inquiry.

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