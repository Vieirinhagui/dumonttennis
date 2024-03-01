import styled from "styled-components";
import React, { useEffect, useRef } from "react";

import CardHomeUnidades from "../components/CardHomeUnidades";
import CardHomeModalidade from "../components/CardHomeModalidade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HomeContainer = styled.div`
  background-color: black;
  overflow-x: hidden;
`;

const VideoContainer = styled.div`
  width: 100vw;
  height: 400px;
  .video-home {
    width: 100vw;
    height: 400px;
    object-fit: cover;
    z-index: 0;
  }
  @media screen and (min-width: 768px) {
    width: 100vw;
    height: 824px;
    display: flex;
    justify-content: center;
    .video-home {
      position: absolute;
      top: 100px;
      left: 0;
      width: 100vw;
      height: 824px;
      object-fit: cover;
      z-index: 0;
    }
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;
const SeccaoContainer = styled.div`
  padding-top: 16px;
  width: 100vw;
  height: auto;
  text-align: center;
`;

const CarrosselContainer = styled.div`
  .swiper-container .swiper-slide {
    width: 300px;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #ffcc2b;
  }
  .swiper-pagination-bullet-active {
    background: #ffcc2b;
  }
  .swiper-slide-active {
    width: 300px;
  }
  .swiper-slide-nex {
    width: 300px;
  }
`;

const Title = styled.h1`
  font-size: 22px;
  color: #ffcc2b;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 200;
  color: #ffcc2b;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 200;
    color: #ffcc2b;
    margin-bottom: 32px;
  }
`;

const ModalidadesContainer = styled.div`
  padding-top: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const SobreContainer = styled.div`
  background-color: black;
  padding: 128px 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  text-align: left;
  & img {
    width: 80vw;
  }
  & p {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    background-color: black;
    padding: 128px 32px;
    & img {
      width: auto;
    }
    & p {
      width: 60%;
    }
  }
`;

const TextSobre = styled.p`
  color: #ffcc2b;
  width: 60%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playPromise = videoRef.current.play();
  }, []);
  return (
    <HomeContainer>
      <VideoContainer>
        <Video
          src="VideoHome.mp4"
          className="video-home"
          muted
          loop
          playsInline
          ref={videoRef}
        />
      </VideoContainer>
      <SeccaoContainer>
        <Title>MARQUE SUA AVALIAÇÃO</Title>
        <SubTitle>em uma de nossas unidades em Brasília</SubTitle>
        <CarrosselContainer>
          <Swiper
            slidesPerView={1}
            modules={[Pagination, Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="swiper-container"
          >
            <SwiperSlide className="swiper-slide">
              <ImageContainer>
                <CardHomeUnidades
                  image="/iate/iate.jpg"
                  label="IATE CLUBE DE BRASÍLIA"
                  unidade="iate"
                />
              </ImageContainer>
            </SwiperSlide>
            <SwiperSlide style={{ width: "300px", marginRight: "0" }}>
              <ImageContainer>
                <CardHomeUnidades
                  image="/smu/smu.jpg"
                  label="CLUBE DO EXÉRCITO DO SETOR DO MILITAR URBANO"
                  unidade="smu"
                />
              </ImageContainer>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <ImageContainer>
                <CardHomeUnidades
                  image="/assefaz/assefaz.jpg"
                  label="CLUBE OLÍMPICO ASSEFAZ"
                  unidade="assefaz"
                />
              </ImageContainer>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <ImageContainer>
                <CardHomeUnidades
                  image="/lagosul/estrutura/estrutura_lago4.jpeg"
                  label="LAGO SUL"
                  unidade="lagosul"
                />
              </ImageContainer>
            </SwiperSlide>
            <div className="swiper-button-prev">
              <ChevronLeft color="white" size={30} />
            </div>
            <div className="swiper-button-next">
              <ChevronRight color="white" size={30} />
            </div>
          </Swiper>
        </CarrosselContainer>
        <ModalidadesContainer>
          <CardHomeModalidade
            title="DUMONT"
            subtitle="KIDS"
            imagem="/cardsModalidades/kids2.jpeg"
            path="/dumontkids"
          />
          <CardHomeModalidade
            title="AULAS"
            subtitle="EM GRUPO"
            imagem="/cardsModalidades/grupo.jpeg"
            path="/aulasemgrupo"
          />
          <CardHomeModalidade
            title="TREINAMENTO"
            subtitle="COMPETITIVO"
            imagem="/cardsModalidades/treinamento.jpeg"
            path="/treinamento"
          />
          <CardHomeModalidade
            title="AULAS"
            subtitle="INDIVIDUAIS"
            imagem="/cardsModalidades/individual.jpeg"
            path="/aulasindividuais"
          />
        </ModalidadesContainer>
      </SeccaoContainer>
      <SobreContainer>
        <img src="/logos/doit_amarela.png" alt="" />
        <TextSobre>
          A Dumont Tênnis é uma escola renomada em Brasília, com mais de 25 anos
          de experiência em treinamento competitivo. Unidades no oferecemos a
          oportunidade de conhecer, aprender e se divertir com Tênis. Nossa
          metodologia de ensino é baseada na co-descoberta, onde os alunos
          aprendem gradualmente através de aulas dinâmicas e interativas com
          nossos professores capacitados. Queremos proporcionar uma experiência
          esportiva de qualidade, promovendo o desenvolvimento pessoal e social
          dos nossos alunos dentro e fora das quadras.
        </TextSobre>
      </SobreContainer>
    </HomeContainer>
  );
};

export default Home;
