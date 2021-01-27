import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'
import slide1 from '../assets/images/b.JPG'
import slide2 from '../assets/images/b.JPG'

export default function BannerMain(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            url: slide1
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            url: slide2
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper style={{width: '100%', height: '100%'}} >
            <img src={props.item.url} alt={props.item.name} style={{width: '100%'}} />
            <div style={{width: '100%', textAlign: 'center'}}>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
                <Button className="CheckButton">
                    Check it out!
                </Button>
            </div>
        </Paper>
    )
}