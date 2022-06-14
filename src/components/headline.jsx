import React from "react";
import "../home.scss";
import { Image } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/all";

export const Headline = () => {
  return (
    <>
      {/* <div className="headline bg-dark mt-3">
      <div className="caption">
        <div className="caption-word">
          <h1>Match of the year</h1>
          <h1>is Coming</h1>
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1563506644863-444710df1e03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            rounded
            className="gambar img-fluid"
          />
          <div className="word">
            <h1>Match of the year is Coming</h1>
          </div>
        </div>
      </div>
      <div className="top-news">
        <h1 className="head-pop-news">POPULAR NEWS!</h1>
        <div className="pop-news">
          <div className="pop-1">
            <h1>Who will be MVP of the year?</h1>
            <AiOutlineArrowRight className="react-icons" />
          </div>
          <div>
            <h1>Best 3 point in the competition</h1>
            <AiOutlineArrowRight className="react-icons" />
          </div>
          <div>
            <h1>Match Stats and players line-up</h1>
            <AiOutlineArrowRight className="react-icons" />
          </div>
        </div>
      </div>
    </div> */}
      <div className="headline mt-3  bg-dark">
        <div className="container-sm">
        <div className="row ">
          <div className="col-md-4 position-relative">
            <div className="position-absolute top-50">
            <h1 className="text-white  fs-4">Match of the Year is Coming Back</h1>
            </div>
          </div>
          <div className="col-md-4">
            <Image
              src="https://images.unsplash.com/photo-1563506644863-444710df1e03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
              rounded
              className="img-fluid"
            />
          </div>
          <div className="col-md-4">
            <div className="top-news">
              <h1 className="head-pop-news mt-3 text-start">POPULAR NEWS!</h1>
              <div className="pop-news mt-0">
                <div className="pop-1">
                  <p className="text-truncate" >Who will be MVP of the year?</p>
                  <AiOutlineArrowRight className="react-icons" />
                </div>
                <div className="pop-1">
                  <p className="text-truncate">Best 3 point in the competition</p>
                  <AiOutlineArrowRight className="react-icons" />
                </div>
                <div className="pop-1">
                  <p>Match Stats and players line-up</p>
                  <AiOutlineArrowRight className="react-icons" />
                </div>
                <div className="pop-1">
                  <p className="text-truncate">Match Stats and players line-up</p>
                  <AiOutlineArrowRight className="react-icons" />
                </div>
                <div className="pop-1">
                  <p className="text-truncate">Match Stats and players line-up</p>
                  <AiOutlineArrowRight className="react-icons" />
                </div>
                <div className="pop-1">
                  <p className="text-truncate">Curry Broke New Records</p>
                  <AiOutlineArrowRight className="react-icons" />
                </div>
                <div className="d-flex justify-content-end">
                    <button className="d-block btn btn-primary"> Selengkapnya <AiOutlineArrowRight /></button>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        </div>
       
      </div>
    </>
  );
};
