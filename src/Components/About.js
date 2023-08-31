import React from "react";
import aboutImg from "../Images/about.jpg";

const About = () => {
  return (
    <div className="container custom-margin">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="mb-4">Why People Choose Us</h1>
          <img src={aboutImg} className="" width="85%" alt="" />
        </div>
        <div className="col-lg-6">
          <p>
          <i className="fa fa-quote-left fa-2x fa-pull-left fa-border"></i>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            neque optio distinctio, alias quod nobis saepe nesciunt ducimus
            magni nihil!
          </p>

          <div className="row my-4">
          <div className="col-lg-6 col-6 mb-3">
              <div className="card mx-auto" style={{ width: "auto" }}>
                <div className="card-body">
                  <h6 className="card-title">Mohd Sanabil <i className="fa-solid fa-house"></i></h6>
                  <p className="card-text">Some quick neque optio distinctio, alias quod nobis saepe nesciunt ducimus</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-6 mb-3">
              <div className="card mx-auto" style={{ width: "auto" }}>
                <div className="card-body">
                  <h6 className="card-title">Mohd Sanabil  <i className="fa-solid fa-house"></i></h6>
                  <p className="card-text">Some quick neque optio distinctio, alias quod nobis saepe nesciunt ducimus</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-6 mb-3">
              <div className="card mx-auto" style={{ width: "auto" }}>
                <div className="card-body">
                  <h6 className="card-title">Mohd Sanabil <i className="fa-solid fa-thumbs-up"></i></h6>
                  <p className="card-text">Some quick neque optio distinctio, alias quod nobis saepe nesciunt ducimus</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-6 mb-3">
              <div className="card mx-auto" style={{ width: "auto" }}>
                <div className="card-body">
                  <h6 className="card-title">Mohd Sanabil <i className="fa-solid fa-user-secret"></i></h6>
                  <p className="card-text">Some quick neque optio distinctio, alias quod nobis saepe nesciunt ducimus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
