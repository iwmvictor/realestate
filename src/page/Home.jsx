import React from "react";

import "./../style/home.scss";
import { CiFilter, CiGrid2H, CiGrid41 } from "react-icons/ci";
import Product from "../homepage/Product";

function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="title">
            <div className="left">
              <h2>— Kicukiro, Kigali</h2>
              <p>32 Properties available in Kicukiro</p>
            </div>
            <div className="right">
              <div className="display">
                <button className="active">
                  <CiGrid41 />
                </button>
                <button >
                  <CiGrid2H />
                </button>
              </div>
              <div className="filter">
                <button>
                  <CiFilter /> Filters
                </button>
              </div>
            </div>
          </div>
          <div className="content">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
