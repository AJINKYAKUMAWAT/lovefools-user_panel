"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, Container, Modal, Skeleton } from "@mui/material";
import gallayIcon from "../../assets/images/gallay-icon.svg";
import Image from "next/image";
import axios from "axios";
import { API_ENDPOINT, NEXT_PUBLIC_API_URL } from "@/utils/constant";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import { convertTimeObjectToString, formatDate } from "@/utils/utils";

const Events = () => {
  const [view, setView] = React.useState(6);
  const [eventList, setEventList] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [eventObj, setEventObj] = React.useState({});
  const [oldEventObj, setOldEventObj] = React.useState(null);
  const [loading1, setLoading1] = React.useState(false);
  const [loading2, setLoading2] = React.useState(false);

  const defaultValues = React.useRef({
    id: null,
    date: null,
    time: null,
    mobile: "",
    email: "",
    message: "",
  });

  const getEvent = (obj) => {
    setEventObj(obj);
    handleOpen();
  };

  const handleView = () => {
    setView((view) => view + 3);
  };
  const getEvents = async () => {
    try {
      setLoading1(true);
      const data = await axios.post(
        `${NEXT_PUBLIC_API_URL}${API_ENDPOINT.GET_EVENTS}`
      );
      setLoading1(false);

      setEventList(data.data.data);
    } catch (error) {
      setLoading1(false);

      console.error("Unexpected error:", error);
      setError("Unexpected error occurred");
    }
  };

  React.useEffect(() => {
    getEvents();
  }, []);


  const getOldEvents = async () => {
    try {
      setLoading2(true);
      const data = await axios.post(
        `${NEXT_PUBLIC_API_URL}${API_ENDPOINT.GET_CMS}`
      );
      setLoading2(false);

      return setOldEventObj(data.data.data[1]);
    } catch (error) {
      setLoading2(false);

      console.log(error);
    }
  };

  React.useEffect(() => {
    getOldEvents();
  }, []);

  return (
    <section className="events-section common-section" id="Event">
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="info-wrap text-center">
              <Typography
                variant="h2"
                className={`common-heading-h2 ${loading2 ? "" : "center-line"}`}
              >
                {loading2 ? (
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "3rem", background: "#0000001c" }}
                  />
                ) : (
                  <span>{oldEventObj?.section_Name}</span>
                )}
              </Typography>
              {loading2 ? (
                <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
              ) : (
                <p className="p16">{oldEventObj?.description}</p>
              )}
            </div>
          </Grid>

          <Grid
            container
            item
            rowSpacing={3}
            spacing={3}
            className="event-grid"
          >
            {loading1 ? (
              <>
                {Array.from({ length: 3 }).map((_, index) => {
                  return (
                    <Grid key={index} item xs={12} sm={12} md={4} lg={4}>
                      <div className="event-card hover-img">
                        <Skeleton variant="rounded" width={340} height={220} />
                      </div>
                    </Grid>
                  );
                })}
              </>
            ) : (
              <>
                {eventList?.slice(0, view).map((i, index) => {
                  return (
                    <Grid key={index} item xs={12} sm={12} md={4} lg={4}>
                      <Box className="event-card hover-img">
                        <Image
                          alt="Lovefools"
                          src={i.photo}
                          className="event-img"
                          width={500}
                          height={500}
                        />

                        <Image
                          alt="Lovefools"
                          src={gallayIcon}
                          className="gallay-icon-img"
                          width={""}
                          height={""}
                        />

                        <div className="event-body">
                          <Typography
                            variant="h3"
                            className="common-heading-h3"
                          >
                            {i.event_Name}
                          </Typography>
                          <div className="d-flex-time">
                            <Typography className="p14">
                              {formatDate(i.date)}-{i.time}
                            </Typography>
                            <Button
                              className="read-more-btn"
                              onClick={() => getEvent(i)}
                            >
                              Read More
                            </Button>
                          </div>
                        </div>
                      </Box>
                    </Grid>
                  );
                })}
              </>
            )}
          </Grid>
          <Grid
            className="text-center view-more-btn-outer"
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            {eventList.length > 6 && (
              <Button
                onClick={handleView}
                variant="contained"
                className="btn-primary mt40"
              >
                View More
              </Button>
            )}

           
          </Grid>
        </Grid>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{ style: { pointerEvents: "none" } }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="event-modal">
          <Grid container>
            <Grid item xs={12} sx={{ display: { md: "none" } }}>
              <CloseIcon className="close-icon" onClick={handleClose} />
            </Grid>
            <Grid item xs={12} md={5}>
              <Box className="event-img-box" onClick={handleClose}>
                <Image
                  alt="Lovefools"
                  src={eventObj.photo}
                  width={500}
                  height={500}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="event-img-box">
                <div className="event-body">
                  <Typography variant="h3" className="common-heading-h3">
                    {eventObj.event_Name}
                  </Typography>
                  <Typography className="common-heading-h5">
                    {eventObj.description}
                  </Typography>
                  <br />
                  <br />
                  <div className="d-flex-time">
                    <Typography className="p14">
                      {formatDate(eventObj.date)}-
                      {convertTimeObjectToString(eventObj.time)}
                    </Typography>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid
              item
              md={1}
              sx={{ display: { xs: "none", md: "block" }, cursor: "pointer" }}
            >
              <CloseIcon className="close-icon" onClick={handleClose} />
            </Grid>
          </Grid>
        </Box>
      </Modal>
   
    </section>
  );
};

export default Events;