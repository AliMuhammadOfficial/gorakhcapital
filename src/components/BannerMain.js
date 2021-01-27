import React from 'react';
import {Paper, Button} from '@material-ui/core'
import slide1 from '../assets/images/b.JPG'
import slide2 from '../assets/images/b.JPG'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function BannerMain() {
        return (
            <Carousel>
                <div>
                    <img src={slide1} alt='slide1' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slide1} alt='slide2' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={slide1} alt='slide3' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
}

export default BannerMain

// export default function BannerMain(props)
// {
//     var items = [
//         {
//             name: "Random Name #1",
//             description: "Probably the most random thing you have ever seen!",
//             url: slide1
//         },
//         {
//             name: "Random Name #2",
//             description: "Hello World!",
//             url: slide2
//         }
//     ]

//     return (
//         <Carousel>
//             {
//                 items.map( (item, i) => <Item key={i} item={item} /> )
//             }
//         </Carousel>
//     )
// }

// function Item(props)
// {
//     return (
//         <Paper style={{height: '100%'}} >
//             <img src={props.item.url} alt={props.item.name} style={{width: '100%'}} />
//             <div style={{width: '100%', textAlign: 'center', position: 'relative', bottom: '200px'}}>
//                 <h2>{props.item.name}</h2>
//                 <p>{props.item.description}</p>
//                 <Button className="CheckButton">
//                     Check it out!
//                 </Button>
//             </div>
//         </Paper>
//     )
// }