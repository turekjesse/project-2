import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'

export default function APOD() {

    const [apod, setApod] = useState([])

    const getAPOD = async () => {
        try {
            const apiEndPoint = `https://api.nasa.gov/planetary/apod?api_key=iciuBp4tatCH8Mrd5KDUdQ1EzxeAjcyTjvF6drFC`
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
    }, [])

    // Conditionally render Video or Image based on media type
    let mediaDisplay;
    if (apod.media_type === "video") {
        mediaDisplay = <iframe src={apod.url} frameborder="0" title={apod.title}></iframe>
    } else {
        mediaDisplay = <img src={apod.hdurl} alt={apod.title} />
    }


    // Conditionally render copyright information (some dates are missing copyright info)
    let copyright;
    if (apod.copyright) {
        copyright = <p className="copyright">copyright: {apod.copyright}</p>
    } else {
        copyright = null;
    }

    return (
        // <div className="apod">
        //     <h2>{apod.title}</h2>
        //     <p>{apod.date}</p>
        //     {mediaDisplay}
        //     <p>{apod.explanation}</p>
        //     {copyright}
        // </div>

        <Card border="light" style={{ width: '100vw' }}>
            {/* <Card.Header>{apod.date}</Card.Header> */}
            <Card.Body>
                <Card.Text>{apod.date}</Card.Text>
                <Card.Title>{apod.title}</Card.Title>
                {mediaDisplay}
                <div  className="explanation">
                    <Card.Text>{apod.explanation}</Card.Text>
                    <Card.Text>{copyright}</Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}