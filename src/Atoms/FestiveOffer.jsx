import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image8 from "../Assets/image8.webp";
import image9 from "../Assets/image9.webp";
import image10 from "../Assets/image10.webp";
import image11 from "../Assets/image11.webp";
import image12 from "../Assets/image12.webp";
import { Link } from "react-router-dom";

function FestiveOffer() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth <= 767); // Adjust the breakpoint as needed
    }
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define carousel items for mobile and desktop views
  const mobileCarouselItems = (
    <div>
      <Carousel showThumbs={false}>
        <div className="flex">
          <div className="flex-1 mr-1">
          <Link to={"/products"}>
            <img src={image8} alt="" />
            </Link>
          </div>
          <div className="flex-1 mr-1">
          <Link to={"/products"}>
            <img src={image9} alt="" />
            </Link>
          </div>
          <div className="flex-1 mr-1">
          <Link to={"/products"}>
            <img src={image11} alt="" />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1 mr-1">
          <Link to={"/products"}>
            <img src={image10} alt="" />
            </Link>
          </div>
          <div className="flex-1 mr-1">
          <Link to={"/products"}>
            <img src={image8} alt="" />
            </Link>
          </div>
          <div className="flex-1 mr-1">
          <Link to={"/products"}>
            <img src={image12} alt="" />
            </Link>
          </div>
        </div>
      </Carousel>
      <Carousel showThumbs={false}>
        <div className="mt-3 flex">
          <div className="flex-1 mr-1">
          <Link to={"/products"}>
            <img src={image8} alt="" />
            </Link>
          </div>
          <div className="flex-1 mr-1">
          <Link to={"/products"}>
            <img src={image9} alt="" />
            </Link>
          </div>
          <div className="flex-1 mr-1">
          <Link to={"/products"}>
            <img src={image11} alt="" />
            </Link>
          </div>
        </div>
        <div className="mt-3 flex">
          <div className="flex-1 mr-1">
          <Link to={"/products"}>
            <img src={image10} alt="" />
            </Link>
          </div>
          <div className="flex-1 mr-1">
          <Link to={"/products"}>
            <img src={image8} alt="" />
            </Link>
          </div>
          <div className="flex-1 mr-1">
          <Link to={"/products"}>
            <img src={image12} alt="" />
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );

  const desktopCarouselItems = (
    <div>
      <Carousel showThumbs={false}>
        <div className="flex mt-16 mb-10">
          <div className="flex-1 mr-1">
            <img src={image8} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image9} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image11} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image10} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image8} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image12} alt="" />
          </div>
        </div>
        <div className="flex mt-16">
          <div className="flex-1 mr-1">
            <img src={image11} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image9} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image8} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image12} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image10} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image8} alt="" />
          </div>
        </div>
      </Carousel>

      <Carousel showThumbs={false}>
        <div className="flex mt-2 mb-10">
          <div className="flex-1 mr-1">
            <img src={image11} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image9} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image8} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image12} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image10} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image8} alt="" />
          </div>
        </div>
        <div className="flex mt-2">
          <div className="flex-1 mr-1">
            <img src={image8} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image9} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image11} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image10} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image8} alt="" />
          </div>
          <div className="flex-1 mr-1">
            <img src={image12} alt="" />
          </div>
        </div>
      </Carousel>
    </div>
  );

  return (
    <div>
      <h4
        className={`uppercase text-gray-700 tracking-wider text-3xl sm:font-semibold mt-10 ml-6 mb-2 ${
          isMobileView ? "text-xl flex justify-center" : ""
        }`}
      >
        FESTIVE CRAZY OFFERS
      </h4>

      {isMobileView ? mobileCarouselItems : desktopCarouselItems}
    </div>
  );
}

export default FestiveOffer;
