// THIS COMPONENT IS INTENDED TO HOLD ALL API CALLS TO BE REFERENCED BY OTHER COMPONENTS

// import { useState, useEffect } from 'react'
// import Loading from '../Loading/Loading'


// export const ApodCall = () => {
//     const [apod, setApod] = useState([])
    
//     const getAPOD = async () => {
//       try {
//         const key = process.env.REACT_APP_NASA_KEY
//         const apiEndPoint = `https://api.nasa.gov/planetary/apod?api_key=${key}&thumbs=true`
//         const response = await fetch(apiEndPoint)
//         const data = await response.json()
//         setApod(data)
//         console.log(data)
//       } catch (err) {
//         console.log(err)
//       }
//     }
    
//     useEffect(() => {
//       getAPOD()
//     }, [])

//     if (apod.length === 0) {
//         return (
//           <Loading/>
//         )
//       }

//     return
// }
