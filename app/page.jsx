"use client";
import React, { lazy, useEffect, useState } from "react";
import Image from "next/image";
import Image1 from "../assets/images/banner.png";
import { Carousel } from "react-responsive-carousel";
import { Box, Button } from "@mui/material";
import axios from "axios";
import Loadable from "@/components/common/loader/Loadable";
import { API_ENDPOINT, NEXT_PUBLIC_API_URL } from "@/utils/constant";
const Footer = Loadable(lazy(()=>import("@/components/footer/Footer2")))
const Contact = Loadable(lazy(()=>import("@/components/contact/Contact")))
const Testimonial = Loadable(lazy(()=>import("@/components/testimonial/Testimonial")))
const Gallery = Loadable(lazy(()=>import("@/components/gallery/Gallery")))
const Events = Loadable(lazy(()=>import("@/components/events/Events")))
const AboutUs = Loadable(lazy(()=>import("@/components/about/AboutUs")))


const page = () => {
  const [upcomimgEvent, setUpcomimgEvent] = useState([])
  const [mergeEvent, setMergeEvent] = useState(items)

  const getUpcomingEvent = async() => {
    try {
      const data = await axios.post(`${NEXT_PUBLIC_API_URL}${API_ENDPOINT.GET_UPCOMING_EVENT}`)
      setUpcomimgEvent(data.data.data)
    } catch (error) {
      console.log();
      
    }
  }

  useEffect(() => {
    getUpcomingEvent()
  },[])


  const mergeArrays = () => {
    setMergeEvent((prevItems1) => [...prevItems1, ...upcomimgEvent]);
  };

  useEffect(() => {
    mergeArrays()
  },[upcomimgEvent])



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
        {mergeEvent.map((item,index) => {
          return (
            <div key={index}>
                <h2 className="carousel-title common-heading-h1">
                  <span style={{ fontWeight: "600" }}>{item.title1}</span>
                  <br /> {item.title2}<br/>
                <Button variant="contained" className="btn-primary btn-sm">
                  {item.viveBtn}
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
