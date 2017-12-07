import React from "react"
import Home from "./home/home"
import Project from "./project/project"
import About from "./about/about"
import Navbar from "./navbar/navbar"

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar />

        <Home />

        <About />

        <Project />
      </div>

    )
  }

}

export default App
