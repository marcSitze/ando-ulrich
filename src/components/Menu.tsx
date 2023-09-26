import React from 'react'
import {BsFacebook} from "react-icons/bs"
import {FaTwitter} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"

const Menu = () => {
  return (
    <div style={{ marginLeft: "10%", marginRight: "10%", paddingTop: 30, color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }} className='text-white flex '>
      <div className='text-slate-50' style={{ textAlign: "center"}}>
        <span style={{ color: "#fff", fontWeight: "bold", fontSize: 20}} className='text-slate-50'>Ando <br/> Ulrich</span>
      </div>
      <div>
        <span style={{ marginRight: 40, fontSize: "0.8125rem", fontWeight: "bold", color: "#e4cb86" }}>HOME</span>
        <span style={{ marginRight: 40, fontSize: "0.8125rem", fontWeight: "bold" }}>BIOGRAPHY</span>
        <span style={{ marginRight: 40, fontSize: "0.8125rem", fontWeight: "bold" }}>REPERTOIRE</span>
        <span style={{ marginRight: 40, fontSize: "0.8125rem", fontWeight: "bold" }}>CONTACT</span>
      </div>
      <div>
      <BsFacebook style={{ marginRight: 25 }} />
      <FaTwitter style={{ marginRight: 25 }} />
      <AiFillInstagram style={{ marginRight: 25 }} />
      </div>
    </div>
  )
}

export default Menu