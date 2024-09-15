"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import "./globals.css";
import Image from "next/image";
import Image1 from "../assets/images/restaurant-private-room-with-table-14-persons-wooden-ceiling-brick-walls-fireplace.png";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";
import AboutUs from "@/components/about/AboutUs";
import Events from "@/components/events/Events";
import Gallery from "@/components/gallery/Gallery";
import Testimonial from "@/components/testimonial/Testimonial";
import Footer from "@/components/footer/Footer";
import Footer2 from "@/components/footer/Footer2";

const page = () => {
  var items = [
    {
      title1: "Welcome",
      title2: "to Lovefools",
      image: Image1,
    },
    {
      title1: "Welcome",
      title2: "to Lovefools",
      image: Image1,
    },
    {
      title1: "Welcome",
      title2: "to Lovefools",
      image: Image1,
    },
  ];
  return (
    <Box>
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showStatus={false}
        showThumbs={false}
      >
        {items.map((item,index) => {
          return (
            <div key={index}>
              <p
                style={{
                  color: "#fff",
                  position: "absolute",
                  top: "42%",
                  left: "42%",
                }}
              >
                <span className="carousel-title">
                  <span style={{ fontWeight: "600" }}>{item.title1}</span>
                  <br /> {item.title2}
                </span>
              </p>

              <Image src={item.image} className="carousal-image" />
            </div>
          );
        })}
      </Carousel>
      <AboutUs />
      <Events />
      <Gallery />
      <Testimonial />
      <Footer />
      <Footer2 />
    </Box>
  );
};

export default page;
