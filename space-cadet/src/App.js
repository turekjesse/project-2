// react hooks & components //
import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

// Data //
// import ApodCall from './components/Data/Data'

//styles //
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import APOD from './components/APOD/APOD'
import APODS from './components/APODS/APODS'
import About from './components/About/About'
import Loading from './components/Loading/Loading'
import Rovers from './components/Rovers/Rovers'

function App() {

  const [apod, setApod] = useState([])
  const [rovers, setRovers] = useState([])

  const getAPOD = async () => {
    try {
      const key = process.env.REACT_APP_NASA_KEY
      const apiEndPoint = `https://api.nasa.gov/planetary/apod?api_key=${key}&thumbs=true`
      const response = await fetch(apiEndPoint)
      const data = await response.json()
      setApod(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAPOD()
  }, [])

  const getRovers = async () => {
    try {
      const key = process.env.REACT_APP_NASA_KEY
      const apiEndPoint = `https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=${key}`
      const response = await fetch(apiEndPoint)
      const data = await response.json()
      setRovers(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getRovers()
  }, [])

  if (apod.length === 0 || rovers.length === 0) {
    return (
      <Loading/>
    )
  }

  return (
    <div className="app">
      <Header apod={apod} rovers={rovers}>
      </Header>
      <main>
        <Route path="/" exact render={(routerProps) => <Home {...routerProps} apod={apod} />} />
        <Route path="/apod/:date" render={(routerProps) => <APOD {...routerProps} apod={apod} />} />
        <Route path="/apods" render={(routerProps) => <APODS {...routerProps}/>} />
        <Route path="/about" component={About} />
        <Route path="/rovers/:name/:max_sol" render={(routerProps) => <Rovers {...routerProps} rovers={rovers} />} />
      </main>
    </div>
  );
}

export default App;
