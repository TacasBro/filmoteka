import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getDiscover } from "../../api/actions/filmsActions";

// CAROUSEL SWIPER IMPORT
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/lazy";
import { Autoplay, Navigation, Lazy } from "swiper";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardFilm from "../../components/CardFilm";

const Home = () => {
  const filmsDiscover = useSelector((state) => state.films.filmsDiscover);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiscover());
  }, [dispatch]);

  if (filmsDiscover.length !== 0) {
    return (
      <Grid container component="section">
        <Typography
          variant="h2"
          sx={{
            mb: 3,
            mt: 3,
            fontWeight: 700,
            fontSize: "2.5rem",
          }}
        >
          Odkrywaj filmy
        </Typography>
        <Grid container>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            modules={[Autoplay, Navigation, Lazy]}
            loop={true}
            navigation
            autoplay={{
              delay: 1900,
              disableOnInteraction: false,
            }}
            lazy={true}
          >
            {filmsDiscover.results.map((films) => {
              return (
                <SwiperSlide key={films.id}>
                  <CardFilm props={films} styled={{ maxWidth: 300 }} imgH="400" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Grid>
      </Grid>
    );
  } else {
    <>
    </>;
  }
};

export default Home;
