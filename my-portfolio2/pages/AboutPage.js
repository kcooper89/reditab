import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, My name is Kyle.</p>

            <p>I have just completed a Full Stack Web Development course with Rutgers University.</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

            <p>My latest project, </p>

            <p></p>
            </Content>
        </div>
    );

}

export default AboutPage;