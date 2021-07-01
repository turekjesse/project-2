import { useState, useEffect } from "react"
import Loading from '../Loading/Loading'
import Masonry from 'react-masonry-css';
import {Card} from 'react-bootstrap'

export default function Rovers({ rovers, match: { params: { name, max_sol } } }) {

    const [roverImages, setRoverImages] = useState([])

    const getRoverImages = async () => {
        try {
            const key = process.env.REACT_APP_NASA_KEY
            const apiEndPoint = `https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos/?api_key=${key}&sol=${max_sol}`
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
    }, [name])

    if (roverImages.length === 0) {
        return (
            <Loading />
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