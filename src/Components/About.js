import React from "react";
import aboutImg from "../Images/about.jpg";

const About = () => {
  return (
    <div className="container custom-margin">
      <div className="row mx-auto">
        <div className="col-lg-6 about-img">
          <h1 className="mb-4">Why People Choose Us</h1>
          <img src={aboutImg} className="" width="90%" alt="" />
        </div>

        <div className="col-lg-6">
          <p>
          <i className="fa fa-quote-left fa-2x fa-pull-left fa-border"></i>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            neque optio distinctio, alias quod nobis saepe nesciunt ducimus
            magni nihil!
          </p>

          <div className="row my-4">
          <div className="col-lg-6 col-6 mb-4">
              <div className="card mx-auto" style={{ width: "auto" }}>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h6 className="card-title">Best Community</h6>
                    <i class="fa-solid fa-chalkboard-user"></i>
                  </div>
                  <p className="card-text">Some quick neque optio distinctio, alias quod nobis saepe nesciunt ducimus</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-6 mb-4">
              <div className="card mx-auto" style={{ width: "auto" }}>
                <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h6 className="card-title">Proven Results</h6>
                  <i class="fa-regular fa-thumbs-up"></i>
                </div>
                  <p className="card-text">Some quick neque optio distinctio, alias quod nobis saepe nesciunt ducimus</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-6 mb-4">
              <div className="card mx-auto" style={{ width: "auto" }}>
                <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h6 className="card-title">Communication</h6>
                  <i class="fa-solid fa-satellite-dish"></i>
                </div>
                  <p className="card-text">Communication and social learning nobis saepe nesciunt ducimus</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-6 mb-4">
              <div className="card mx-auto" style={{ width: "auto" }}>
                <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h6 className="card-title">Computer Education</h6>
                  <i class="fa-solid fa-computer"></i>
                  </div>
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
