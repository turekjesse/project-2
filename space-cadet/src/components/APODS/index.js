import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'

export default function APODS () {
    
    const [apods, setApods] = useState([])

    const getAPODS = async () => {
        try {
            const apiEndPoint = 'https://api.nasa.gov/planetary/apod?api_key=iciuBp4tatCH8Mrd5KDUdQ1EzxeAjcyTjvF6drFC&start_date=2021-06-01'
            const response = await fetch(apiEndPoint)
            const data = await response.json()
            setApods(data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        getAPODS()
    },[])

    return (
        <div className="card-container">
            <CardColumns>
                {
                    apods.map((apod, idx) => {
                        let mediaDisplay;

                        if (apod.media_type === "video"){
                            mediaDisplay = <iframe src={apod.url} frameborder="0" width="100%" title={apod.title}></iframe>
                        } else {
                            mediaDisplay = <img src={apod.url} alt={apod.title}/>
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
            </CardColumns>
        </div>
    )
}