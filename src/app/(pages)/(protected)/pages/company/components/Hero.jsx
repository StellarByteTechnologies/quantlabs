const Jarallax = dynamic(() => import('@/components/Jarallax'), {
  ssr: false
});
import { Col, Container, Row } from 'react-bootstrap';
import coworking2 from '@/assets/images/hero/coworking2.jpg';
import dynamic from 'next/dynamic';
const Hero = () => {
  return <section className="position-relative hero-9">
      <div className="hero-top">
        <Container>
          <Row className="py-7">
            <Col>
              <h1 className="hero-title fw-bold">
                We are on a mission to&nbsp;
                <span className="highlight highlight-info d-inline-block">revolutionize</span> the web
              </h1>
              <p className="mt-3 fs-17">
                We are a full-stack web development studio, run by people who are very passionate about making the web more beautiful
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="position-relative">
        <div className="hero-cta">
          <button className="btn btn-info btn-cta">Let&apos;s Have Talk</button>
        </div>
      </div>
      <div className="hero-bottom">
        <Jarallax tag={'div'} className="jarallax hero-image" data-jarallax data-speed=".2" style={{
        backgroundImage: `url(${coworking2.src})`
      }} />
      </div>
    </section>;
};
export default Hero;