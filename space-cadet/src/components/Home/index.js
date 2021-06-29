import { useState, useEffect } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import {LinkContainer} from 'react-router-bootstrap'

export default function Home(style) {

    const [apod, setApod] = useState([])

    const getAPOD = async () => {
        try {
            const apiEndPoint = 'https://api.nasa.gov/planetary/apod?api_key=iciuBp4tatCH8Mrd5KDUdQ1EzxeAjcyTjvF6drFC'
            const response = await fetch(apiEndPoint)
            const data = await response.json()
            setApod(data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        getAPOD()
    },[])

    const jumbotronImage = {
        backgroundImage: `url(${apod.hdurl})`,
        backgroundSize: 'cover',
        margin:0,
        borderRadius:0,
    }


    return (
        <Jumbotron  style={jumbotronImage}>
            <h2>Astronomy Photo of the Day:</h2>
            <p>{apod.title}</p>
            <LinkContainer to={`/apod/${apod.date}`}>
                <Button variant="light">Learn more</Button>
            </LinkContainer>
        </Jumbotron>
    )
}