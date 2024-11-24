"use client";
import React, { useRef, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import BookingForm from "@/components/booking-form/BookingForm";
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
    receiptName: "",
    floor: null,
    room: null,
    table_number: null,
    mobile: "",
    date: null,
    time: null,
    price: "",
    menuType: null,
    subMenuType: null,
    otp: "",
  });
  console.log("defaultValues", defaultValues);

  const sendWhatsAppMessages = async () => {
    const payload = {
      phone: "+918830601265",
      message: "Hello world, this is a test message 😀",
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

  const handlePayment = () => {
    const options = {
      key: "rzp_test_BGKRq8Cw1V2ph4",
      amount: 50000, // Amount in paise
      currency: "INR",
      name: "Test Company",
      description: "Test Transaction",
      // order_id: "order_9A33XWu170gUtm", // Generate order_id on server
      handler: (response) => {
        console.log(response);
        alert("Payment Successful!");
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };

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
                setDefaultValues={setDefaultValues}
              />
            )}
            {activeTab === 1 && (
              <TableForm
                defaultValues={defaultValues}
                setDefaultValues={setDefaultValues}
              />
            )}
            {activeTab === 2 && (
              <SelectMenuForm
                defaultValues={defaultValues}
                setDefaultValues={setDefaultValues}
              />
            )}
            {activeTab === 3 && (
              <MobileVerificationForm
                defaultValues={defaultValues}
                setDefaultValues={setDefaultValues}
              />
            )}
            {activeTab === 4 && (
              <PaymentDetails
                defaultValues={defaultValues}
                setDefaultValues={setDefaultValues}
              />
            )}
            {/* <BookingForm defaultValues={defaultValues.current} /> */}
            <br />
            <br />
            <div className="flex justify-center space-x-4">
              <Button
                className="btn-secondary"
                onClick={() => {
                  if (activeTab === 0) {
                    setActiveTab(0);
                  } else {
                    setActiveTab(activeTab - 1);
                  }
                }}
                type="submit"
              >
                Prev
              </Button>
              {activeTab === 4 ? (
                <Button
                  type="submit"
                  className="btn-primary"
                  onClick={handlePayment}
                >
                  Payment Confirm
                </Button>
              ) : (
                <Button
                  className="btn-primary"
                  onClick={() => {
                    if (activeTab === 4) {
                      setActiveTab(4);
                    } else {
                      setActiveTab(activeTab + 1);
                    }
                  }}
                  type="submit"
                >
                  Next
                </Button>
              )}
            </div>
            <br />
            <br />
          </Container>
        </Box>
      </Box>
    </section>
  );
};

export default Page;
