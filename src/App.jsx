import React from "react";

// import {AiOutlineArrowRight} from "react-icons/all";
import "./home.scss"
import { Navibar } from "./components/navbar";
import { News } from "./components/news";
import { Headline } from "./components/headline";
import { Standings } from "./components/standings";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <div className="home">
      <Navibar />
      <Headline />
          <h1 className="text-center mt-5">TRENDING NEWS</h1>
        
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 mt-md-3"></div>
            <div className="col-md-6"><News/></div>
            <div className="col-md-3"><Standings/></div>
          </div>

        </div>

        <Footer />

    </div>
  );
};

export default App;
