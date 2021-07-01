import Globe from '../../Globe.svg'

export default function Loading() {
    return (
        <div className="loading flex-column">
        <h2>Loading...</h2>
        <div id="orbit-container">
          <div id="orbit-1">
            <div className="orbit-1-cirlces">
              <img className="spin-left" src={Globe} alt="" />
            </div>
          </div>

          <div id="orbit-2">
            <div className="orbit-2-cirlces">
              <img className="spin-right" src={Globe} alt="" />
            </div>
          </div>

          <div id="orbit-3">
            <div className="orbit-3-cirlces">
              <img className="spin-right" src={Globe} alt="" />
            </div>
          </div>

          <div id="orbit-4">
            <div className="orbit-4-cirlces">
              <img className="spin-left" src={Globe} alt="" />
            </div>
          </div>

          <div id="orbit-5">
            <div className="orbit-5-cirlces">
              <img className="spin-right" src={Globe} alt="" />
            </div>
          </div>

        </div>
      </div>
    )
}