import { useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Loading from '../Loading/Loading'

export default function APOD({match: {params: {date}}}) {

  const [apod, setApod] = useState([])

  const getAPOD = async () => {
      try {
        const key = process.env.REACT_APP_APOD_KEY
        const apiEndPoint = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`
        const response = await fetch(apiEndPoint)
        const data = await response.json()
        setApod(data)
      } catch (err) {
          console.log(err)
      }
  }
    
  useEffect(() => {
      getAPOD()
      // eslint-disable-next-line
  },[date])

  if (apod.length === 0) {
    return (
        <Loading/>
    )
  }

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
  );

    // Conditionally render Video or Image based on media type
    let mediaDisplay;
    if (apod.media_type === "video") {
        mediaDisplay = videoEmbed
    } else {
        mediaDisplay = <img src={apod.hdurl} alt={apod.title} />
    }


    // Conditionally render copyright information (some dates are missing copyright info)
    let copyRight;
    if (apod.copyright) {
        copyRight = <p className="copyright">Copyright: {apod.copyright}</p>
    } else {
        copyRight = null;
    }

    return (
        <Card border="light" style={{ width: '100vw' }}>
            {/* <Card.Header>{apod.date}</Card.Header> */}
            <Card.Body>
                <Card.Text>{date}</Card.Text>
                <Card.Title>{apod.title}</Card.Title>
                {mediaDisplay}
                <div  className="explanation">
                    <Card.Text>{apod.explanation}</Card.Text>
                    <Card.Text className="copyright">{copyRight}</Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}