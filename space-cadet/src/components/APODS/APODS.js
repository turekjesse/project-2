import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Loading from '../Loading/Loading'
import Masonry from 'react-masonry-css';

export default function APODS () {
    
    const [apods, setApods] = useState([])

    const getAPODS = async () => {
        try {
            const key = process.env.REACT_APP_NASA_KEY
            const apiEndPoint = `https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=2021-06-01`
            const response = await fetch(apiEndPoint)
            const data = await response.json()
            setApods(data)
        } catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        getAPODS()
    },[])

    if (apods.length === 0) {
        return (
            <Loading/>
        )
    }

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      }
    
    return (
        <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid apods-container" columnClassName="masonry-grid_column"> 
            {
                apods.slice(0).reverse().map((apod, idx) => {
                    const videoEmbed = (
                        <div className="video-responsive">
                            <iframe
                                width="853"
                                height="480"
                                src={apod.url}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={apod.title}
                            />
                        </div>
                    )
                    let mediaDisplay;
                    if (apod.media_type === "video"){
                        mediaDisplay = videoEmbed
                    } else {
                        mediaDisplay = <img className="card-image" src={apod.url} alt={apod.title}/>
                    }
                        return (
                            <div>
                            <Link to={`/apod/${apod.date}`} key={idx}>
                                <Card>
                                    {mediaDisplay}
                                    <Card.Body>
                                        <Card.Title>{apod.title}</Card.Title>
                                        <Card.Text>{apod.date}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                            </div>
                        )
                    }
                )
            }
        </Masonry> 
    )
}