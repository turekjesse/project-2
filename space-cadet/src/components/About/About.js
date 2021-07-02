import NASA_Worm_logo from '../../NASA_Worm_logo.svg'

export default function About () {
    return (
        <div className="about flex-column">
            <img className="nasa-logo" width="300" alt="NASA Worm logo (gray)" src={NASA_Worm_logo}/>
                <p className="copyright">Logo Copyright:
                    <a className="copyright" title="Danne &amp; Blackburn, NY, USA, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:NASA_Worm_logo_(gray).svg">
                        <span className="copyright"> Danne &amp; Blackburn, NY, USA, Public domain</span>
                    </a>
                </p>         
            <div className="explanation">
                <p>Greetings earthling, and welcome to Space Cadet. This app is a modern take on NASA's infamous <a href="https://apod.nasa.gov/apod/">Astronomy Photo of the Day</a> website, joined with a gallery of images from various Mars exploration missions.</p>
                <p>Built using React JS and styled with the React Bootstrap and React Masonry CSS libraries.</p>
            </div>
        </div>
    )
}