import NASA_Worm_logo from '../../NASA_Worm_logo.svg'

export default function About () {
    return (
        <div className="about flex-column">
            <img className="nasa-logo" width="256" alt="NASA Worm logo (gray)" src={NASA_Worm_logo}/>
            <div className="explanation">
                <p>Greetings earthling, and welcome to Space Cadet. This app is a modern take on NASA's infamous <a href="https://apod.nasa.gov/apod/">Astronomy Photo of the Day</a> website, joined with a gallery of images from various explanation missions of Mars, and built with react JS.</p>
                <p className="copyright">Logo Copyright:
                    <a className="copyright" title="Danne &amp; Blackburn, NY, USA, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:NASA_Worm_logo_(gray).svg">
                        <span className="copyright"> Danne &amp; Blackburn, NY, USA, Public domain</span>
                    </a>
                </p>         
            </div>
        </div>
    )
}