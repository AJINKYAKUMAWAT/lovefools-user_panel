"use client";
import React, { lazy, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { Box, Button, Skeleton } from "@mui/material";
import axios from "axios";
import Loadable from "@/components/common/loader/Loadable";
import { API_ENDPOINT, items, NEXT_PUBLIC_API_URL } from "@/utils/constant";
import PopupModal from "@/components/common/PopupModal";
import UpcomingEventForm from "@/components/Upcoming-form/UpcomingForm";
import { toast } from "react-toastify";
import AboutUs from "@/components/about/AboutUs";
import Events from "@/components/events/Events";
import Gallery from "@/components/gallery/Gallery";
import Testimonial from "@/components/testimonial/Testimonial";
import Contact from "@/components/contact/Contact";
import Footer2 from "@/components/footer/Footer2";
import zIndex from "@mui/material/styles/zIndex";

const Page = () => {
  const [upcomimgEvent, setUpcomimgEvent] = useState([]);
  const [mergeEvent, setMergeEvent] = useState(items);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const defaultValues = useRef({
    id: null,
    date: null,
    time: null,
    mobile: "",
    email: "",
    message: "",
  });

  const getUpcomingEvent = async () => {
    try {
      setLoading(true);
      const data = await axios.post(
        `${NEXT_PUBLIC_API_URL}${API_ENDPOINT.GET_UPCOMING_EVENT}`
      );
      setLoading(false);
      setUpcomimgEvent(data.data.data);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUpcomingEvent();
  }, []);

  const mergeArrays = () => {
    setMergeEvent((prevItems1) => [...prevItems1, ...upcomimgEvent]);
  };

  useEffect(() => {
    mergeArrays();
  }, [upcomimgEvent]);

  const toggleUpcomingEventFormModal = (value) => {
    defaultValues.current = {
      id: null,
      date: new Date(value.date),
      time: null,
      mobile: "",
      email: "",
      message: "",
    };
    if (!value.viveBtn) {
      setShowModal((prev) => !prev);
    }
  };

  const onSubmit = async (data) => {
    const payload = {
      event_Name: eventName,
      description: data.message,
      date: data.date,
      time: data.time,
      event_type: "2",
    };

    try {
      await axios.post(
        `${NEXT_PUBLIC_API_URL}${API_ENDPOINT.ADD_ENQUIRY}`,
        payload
      );

      setShowModal(false);

      toast.success("Update Event Enquiry sent Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const getImage = (imgPath) => {
    const getUrl =
      typeof imgPath === "string"
        ? process.env.NEXT_PUBLIC_CLOUD_FRONT_URL + imgPath
        : imgPath;
    return getUrl;
  };

  return (
    <>
     <Box className="home-banner-section bg-white">
  {loading ? (
    <Skeleton height="98vh" width="98vw" variant="rectangular" />
  ) : (
    <Carousel
      showArrows={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      showStatus={false}
      showThumbs={false}
    >
      {mergeEvent.map((item, index) => {
        // Dynamically determine the correct image URL
        const imageUrl =
          index === 0
            ? item.photo // Directly use the photo field for the first item
            : `${process.env.NEXT_PUBLIC_CLOUD_FRONT_URL}${item.photo}`; // Construct URL for others

        return (
          <div key={index}>
            <h2 className="carousel-title common-heading-h1">
              <span style={{ fontWeight: "600" }}>{item.event_Name}</span>
              <br /> {item.description}
              <br />
              <Button
                variant="contained"
                className="btn-primary btn-sm"
                onClick={() => toggleUpcomingEventFormModal(item)}
              >
                {item.viveBtn ? item.viveBtn : "Enquiry Now"}
              </Button>
            </h2>
            <Image
              src={imageUrl}
              className="carousal-image"
              alt={item.event_Name || "Carousel Image"}
              layout="responsive"
              width={1920} // Maintain aspect ratio
              height={1080}
            />
          </div>
        );
      })}
    </Carousel>
  )}
  <AboutUs />
  <Events />
  <Gallery />
  <Testimonial />
  <Contact />
  <Footer2 />
</Box>

      <PopupModal
        isOpen={showModal}
        header={"Enquiry"}
        onOpenChange={toggleUpcomingEventFormModal}
      >
        <UpcomingEventForm
          handleClose={toggleUpcomingEventFormModal}
          handleUpcomingEventSubmit={onSubmit}
          defaultValues={defaultValues.current}
        />
      </PopupModal>
    </>
  );
};

export default Page;
