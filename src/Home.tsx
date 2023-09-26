import React from 'react'
import Artist from "./assets/artist.jpg"
import Menu from './components/Menu'

const Home = () => {
  return (
    <div className="home" style={{ textAlign: "center"}}>
      <Menu />
      <div style={{ position: "absolute", bottom: 10, left: "30%" }}>
      <h1 style={{ fontSize: 80, fontWeight:"normal", color: "#fff" }}>ANDO ULRICH</h1>
      </div>
    </div>
  )
}

export default Home