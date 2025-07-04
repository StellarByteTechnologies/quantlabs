import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Image from 'next/image';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';

// images
import img1 from '@/assets/images/photos/12.jpg';
import img2 from '@/assets/images/photos/14.jpg';
import img3 from '@/assets/images/photos/15.jpg';
const Hero = () => {
  return <div className="hero-4 pb-5 pt-7 py-sm-7">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6}>
            <h1 className="hero-title mt-0">
              Let&apos;s work <span className="highlight highlight-warning d-inline-block">together</span>. Join Omaics!
            </h1>
            <p className="fs-16 text-muted pt-3 w-75">
              We&apos;re always open for new creative, analytical and technical minds to join our team. Search for the suitable job.
            </p>
            <div className="pt-4 pb-md-5 mb-md-4">
              <a href="#job-openings" className="btn btn-secondary mb-2" data-toggle="smooth-scroll">
                View All Openings
                <IconifyIcon className="icon-xxs ms-2" icon="lucide:arrow-right" />
              </a>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="img-container text-end ps-lg-5" data-aos="zoom-in">
              <Row className="align-items-center mt-md-0 mt-4">
                <Col xs={6}>
                  <Card className="shadow-lg">
                    <CardBody className="p-1">
                      <Image src={img1} className="img-fluid" alt="photo" />
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={6}>
                  <Row>
                    <Col>
                      <Card className="shadow-lg">
                        <CardBody className="p-1">
                          <Image src={img2} className="img-fluid" alt="photo" />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card className="shadow-lg">
                        <CardBody className="p-1 mb-0">
                          <Image src={img3} className="img-fluid" alt="photo" />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="shape bottom">
        <svg width="1440px" height="40px" viewBox="0 0 1440 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="shape-b" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g id="curve" fill="#fff">
              <path d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z" id="Path" />
            </g>
          </g>
        </svg>
      </div>
    </div>;
};
export default Hero;