"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import "../styles/globals.css";
import Image from "next/image";
import Image1 from "../assets/images/banner.png";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";
import AboutUs from "@/components/about/AboutUs";
import Events from "@/components/events/Events";
import Gallery from "@/components/gallery/Gallery";
import Testimonial from "@/components/testimonial/Testimonial";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer2";

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
    <Box className="home-banner-section">
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
                <h2 className="carousel-title common-heading-h1">
                  <span style={{ fontWeight: "600" }}>{item.title1}</span>
                  <br /> {item.title2}
                </h2>

              <Image src={item.image} className="carousal-image" />
            </div>
          );
        })}
      </Carousel>
      <AboutUs />
      <Events />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
    </Box>
  );
};

export default page;
