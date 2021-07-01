import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
// import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Loading from '../Loading/Loading'

export default function APODS () {
    
    const [apods, setApods] = useState([])

    const getAPODS = async () => {
        try {
            const key = process.env.REACT_APP_APOD_KEY
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
    
    return (
        <div className="card-container">     
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
                                
                                <Link to={`/apod/${apod.date}`} key={idx}>
                                    <Card>
                                        {mediaDisplay}
                                        <Card.Body>
                                            <Card.Title>{apod.title}</Card.Title>
                                            <Card.Text>{apod.date}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            )
                        }
                    )
                }
        </div>
    )
}