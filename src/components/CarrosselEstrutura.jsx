/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/swiper-bundle.css";

const CarouselContainer = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    color: #222;
  }
  width: 100%;
  max-width: 1200px;
  h1 {
    font-size: 24px;
    margin-bottom: 16px;
    padding-left: 32px;
  }
  .swiper_container {
    z-index: 0;
    height: 350px;
  }
  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    display: none;
  }

  .slider-controler {
    width: 100%;
    position: relative;
    bottom: 4rem;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slider-controler .swiper-button-next {
    left: 58% !important;
    transform: translateX(-58%) !important;
  }
  .slider-controler .slider-arrow {
    background: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    left: 42%;
    transform: translateX(-42%);
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
  }

  .slider-controler .slider-arrow::after {
    content: "";
  }
  .swiper-button-prev {
    height: 50px;
  }
  .swiper-button-next {
    height: 50px;
  }
  .swiper-pagination {
    position: relative;
    width: 7rem !important;
    bottom: -10px;
  }

  .swiper-pagination .swiper-pagination-bullet {
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
  }

  .swiper-pagination .swiper-pagination-bullet-active {
    background: black;
  }
`;

const Image = styled.img`
  border-radius: 20px;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
// eslint-disable-next-line react/prop-types
const CarrosselEstrutura = ({ fotos }) => {
  return (
    <>
      {window.innerWidth > 768 ? (
        <CarouselContainer>
          <h1>ESTRUTURA</h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            {fotos.map((foto, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={foto}
                  width="400px"
                  height="250px"
                  alt="slide_image"
                />
              </SwiperSlide>
            ))}
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ChevronLeft color="black" width={50} />
              </div>
              <div className="swiper-button-next slider-arrow">
                <ChevronRight color="black" width={50} />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </CarouselContainer>
      ) : (
        <CarouselContainer>
          <h1>ESTRUTURA</h1>
          <Swiper
            slidesPerView={1}
            modules={[Pagination, Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 5000 }}
            className="swiper-container"
          >
            {fotos.map((foto, i) => (
              <SwiperSlide key={i} style={{ width: "300px", marginRight: "0" }}>
                <ImageContainer>
                  <Image
                    src={foto}
                    width="300px"
                    height="250px"
                    alt="slide_image"
                  />
                </ImageContainer>
              </SwiperSlide>
            ))}

            <div className="swiper-button-prev">
              <ChevronLeft color="white" size={30} />
            </div>
            <div className="swiper-button-next">
              <ChevronRight color="white" size={30} />
            </div>
          </Swiper>
        </CarouselContainer>
      )}
    </>
  );
};

export default CarrosselEstrutura;
