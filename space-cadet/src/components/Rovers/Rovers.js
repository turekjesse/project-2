import { useState, useEffect } from "react"
import Loading from '../Loading/Loading'
import Masonry from 'react-masonry-css';
import {Card, Form} from 'react-bootstrap'
export default function Curiosity({ rovers, match: { params: { name, max_sol } } }) {
    
    const [sol, setSol] = useState(max_sol)
    const [roverImages, setRoverImages] = useState([])
    const [value, setValue] = useState(max_sol)
    
    const getRoverImages = async () => {
        try {
            const key = process.env.REACT_APP_NASA_KEY
            const apiEndPoint = `https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos/?api_key=${key}&sol=${value}`
            console.log(apiEndPoint)
            const response = await fetch(apiEndPoint)
            const data = await response.json()
            setRoverImages(data.photos)
            console.log(data.photos)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getRoverImages()
        // eslint-disable-next-line
    }, [name, sol])
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const newSol = value
        console.log(newSol)
        setSol(newSol)
    }

    if (roverImages.length === 0) {
        return (
            <div>

                <Card.Body>
                    <Card.Title>No Images Found, try again</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Change Sol value to update gallery</Form.Label>
                            <Form.Control type="input" onChange={ (e) => setValue(e.target.value) } placeholder={`Enter a number between 0 and ${max_sol}`} />
                        </Form.Group>
                    </Form>
                </Card.Body>
            </div>
        )
    }

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    }

    return (
        <div>
            <Card.Body>
                <Card.Title>Rover: {roverImages[0].rover.name}</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Change Sol value to update gallery</Form.Label>
                        <Form.Control type="input" onChange={ (e) => setValue(e.target.value) } placeholder={`Enter a number between 0 and ${max_sol}`} />
                    </Form.Group>
                </Form>
            </Card.Body>
            <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid" columnClassName="masonry-grid_column">
                {
                    roverImages.map((photo, idx) => {
                        return (
                            <div key={idx}>
                                <img src={photo.img_src} alt="" />
                            </div>
                        )
                    })
                }
            </Masonry>
        </div>
    )
}