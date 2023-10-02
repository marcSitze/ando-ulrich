import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Menu = () => {
  return (
    <div className="text-white flex mx-[10%] pt-[30px] flex justify-between items-center">
      <div className="text-slate-50 text-center">
        <span
          style={{ color: "#fff" }}
          className="text-white font-bold text-[20px]"
        >
          Ando <br /> Ulrich
        </span>
      </div>
      <div>
        <span
          style={{
            marginRight: 40,
            fontSize: "0.8125rem",
            fontWeight: "bold",
            color: "#e4cb86",
          }}
        >
          HOME
        </span>
        <span
          className="text-white mr-[40px] text-[0.8125rem] font-bold"
          style={{ color: "#fff" }}
        >
          BIOGRAPHY
        </span>
        <span
          style={{ color: "#fff" }}
          className="text-white mr-[40px] text-[0.8125rem] font-bold"
        >
          REPERTOIRE
        </span>
        <span
          style={{ color: "#fff" }}
          className="text-white mr-[40px] text-[0.8125rem] font-bold"
        >
          CONTACT
        </span>
      </div>
      <div className="flex" style={{ color: "#fff" }}>
        <BsFacebook style={{ marginRight: 25 }} />
        <FaTwitter style={{ marginRight: 25 }} />
        <AiFillInstagram style={{ marginRight: 25 }} />
      </div>
    </div>
  );
};

export default Menu;
