"use client";
import React, { useRef, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import CustomizedSteppers from "@/components/stepper/Stepper";
import { BookingsIcons } from "@/utils/constant";
import Button from "@/components/common/Button";
import DateForm from "@/components/booking-form/DateForm";
import TableForm from "@/components/booking-form/SelectTableForm";
import SelectMenuForm from "@/components/booking-form/SelectMenuForm";
import MobileVerificationForm from "@/components/booking-form/MobileVerification";
import PaymentDetails from "@/components/booking-form/PaymentDetails";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import axios from "axios";

const Page = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { error, isLoading, Razorpay } = useRazorpay();
  const [defaultValues, setDefaultValues] = useState({
    email: "",
    menu_Name: "",
    room: null,
    table_number: null,
    mobile: "",
    date: null,
    time: null,
    price: "",
    menuType: '',
    subMenuType: '',
    quantity:'',
    otp: "",
  });

  
  console.log("defaultValues", defaultValues);

  const generateRandomNumber = () => {
    return Math.floor(100000 + Math.random() * 900000); // Ensures a 6-digit number
  };

  const sendWhatsAppMessages = async () => {
    const payload = {
      phone: "+918830601265",
      message: `Lovefools booking confirmation OTP ${generateRandomNumber}`,
    };

    try {
      const data = await axios.post("https://api.wassenger.com/v1/messages", {
        payload,
        headers: {
          "Content-Type": "application/json",
          Token:
            "53d9b10ad2585e1b35fc491ec47cee86c2e269734f998c2c81fd6495a77e49b5907dbb4ed261b163",
        },
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (data) => {
   setDefaultValues(data)
  }

  return (
    <section
      className="about-section common-section overflow-auto"
      style={{ background: "#000000e5", height: "100vh", overflow: "auto" }}
    >
      <Box className="booking-banner-section flex justify-center overflow-auto mb-30">
        <Box sx={{ width: "90%", border: "1px solid #fff" }} className="mt-36">
          <br />
          <br />
          <CustomizedSteppers icons={BookingsIcons} activeTab={activeTab} />
          <Container sx={{ width: "80%" }} className="mt-10">
            {activeTab === 0 && (
              <DateForm
                defaultValues={defaultValues}
                setActiveTab={setActiveTab}
                handleOnsubmit={handleSubmit}
              />
            )}
            {activeTab === 1 && (
              <TableForm
                defaultValues={defaultValues}
                setActiveTab={setActiveTab}
                setDefaultValues={setDefaultValues}
                handleOnsubmit={handleSubmit}
              />
            )}
            {activeTab === 2 && (
              <SelectMenuForm
                defaultValues={defaultValues}
                setDefaultValues={setDefaultValues}
                setActiveTab={setActiveTab}
                handleOnsubmit={handleSubmit}
              />
            )}
            {activeTab === 3 && (
              <MobileVerificationForm
                defaultValues={defaultValues}
                setDefaultValues={setDefaultValues}
                setActiveTab={setActiveTab}
                handleOnsubmit={handleSubmit}
              />
            )}
            {activeTab === 4 && (
              <PaymentDetails
                defaultValues={defaultValues}
                setDefaultValues={setDefaultValues}
                setActiveTab={setActiveTab}
              />
            )}         
          </Container>
        </Box>
      </Box>
    </section>
  );
};

export default Page;
