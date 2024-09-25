import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, Container } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Textarea from "@mui/joy/Textarea";
import { Email, Person, PhoneAndroid } from "@mui/icons-material";
import {
  API_ENDPOINT,
  ERROR_MESSAGES,
  NEXT_PUBLIC_API_URL,
} from "@/utils/constant";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContextProvider } from "@/authcontext/AuthContext";

const Contact = () => {
  const [contact, setContact] = React.useState({
    name: "",
    mobile_no: "",
    email_id: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = React.useState(false);
  const { id } = React.useContext(AuthContextProvider);

  console.log(id);

  const handleSubmit = async () => {
    const payload = {
      mobile_number: contact.mobile_no,
      name: contact.name,
      email: contact.email_id,
      message: contact.message,
    };
    console.log(payload);

    if (
      contact.name === "" ||
      contact.mobile_no === "" ||
      contact.email_id === "" ||
      contact.message === ""
    ) {
      console.log(payload);

      setErrorMessage(true);
    } else {
      console.log(payload);

      await axios.post(
        `${NEXT_PUBLIC_API_URL}${API_ENDPOINT.ADD_CONTACT}`,
        payload
      );
      setContact({ name: "", mobile_no: "", email_id: "", message: "" });
      toast.success("Contact form submitted successfully");
    }
  };
  return (
    <section className="contact-us-section common-section" id="ContactUs">
      <Container>
        <Grid container className="contact-us-container">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="info-wrap text-center">
              <Typography
                variant="h2"
                className="common-heading-h2 center-line"
              >
                <span> Contact</span>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} className="google-map-col">
            <Box className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29997.5144180167!2d73.78490183476559!3d19.9795645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726309757748!5m2!1sen!2sin"
               
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box className="contact-form">
              <Typography variant="h3" className="common-heading-h3">Contact Us</Typography>
            
                <OutlinedInput
                className="form-groups"
                  value={contact.name}
                  onChange={(e) =>
                    setContact({ ...contact, name: e.target.value })
                  }
                  placeholder="Name"
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton aria-label="person icon" edge="start">
                        <Person />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errorMessage && contact.name === "" && (
                  <div>
                    <Typography className="error">{ERROR_MESSAGES}</Typography>
                  </div>
                )}

                <OutlinedInput
                className="form-groups"
                  type="number"
                  value={contact.mobile_no}
                  onChange={(e) =>
                    setContact({ ...contact, mobile_no: e.target.value })
                  }
                  placeholder="Mobile No"
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton aria-label="phone icon" edge="start">
                        <PhoneAndroid />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errorMessage && contact.mobile_no === "" && (
                  <div>
                    <Typography className="error">{ERROR_MESSAGES}</Typography>
                  </div>
                )}
                <OutlinedInput
                className="form-groups"
                  type="email"
                  value={contact.email_id}
                  onChange={(e) =>
                    setContact({ ...contact, email_id: e.target.value })
                  }
                  placeholder="Email ID"
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton aria-label="email icon" edge="start">
                        <Email />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errorMessage && contact.email_id === "" && (
                  <div>
                    <Typography className="error">{ERROR_MESSAGES}</Typography>
                  </div>
                )}
                <Textarea
                className="form-groups"
                  minRows={5}
                  value={contact.message}
                  onChange={(e) =>
                    setContact({ ...contact, message: e.target.value })
                  }
                  placeholder="Message"
                />
                {errorMessage && contact.message === "" && (
                  <div>
                    <Typography className="error">{ERROR_MESSAGES}</Typography>
                  </div>
                )}
         
              <Button className="btn-primary" onClick={handleSubmit} variant="contained">
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;