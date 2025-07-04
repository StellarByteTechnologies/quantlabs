'use client';

import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import Typist from 'react-text-typist';
import sass1 from '@/assets/images/hero/saas1.jpg';
import sass2 from '@/assets/images/hero/saas2.jpg';
import sass3 from '@/assets/images/hero/saas3.jpg';

// styles
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const SwiperSlider = () => {
  return <Swiper modules={[Autoplay]} autoplay={{
    delay: 2500,
    disableOnInteraction: false
  }} spaceBetween={30} loop>
      {[sass1, sass2, sass3].map((img, idx) => {
      return <SwiperSlide key={idx}>
            <div className="swiper-slide-content">
              <Image width={712} height={471} src={img} alt="saas1" />
            </div>
          </SwiperSlide>;
    })}
    </Swiper>;
};
const Hero = () => {
  return <section className="position-relative hero-13 overflow-hidden pt-7 pt-lg-6 pb-5">
      <Container>
        <Row className="align-items-center text-center text-sm-start">
          <Col lg={6}>
            <div className="mb-lg-0">
              <h1 className="hero-title">
                A modern look and feel for your&nbsp;
                <Typist className="highlight highlight-success d-inline-block" sentences={['saas', 'mobile app', 'software', 'startup', 'agency', 'portfolio', 'coworking', 'crypto', 'marketing']} typingSpeed={1500} deletingSpeed={700} showCursor={false} startDelay={100} cursorSmooth pauseTime={2500} />
              </h1>
              <p className="fs-18 text-muted pt-3">
                Make your website or web application stand out with high-quality landing pages designed and developed by professionals.
              </p>
              <div className="pt-3 pt-sm-5 mb-4 mb-lg-0">
                <a href="#demos" className="btn btn-primary" data-toggle="smooth-scroll">
                  View Demos
                  <IconifyIcon style={{
                  height: 16,
                  width: 16
                }} className="ms-2 icon icon-xxs" icon="lucide:arrow-down" />
                </a>
                <Link href="/" className="btn btn-link text-primary fw-semibold ms-2">
                  Documentation
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={5} className="offset-lg-1 hero-right">
            <div className="img-container">
              <SwiperSlider />
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Hero;