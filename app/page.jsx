"use client";
import React, { lazy } from "react";
import Image from "next/image";
import Image1 from "../assets/images/banner.png";
import { Carousel } from "react-responsive-carousel";
import { Box, Button } from "@mui/material";
import Loadable from "@/components/common/loader/Loadable";
const Footer = Loadable(lazy(()=>import("@/components/footer/Footer2")))
const Contact = Loadable(lazy(()=>import("@/components/contact/Contact")))
const Testimonial = Loadable(lazy(()=>import("@/components/testimonial/Testimonial")))
const Gallery = Loadable(lazy(()=>import("@/components/gallery/Gallery")))
const Events = Loadable(lazy(()=>import("@/components/events/Events")))
const AboutUs = Loadable(lazy(()=>import("@/components/about/AboutUs")))


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
                  <br /> {item.title2}<br/>
                <Button variant="contained" className="btn-primary btn-sm">
                  View More
                </Button>
                </h2>
              <Image src={item.image} className="carousal-image" alt="Lovefools" />
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
