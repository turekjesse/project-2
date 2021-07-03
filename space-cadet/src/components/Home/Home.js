// import { useState, useEffect } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import {LinkContainer} from 'react-router-bootstrap'

export default function Home({apod}) {
      
      // Conditionally render Video Thumbnail or Image based on media type
      let imgURL;
      if (apod.media_type === "video") {
            imgURL = apod.thumbnail_url
        } else {
            imgURL = apod.hdurl
        }
        
        const jumbotronImage = {
            backgroundImage: `url(${imgURL})`,
        }
        
        return (
            <Jumbotron  style={jumbotronImage} title={apod.title}>
                <h3>Astronomy Photo of the Day:</h3>
                <p>{apod.title}</p>
            <LinkContainer to={`/apod/${apod.date}`}>
                <Button variant="light">Learn more</Button>
            </LinkContainer>
        </Jumbotron>
    )
}