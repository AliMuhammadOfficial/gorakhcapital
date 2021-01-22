import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'

export default function Example(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            url: 'https://images.unsplash.com/photo-1551358009-1d9f0bc4daf5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
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
        <Paper>
            <img src={props.item.url} alt={props.item.name} style={{height: '300px'}} />
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}