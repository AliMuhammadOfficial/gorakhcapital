import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'
import slide1 from '../assets/images/1.png'

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
            url: 'https://images.unsplash.com/photo-1516849677043-ef67c9557e16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
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
        <Paper style={{height: '500px'}} >
            <img src={props.item.url} alt={props.item.name} style={{height: '100%'}} />
            <div style={{position: 'relative', top: '80%'}}>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
                <Button className="CheckButton">
                    Check it out!
                </Button>
            </div>
        </Paper>
    )
}