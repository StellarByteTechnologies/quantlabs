import { Button, Col, Container, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Image from 'next/image';
const Portfolios = ({
  portfolios
}) => {
  return <section className="section py-lg-5 py-4 mb-5 mb-sm-0 position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <span className="badge rounded-pill badge-soft-success px-2 py-1">Latest</span>
            <h1 className="display-5 fw-semibold">Featured Work</h1>
            <p className="text-muted">Explore some of our latest website projects</p>
          </Col>
        </Row>
        <Row className="features-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration={600}>
          {portfolios.map((portfolio, idx) => <Col lg={6} key={idx}>
              <div className="bg-gray-50 ps-5 pt-5 mt-4 mt-sm-5 rounded feature-item">
                <div className="row align-items-center">
                  <Col xs="auto">
                    <h3 className="text-dark my-0">{portfolio.title}</h3>
                  </Col>
                  <Col className="text-end pe-5">{portfolio.description}</Col>
                </div>
                <Row className="mt-4">
                  <Col>
                    <Image src={portfolio.image} alt="portfolio" className="img-fluid shadow rounded" />
                  </Col>
                </Row>
                <div className="overlay">
                  <Button variant="secondary" size="sm" className="btn-view shadow-lg">
                    View Project <IconifyIcon className="icon-xs ms-2" icon="lucide:arrow-right" />
                  </Button>
                </div>
              </div>
            </Col>)}
        </Row>
        <Row className="mt-6 justify-content-center">
          <Col xs="auto">
            <Button variant="outline-secondary" className="mb-2">
              Explore All Work
              <IconifyIcon className="icon-xxs ms-2" icon="lucide:arrow-right" />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Portfolios;