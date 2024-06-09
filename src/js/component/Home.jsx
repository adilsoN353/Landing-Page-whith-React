import React from "react";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle

//create your first component
const Home = () => {
  // console.log("Home")
  return (
    <div>
      <Navbar />,
      <Jumbotron />,
      
      <div className="container-fluid">
      <div className="row">
                <div className="col-md-3">
                    <Card title="Dustin Porier" text="." imgUrl="https://res.cloudinary.com/fanaticsio/image/fetch/f_auto,q_auto/https://theallstar.io/wp-content/uploads/2021/07/67863252Fprofile-galery252Ffullbodyleft-picture252FPOIRIER_DUSTIN_L_07-10.png" link="https://www.ufcespanol.com/athlete/dustin-poirier" />
                </div>
                <div className="col-md-3">
                    <Card title="Jon Jones" text="." imgUrl="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_03-05.png?itok=NBl4UrAX" link="https://www.ufcespanol.com/athlete/jon-jones" />
                </div>
                <div className="col-md-3">
                    <Card title="Rose Namajunes" text="." imgUrl="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-04/NAMAJUNAS_ROSE_L_03-23.png?itok=M6Lb2LXY" link="https://www.ufc.com/athlete/rose-namajunas" />
                </div>
                <div className="col-md-3">
                    <Card title="Charles Oliveira" text="."  imgUrl= "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-06/OLIVEIRA_CHARLES_L_06-10.png?itok=vKMJlOYL" link="https://www.ufc.com/athlete/charles-oliveira" />
                </div>
            </div>
            
            <Footer/>
      </div>
    </div>
    
   
    )
    
}

export default Home;
