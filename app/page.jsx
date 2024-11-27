"use client";
import React, { lazy, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { Box, Button } from "@mui/material";
import axios from "axios";
import Loadable from "@/components/common/loader/Loadable";
import { API_ENDPOINT, items, NEXT_PUBLIC_API_URL } from "@/utils/constant";
import PopupModal from "@/components/common/PopupModal";
import UpcomingEventForm from "@/components/Upcoming-form/UpcomingForm";
const Footer = Loadable(lazy(()=>import("@/components/footer/Footer2")))
const Contact = Loadable(lazy(()=>import("@/components/contact/Contact")))
const Testimonial = Loadable(lazy(()=>import("@/components/testimonial/Testimonial")))
const Gallery = Loadable(lazy(()=>import("@/components/gallery/Gallery")))
const Events = Loadable(lazy(()=>import("@/components/events/Events")))
const AboutUs = Loadable(lazy(()=>import("@/components/about/AboutUs")))


const page = () => {
  const [upcomimgEvent, setUpcomimgEvent] = useState([])
  const [mergeEvent, setMergeEvent] = useState(items)
  const [showModal, setShowModal] = useState(false)

  const defaultValues= useRef({
    id: null,
    date: null,
    time: null,
    mobile:'',
    email:'',
    message:''
  });

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

  
  const toggleUpcomingEventFormModal = () => {
    defaultValues.current = {
      id: null,
      date: null,
      time: null,
      mobile:'',
      email:'',
      message:''
    };
    setShowModal((prev) => !prev);
  };

  const onSubmit = () => {}

  return (
    <>
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
                  <span style={{ fontWeight: "600" }}>{item.event_Name}</span>
                  <br /> {item.description}<br/>
                <Button variant="contained" className="btn-primary btn-sm" onClick={toggleUpcomingEventFormModal}>
                  {item.viveBtn}
                </Button>
                </h2>
              <Image src={item.photo} className="carousal-image" alt="Lovefools" width={10} height={10}/>
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
     <PopupModal
        isOpen={showModal}
        header={
          'Enquiry'
        }
        onOpenChange={toggleUpcomingEventFormModal}>
        <UpcomingEventForm
          handleClose={toggleUpcomingEventFormModal}
          handleUpcomingEventSubmit={onSubmit}
          defaultValues={defaultValues.current}
        />
      </PopupModal>
    </>
  
  );
};

export default page;
