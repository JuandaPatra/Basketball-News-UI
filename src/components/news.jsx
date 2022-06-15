import React from "react";
import { Image } from "react-bootstrap";
import "../home.scss";

export const News = () => {
  return (
    <>
      <div className="trending container">
        <div className="trend-news">
          <Image
            src="https://images.unsplash.com/photo-1580692475446-c2fabbbbf835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
            rounded
            className="gambar-trend m-auto d-block center-block"
          />
          <div className="trend-caption ms-2">
            <h1 className="fs-2">Who will be MVP of the year</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus ratione voluptate asperiores pariatur natus. Suscipit
              soluta iste, beatae officia quae tenetur numquam delectus. Vitae
              repellat asperiores molestias dolorem ipsam accusantium.
            </p>
          </div>
        </div>
        <div className="trend-news">
          <Image
            src="https://images.unsplash.com/photo-1578354985657-65776ee4ae90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80"
            rounded
            className="gambar-trend m-auto d-block center-block"
          />
          <div className="trend-caption ms-2">
            <h1 className="fs-2">Best 3 point shot in the Competition</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quia ipsum ullam odit magni quidem quas, nostrum culpa sit dolorum
              id sunt delectus eveniet vel. Possimus odit, perferendis quibusdam
              cupiditate corporis velit nulla. Deleniti qui deserunt eius unde
              aspernatur libero?
            </p>
          </div>
        </div>
        <div className="trend-news">
          <Image
            src="https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
            rounded
            className="gambar-trend m-auto d-block center-block"
          />
          <div className="trend-caption ms-2">
            <h1 className="fs-2 ">Best 5 Clucth Moments in March</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              nesciunt, iure labore ad sapiente eius debitis rem explicabo
              ducimus id doloribus suscipit odio corrupti, repellendus aperiam
              eos totam quis exercitationem ratione ea magni. Ipsum?
            </p>
          </div>
        </div>
        <div className="trend-news">
          <Image
            src="https://images.unsplash.com/photo-1613505358783-e5946f6ef4f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
            rounded
            className="gambar-trend m-auto d-block center-block"
          />
          <div className="trend-caption ms-2">
            <h1 className="fs-2">Basketball unwritten rule</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              nobis illo fuga?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
