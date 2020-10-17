import React from "react";
import { HashLink } from "react-router-hash-link";
import headerImg from "../../../images/logos/frame.png";
import "./HeaderContents.css";

const HeaderContents = () => {
  return (
    <section className="row d-flex align-items-center">
      <div style={{ paddingRight: 50 }} className="col-md-5">
        <h1 style={{ marginTop:"70px",fontSize: 50, fontWeight: 700 }}>
          Let's Grow Your <br />
          Brand To The <br />
          Next Level{" "}
        </h1>
        <p id="text">
          
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
            atque. Blanditiis expedita id accusamus aliquam! Recusandae sed
            iusto quas, fugiat ut fuga suscipit tempore libero, inventore esse
            id repudiandae itaque.
          
        </p>
        <HashLink to="/#services">
          <button style={{ marginTop:"20px"}} className="btn-brand text-white">Hire Us</button>
        </HashLink>
      </div>
      <div className="col-md-7 pl-5 d-none d-sm-block">
        <img className="frame img-fluid" src={headerImg} alt="" />
      </div>
    </section>
  );
};

export default HeaderContents;
