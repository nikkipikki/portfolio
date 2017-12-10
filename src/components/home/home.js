import React from "react"
import "./home.css"

class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="header">
        animation
        </div>

        <div className="projects">

          {/* <div className="project" id="gq">
            <p className="name">GQ</p>
          </div> */}

          <div className="project" id="project">
            <img className="bottom" src="/images/gq.png" />
            <img className="top" src="/images/test.png" />
          </div>

          <div className="project">
            project
          </div>

          <div className="project">
            project
          </div>

          <div className="project">
            project
          </div>

        </div>
      </div>

    )
  }

}

export default Home
