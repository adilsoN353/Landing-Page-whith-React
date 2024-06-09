import React from "react";

const Card = (props) => {
    return (
        <div className="container-fluid"
        s style={{
            backgroundImage:
              'url("https://i.pinimg.com/736x/e8/47/d3/e847d38af4c3938b4953e3a6a9d89f54.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            paddingLeft: "70px",
          backgroundColor: "black"
          }}>
            <div className="row">
                <div className="col-md-4">
                    <div className="card" style={{ width: "20rem", borderRadius: "15px", // 
                    border: "2px solid red", color: "white"
                      }}>
                        <img src={props.imgUrl} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <a href={props.link} className="btn btn-danger">fighter profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Card;