import React, { useState, useEffect, useRef } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";


const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);
  const [sliderData, setSliderData] = useState(images[0]);
  const [isImageClicked, setIsImageClicked] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isSlideshowActive) {
      timeoutRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [isSlideshowActive, images]);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsSlideshowActive(false);
    setIsImageClicked(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsSlideshowActive(false);
    setIsImageClicked(false);
  };

  const toggleSlideshow = () => {
    setIsSlideshowActive((prevState) => !prevState);
    setIsImageClicked(false);
  };

  const handleClick = (index) => {
    setIsImageClicked(true);
    setCurrentImageIndex(index);
    const slider = images[index];
    setSliderData(slider);
    setIsSlideshowActive(false);
  };

  return (
    <div>
    <div
      style={{
        display: "flex",
        marginBottom: "10px"
      }}
    >
      <div
        style={{
          width: "50%",
          maxHeight: "50%",
          display: "flex",
          flexDirection: "column",
          objectFit: "cover",
          border: "1px solid #ddd",
          borderRadius: "5px"
        }}
      >
        <CardMedia
          component="img"
          src={
            isImageClicked ? sliderData.src : images[currentImageIndex].src
          }
          alt={
            isImageClicked ? sliderData.alt : images[currentImageIndex].alt
          }
        />
      </div>

      <div
        style={{
          marginLeft: "10px",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
          textAlign: "center"
        }}
      >
        <Typography variant="h6">
          {isImageClicked
            ? sliderData.title
            : images[currentImageIndex].title}
        </Typography>
        <Typography variant="body1">
          {isImageClicked
            ? sliderData.description
            : images[currentImageIndex].description}
        </Typography>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        overflowX: "scroll",
        flex: "0 0 auto",
        justifyContent: "center"
      }}
    >
      {images.map((image, i) => (
        <Card
          key={image.id}
          style={{
            borderRadius: "5px",
            maxHeight: "200px",
            margin: "0 5px",
            gap: "10px",
            filter: i === currentImageIndex ? "none" : "grayscale(100%)"
          }}
          onClick={() => handleClick(i)}
        >
          <CardMedia component="img" src={image.src} alt={image.alt} />
        </Card>
      ))}
    </div>

    <div
      style={{
        marginTop: "10px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Button
        onClick={previousImage}
        style={{
          margin: "0 5px",
          padding: "4px 8px",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "#fff",
          fontSize: "14px",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "green"
          }
        }}
      >
        Previous
      </Button>
      <Button
        onClick={toggleSlideshow}
        style={{
          margin: "0 5px",
          padding: "4px 8px",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "#fff",
          fontSize: "14px",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "green"
          }
        }}
      >
        {isSlideshowActive ? "Pause" : "Play"}
      </Button>
      <Button
        onClick={nextImage}
        style={{
          margin: "0 5px",
          padding: "4px 8px",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "#fff",
          fontSize: "14px",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "green"
          }
        }}
      >
        Next
      </Button>
    </div>
  </div>
  );
};

export default Carousel;
