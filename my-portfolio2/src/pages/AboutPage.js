import React from 'react';
import Hero from '../components/hero';
import Content from '../components/content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            

            <Content>
            <img className='profile-pic' alt='profile-pic' src='./profile-pic.jpg'/>


            <p>Hello, My name is Kyle.</p>

            <p>I have just completed a Full Stack Web Development course with Rutgers University.</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

            <p>My latest project, you can find right HERE</p>

            <a href='./kyle-resume.docx'>Download my Resume!</a>
            <br/>

            <a href='https://github.com/kcooper89'>Check out my Github!</a>
            </Content>
        </div>
    );

}

export default AboutPage;