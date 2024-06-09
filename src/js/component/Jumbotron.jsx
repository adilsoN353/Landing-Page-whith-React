import React from "react";

const Jumbotron = () => {
    return (
      <div className="">
        <div
          className="jumbotron jumbotron-fluid bg-light p-5 m-3"
          style={{
            backgroundImage:
              'url("https://w0.peakpx.com/wallpaper/576/483/HD-wallpaper-ufc-logo-mma-red-logo-back-ufc.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "15px", // 
            border: "2px solid red" 
          }}
        >
          <img src="" alt="" />
          <h1 className="display-4" style={{ fontFamily: "-moz-initial", color: "white" }}>
          <strong>Welcome to the Ultimate Fighter!</strong>
          </h1>
          <p className="lead" style={{ fontSize:"25px", fontFamily: "-moz-initial", color: "white" }}>
          "This is a premier fighting event, a showcase of elite athletes for
          bringing the most intense and thrilling action in the octagon."
          </p>
          <hr className="my-6" />
          <p style={{ fontSize:"25px", fontFamily:"-moz-initial", color: "white" }}>
          "It features top fighters from around the globe, delivering spectacular
          performances and unforgettable moments in every bout."
          </p>
          <a className="btn btn-danger btn-lg" href="https://www.ufcespanol.com/" role="button">
            Learn more
          </a>
        </div>
      </div>
    );
  };
  export default Jumbotron;