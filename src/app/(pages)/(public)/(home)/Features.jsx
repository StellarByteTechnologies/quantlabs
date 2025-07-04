import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
const FeatureCard = ({
  name,
  icon,
  text
}) => {
  return <Card className="shadow-sm">
      <CardBody className="p-2">
        <div className="d-flex align-items-center">
          <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary me-3 flex-shrink-0">
            {icon ? icon : <span className="fw-bolder">{text}</span>}
          </span>
          <div className="flex-grow-1">
            <h5 className="m-0">{name}</h5>
          </div>
        </div>
      </CardBody>
    </Card>;
};
const Features = ({
  features
}) => {
  return <section className="my-lg-5 py-5 py-sm-7 bg-gradient2 position-relative" data-aos="fade-up">
      <div className="divider top d-none d-sm-block" />
      <Container>
        <Row>
          <Col className="text-center">
            <span className="badge rounded-pill badge-soft-primary px-2 py-1">Features</span>
            <h1 className="display-4 fw-semibold">Why Choose Omaics</h1>
            <p className="text-secondary mx-auto">A modern design, fresh look and feel</p>
          </Col>
        </Row>
        <Row className="mt-5">
          {features.map((feature, idx) => <Col lg={4} data-aos="fade-up" data-duration={600} key={idx}>
              <FeatureCard {...feature} />
            </Col>)}
        </Row>
      </Container>
    </section>;
};
export default Features;