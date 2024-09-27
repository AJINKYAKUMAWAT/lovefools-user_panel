"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Grid, Modal } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ReactPlayer from "react-player";
import Image from "next/image";
import { API_ENDPOINT, GalleryImage, NEXT_PUBLIC_API_URL } from "@/utils/constant";
import axios from "axios";
import { AuthContextProvider } from "@/authcontext/AuthContext";

const Gallery = () => {
  const [video, setVideo] = React.useState(false);
  const [photo, setPhoto] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [view, setView] = React.useState(12);
  const [fileData, setFileData] = React.useState(null);
  const [url, setUrl] = React.useState("");
  const { id } = React.useContext(AuthContextProvider);
  const [error, setError] = React.useState("");

  const handleView = () => {
    setView((view) => view + 4);
  };

const Styles = video ? "gallery-video" : "gallery-img"


  const getGallery = () => {
    try {
      axios
        .post(`${NEXT_PUBLIC_API_URL}${API_ENDPOINT.GET_GALLERY}`)
        .then((res) => {
          const photoIds = res.data.data || []; // Ensure photoIds is an array
          console.log("Fetched photoIds:", photoIds);

          if (!photoIds.length) {
            console.error("No events found");
            setError("No events found");
            return [];
          }

          // Use Promise.all to fetch all files in parallel
          return Promise.all(
            photoIds.map((item) => {
              console.log("Fetching file for item:", item);
              return axios
                .get(API_ENDPOINT.GET_FILE(item._id))
                .then((fileRes) => {
                  console.log("File response for item:", fileRes);
                  return { ...item, fileData: fileRes.data };
                })
                .catch((fileErr) => {
                  console.error(
                    `Error fetching file for item ${item._id}:`,
                    fileErr
                  );
                  return { ...item, fileData: null }; // Handle individual file fetch failures
                });
            })
          );
        })
        .then((mergedResponses) => {
          console.log("Merged responses:", mergedResponses);

          if (mergedResponses.length) {
            if (video) {
              const data = mergedResponses.filter((i) => i.type === "Video");
              setFileData(data);
            } else {
              const data = mergedResponses.filter((i) => i.type === "Photo");
              setFileData(data); // Save the merged data to the state
            }
          } else {
            setError("No files fetched");
          }
        })
        .catch((err) => {
          console.error("Error fetching events:", err);
          setError("Error fetching events");
        });
    } catch (error) {
      console.error("Unexpected error:", error);
      // setError('Unexpected error occurred');
    }
  };

  React.useEffect(() => {
    getGallery();
  }, [video]);

  // React.useLayoutEffect(() => {
  //   handleImage();
  // }, [id]);

  return (
    <section className="gallery-section common-section hover-img" id="Gallery">
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="info-wrap text-center">
              <Typography
                variant="h2"
                className="common-heading-h2 center-line"
              >
                <span> Gallery Events</span>
              </Typography>
              <Typography variant="h3" className="common-heading-h3">
                Some photos from Our Restaurant
              </Typography>

              <div className="filter-btn-wrap">
                <Button
                  onClick={() => {
                    setPhoto(true);
                    setVideo(false);
                  }}
                  variant="contained"
                  className={`${photo ? 'btn-primary':'btn-secondary'} btn-sm`}
                >
                  Photo
                </Button>
                <Button
                  onClick={() => {
                    setPhoto(false);
                    setVideo(true);
                  }}
                  variant="contained"
                  className={`${video ? 'btn-primary':'btn-secondary'} btn-sm`}
                >
                  Video
                </Button>
              </div>
            </div>
          </Grid>

          <Grid container item rowSpacing={3} spacing={3}>
            {GalleryImage?.slice(0, view).map((i, index) => {
              return (
                <Grid key={index} item xs={6} sm={6} md={3} lg={3}>
                  <Card className="gallary-card-w">
                    {video ? (
                      <>
                        <div
                          onClick={() => {
                            handleOpen();
                            // setUrl(i.image);
                          }}
                        >
                          <Button className="play-icon-btn">
                            <PlayCircleOutlineIcon className="play-icon" />
                          </Button>
                          <Image
                            alt="Lovefools"
                            src={i.image}
                            className="gallary-thumbnail"
                           
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <Image
                          alt="Lovefools"
                          src={i.image}
                          className="gallary-thumbnail"
                          onClick={()=>{
                            handleOpen()
                            setImage(i.image)
                          }}
                        />
                      </>
                    )}
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <Grid
            className="text-center view-more-btn-outer"
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <Button
              onClick={handleView}
              variant="contained"
              className="btn-primary mt40"
            >
              View More
            </Button>
          </Grid>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
             <Box className={Styles}>
              {video ? (
                <ReactPlayer
                style={{borderRadius:"8px",position:'relative'}}
                  url="https://www.youtube.com/watch?v=o1Gzham0RW8"
                  // playing
                  controls={true}
                  width="100%"
                  height="100%"
                />
              ) : (
                <Image src={image} alt="Gallery" style={{borderRadius:"8px",width:"100%"}} />
              )}
            </Box>
          </Modal>
        </Grid>
      </Container>
    </section>
  );
};

export default Gallery;
