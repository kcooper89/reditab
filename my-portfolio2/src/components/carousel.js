import React from 'react';

import Card from '../components/card';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Note-Taker',
                    subTitle: "A note-taker application so that you don't forget that thing...",
                    imgSrc: './note-taker.jpg',
                    link: 'https://dry-caverns-68805.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Code Quiz',
                    subTitle: 'Test your coding knowledge with a coding quiz!',
                    imgSrc: './quiz.png',
                    link: 'https://kcooper89.github.io/rabbitor/index.html',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Password Generator',
                    subTitle: "A password generator just in case you can't think of a good one.",
                    imgSrc: './passwordgenerator.jpg',
                    link: 'https://kcooper89.github.io/8bality/' ,
                    selected: false
                },
                {
                    id: 3,
                    title: 'NBA Team Builder',
                    subTitle: "A team builder for your NBA fantasy league.",
                    imgSrc: './nba.jpg',
                    link: 'https://lower-canoe-73465.herokuapp.com/index.html' ,
                    selected: false
                },
                {
                    id: 4,
                    title: "What's for dinner?",
                    subTitle: "An app that can help you decide what you would like for dinner.",
                    imgSrc: './dinner.jpg',
                    link: 'https://kcooper89.github.io/jobbed/' ,
                    selected: false
                },
                {
                    id: 5,
                    title: "Work Day Planner",
                    subTitle: "A 9am to 5pm work day scheduler. ",
                    imgSrc: './dayplanner.jpg',
                    link: 'https://kcooper89.github.io/pagic/' ,
                    selected: false
                }
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;